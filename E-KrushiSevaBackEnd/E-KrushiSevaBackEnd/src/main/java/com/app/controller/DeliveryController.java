package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.Entity.CombineUserOrder;
import com.app.service.EmailService;
import com.app.service.IDeliveryService;
import com.app.service.OtpGenerator;

@RestController
@CrossOrigin
@RequestMapping("/delivery")
public class DeliveryController {

	@Autowired
	private IDeliveryService ideliveryService;

	@Autowired
	private OtpGenerator otpGenerator;

	@Autowired
	private EmailService emailService;

	@GetMapping("/showOrder")
	public List<CombineUserOrder> showOrder() {
		return ideliveryService.showOrder();
	}

	@PostMapping("/getOrderById")
	public CombineUserOrder getOrderById(@RequestBody CombineUserOrder combineUserOrder) {
		return ideliveryService.fetchOrderById(combineUserOrder);
	}

	@PostMapping("/editOrderStatus")
	public void editOrderStatus(@RequestBody CombineUserOrder combineUserOrder) {

		System.out.println(combineUserOrder.getStatus());
		ideliveryService.editByOrderStatus(combineUserOrder);
	}

	// Otp Generator
	@PostMapping("otpgenerator/{email}")
	public ResponseEntity<?> sendOtp(@PathVariable String email) {
		String otp = otpGenerator.generateOTP();
		emailService.sendOtp(email, otp);
		return new ResponseEntity<>("OTP Sent Successfully", HttpStatus.ACCEPTED);
	}

	// Otp Generator
	@PostMapping("msg/{email}")
	public ResponseEntity<?> sendMsg(@PathVariable String email) {

		emailService.sendOtp(email, "Your Order Is Been Dispatched");
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

}
