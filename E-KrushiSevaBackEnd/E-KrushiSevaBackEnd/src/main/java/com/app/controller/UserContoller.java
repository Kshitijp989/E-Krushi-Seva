package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.Entity.CropInfo;
import com.app.Entity.Users;
import com.app.Repository.UserDao;
import com.app.custom_excs.CustomerHandlingException;
import com.app.dto.LoginRequest;
import com.app.dto.LoginResponse1;
import com.app.service.CropInformServiceImpl;
import com.app.service.EmailService;
import com.app.service.IUserService;
import com.app.service.OtpGenerator;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserContoller {

	@Autowired
	private IUserService userService;

	@Autowired
	private EmailService emailService;

	@Autowired
	private CropInformServiceImpl cropInformServiceImpl;
	@Autowired
	private UserDao userRepo;
	@Autowired
	private OtpGenerator otpGenerator;

	public UserContoller() {
		System.out.println("int const " + getClass().getName());
	}

	@PutMapping("/edit/{uid}")
	public ResponseEntity<?> editUser(@RequestBody Users user, @PathVariable int uid) {
		return new ResponseEntity<>(userService.edit(user, uid), HttpStatus.ACCEPTED);
	}

	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody Users user) throws CustomerHandlingException {
		System.out.println("In register new user");
		try {
			return new ResponseEntity<>(userService.registerOrEditUser(user), HttpStatus.CREATED);
		} catch (Exception e) {
			throw new CustomerHandlingException("Duplicated Email Detected...!!");
		}
	}

	@PostMapping("/UserLogin")
	public LoginResponse1 authenticateUser(@RequestBody LoginRequest request) throws CustomerHandlingException {
		Users u = null;
		try {
			u = userService.findByEmailAndPassword(request.getEmail(), request.getPassword());
			if (u == null) {
				return new LoginResponse1("User Not Found", u);
			}
			if (u.getRole().equals("ADMIN") && u.getStatus().equals("Active")) {
				return new LoginResponse1("User Found1", u);
			} else if (u.getRole().equals("CONSUMER") && u.getStatus().equals("Active")) {
				return new LoginResponse1("User Found2", u);
			} else if (u.getRole().equals("FARMER") && u.getStatus().equals("Active")) {
				return new LoginResponse1("User Found3", u);
			} else if (u.getRole().equals("DELIVERY_BOY") && u.getStatus().equals("Active")) {
				return new LoginResponse1("User Found4", u);
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
			throw new CustomerHandlingException("Invalid Email Address");

		}
		return new LoginResponse1("User Found", u);

	}

	@PostMapping("/getByEmail")
	public Users getUsers(@RequestBody LoginRequest reuest) {
		return userService.getUserByEmail(reuest.getEmail());

	}

	@PostMapping("/editUser")
	public void editUser(@RequestBody Users user) {
		try {
			userService.editUserByStatus(user);
		} catch (Exception e) {
			System.out.println("kkkkkkkkkkkkkkkkkkkkk");
			System.out.println(e.getMessage());
			System.out.println("kkkkkkkkkkkkkkkkkkkkk");
		}
	}

	@GetMapping("/showCropInfo")
	public List<CropInfo> getCropInfo() {
		return cropInformServiceImpl.showCropInfo();
	}

	@DeleteMapping("/delete/{uid}")
	public ResponseEntity<?> deleteUserById(@PathVariable Integer uid) {

		return new ResponseEntity<>(userService.deleteUserById(uid), HttpStatus.OK);
	}

	@PostMapping("/profile/{email}")
	public Users farmerProfile(@PathVariable String email) {
		return userRepo.findByEmail(email);
	}

	// Otp Generator
	@PostMapping("otpgenerator/{email}")
	public ResponseEntity<?> sendOtp(@PathVariable String email) {
		String otp = otpGenerator.generateOTP();
		emailService.sendOtp(email, otp);
		return new ResponseEntity<>("OTP Sent Successfully", HttpStatus.ACCEPTED);
	}

	// Confirm Otp
	@PostMapping("/otpverify/{otp}")
	public String verifyOtp(@PathVariable String otp) {
		boolean res = OtpGenerator.verifyOtp(otp);
		if (res)
			return "OTP verified";
		else
			return "OTP Invalid Please Try Again";
	}

	// update user for password recover
	@PostMapping("/updateuser")
	public ResponseEntity<?> updateUser(@RequestBody Users user) {
		userService.updateUser(user);
		return new ResponseEntity<>("Password Updated", HttpStatus.OK);
	}

	// get user by email
	@GetMapping("/getuserbyemail/{email}")
	public ResponseEntity<?> getUesrByEmail(@PathVariable String email) {
		Users user = userService.getUserByEmail(email);
		return new ResponseEntity<>(user, HttpStatus.ACCEPTED);
	}

}
