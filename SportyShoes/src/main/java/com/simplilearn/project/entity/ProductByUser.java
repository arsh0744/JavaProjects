package com.simplilearn.project.entity;

public class ProductByUser {
	
	
	
	
	private SportyShoeUsers reportUser;
	
	private SportyShoeProducts reportproduct;
	
	public ProductByUser() {	}

	public ProductByUser(SportyShoeUsers reportUser, SportyShoeProducts reportproduct) {
		super();
		this.reportUser = reportUser;
		this.reportproduct = reportproduct;
	}

	public SportyShoeUsers getReportUser() {
		return reportUser;
	}

	public void setReportUser(SportyShoeUsers reportUser) {
		this.reportUser = reportUser;
	}

	public SportyShoeProducts getReportproduct() {
		return reportproduct;
	}

	public void setReportproduct(SportyShoeProducts reportproduct) {
		this.reportproduct = reportproduct;
	}


}
