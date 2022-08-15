package com.simplilearn.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.simplilearn.project.entity.Admin;
import com.simplilearn.project.repository.AdminRepository;

@Service
public class AdminControlSevice {

	@Autowired
	private AdminRepository repAd;
	
	
	public Admin adminDetails(){
		return repAd.findById(1).get()	;
		}
	
//----------------------------------------Update Admin UserName--------------------------
	
	
	
	
	
	public ResponseEntity<Object> updateAdminUsername(String auname){
		
		Admin newAdmin = repAd.findById(1).get();
		newAdmin.setaName(auname);
		repAd.save(newAdmin);
		if (newAdmin.getaName().equals(auname))
		return new ResponseEntity<Object>("Username Updated Successfully",HttpStatus.OK);
		else
		return new ResponseEntity<Object>("Username Update Failed",HttpStatus.BAD_REQUEST);
		
	}
	
//----------------------------------Update Admin Password---------------------------------------	
	
public ResponseEntity<Object> updateAdminPassword(String aupass){
		
		Admin newAdmin = repAd.findById(1).get();
		newAdmin.setaPass(aupass);
		repAd.save(newAdmin);
		if (newAdmin.getaPass().equals(aupass))
		return new ResponseEntity<Object>("Password Updated Successfully",HttpStatus.OK);
		else
		return new ResponseEntity<Object>("Password Update Failed",HttpStatus.BAD_REQUEST);
		
	}
	
	
	
	
	
	
	
	
	
	
	
}
