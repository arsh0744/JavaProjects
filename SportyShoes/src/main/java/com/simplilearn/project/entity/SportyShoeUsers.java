package com.simplilearn.project.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class SportyShoeUsers {
	
	private String uFname;
	private String uLname;
	private String uMail;
	private int uNumber;
	private String uAddress;
	private String userName;
	
	
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int uId;
	
	
	
	public SportyShoeUsers() {}



	public SportyShoeUsers(String uFname, String uLname, String uMail, int uNumber, String uAddress, String userName,
			String uPassword, int uId) {
		super();
		this.uFname = uFname;
		this.uLname = uLname;
		this.uMail = uMail;
		this.uNumber = uNumber;
		this.uAddress = uAddress;
		this.userName = userName;
		
		this.uId = uId;
	}



	public String getuFname() {
		return uFname;
	}



	public void setuFname(String uFname) {
		this.uFname = uFname;
	}



	public String getuLname() {
		return uLname;
	}



	public void setuLname(String uLname) {
		this.uLname = uLname;
	}



	public String getuMail() {
		return uMail;
	}



	public void setuMail(String uMail) {
		this.uMail = uMail;
	}



	public int getuNumber() {
		return uNumber;
	}



	public void setuNumber(int uNumber) {
		this.uNumber = uNumber;
	}



	public String getuAddress() {
		return uAddress;
	}



	public void setuAddress(String uAddress) {
		this.uAddress = uAddress;
	}



	public String getUserName() {
		return userName;
	}



	public void setUserName(String userName) {
		this.userName = userName;
	}



	


	



	public int getuId() {
		return uId;
	}



	public void setuId(int uId) {
		this.uId = uId;
	}
	
	

	
	
	
	
}
