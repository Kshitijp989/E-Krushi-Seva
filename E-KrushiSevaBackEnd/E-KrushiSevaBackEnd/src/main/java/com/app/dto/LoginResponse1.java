package com.app.dto;

import com.app.Entity.Users;

public class LoginResponse1 {

	private String line;
	private Users data;

	public LoginResponse1() {
		System.out.println("\n----------- CTOR: LoginResponse default CTOR --------------\n");
	}

	public LoginResponse1(String line, Users data) {
		super();
		this.line = line;
		this.data = data;
	}

	public String getLine() {
		return line;
	}

	public void setLine(String line) {
		this.line = line;
	}

	public Users getData() {
		return data;
	}

	public void setData(Users data) {
		this.data = data;
	}

}
