package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

	@Autowired
	private JavaMailSender emailSender;

	public void sendEmailForNewRegistration(String email) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("shetejpatil7777@gmail.com");
		message.setTo(email);
		message.setSubject("Thank you for Registering with us!");
		message.setText("WELCOME to the E krushi Seva ");
		emailSender.send(message);
	}

	public void sendOtp(String email, String otp) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("shetejpatil7777@gmail.com");
		message.setTo(email);
		message.setSubject("Welcome To E-Krushi Seva");
		message.setText(otp);
		emailSender.send(message);
	}
}
