package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.Entity.Users;
import com.app.service.UserServiceImpl;

@CrossOrigin
@RestController
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private UserServiceImpl userServiceImpl;
	
	
	@GetMapping(path="/showUsers")
	public List<Users> showUsers()
	{
		return userServiceImpl.fetchUsers();
	}
	
	@PutMapping("/admindisableuser/{id}")
	public ResponseEntity<?> disableUser(@RequestBody Users user,@PathVariable int id){
		Users u = userServiceImpl.disableUser(user, id);
		return new ResponseEntity<>(u, HttpStatus.OK);
	}

	@PutMapping("/adminenableuser/{id}")
	public ResponseEntity<?> enableUser(@RequestBody Users user, @PathVariable int id) {
		Users u = userServiceImpl.enableUser(user, id);
		return new ResponseEntity<>(u, HttpStatus.OK);
	}

	@PostMapping("/addDeliveryBoy")
	public String addDeliveryBoy(@RequestBody Users user) {
		userServiceImpl.registerOrEditUser(user);
		return "Added!!!!!!";
	}
	
}
