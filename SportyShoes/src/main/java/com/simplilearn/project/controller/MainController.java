package com.simplilearn.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.project.service.AdminControlSevice;

@RestController
@RequestMapping("/adminAcc/{aUName}/{aUPass}")
public class MainController {

	//--------------Admin Code----------------------------------
	
	
	@Autowired
	private AdminControlSevice control;
	
	
	@GetMapping("/admin")
	public ResponseEntity<Object> adminDet(@PathVariable String aUName,
			@PathVariable String aUPass){
		
		if (aUName.equals(control.adminDetails().getaName())
				&& aUPass.equals(control.adminDetails().getaPass()))
		return new ResponseEntity<Object>(control.adminDetails(),HttpStatus.FOUND);
		else
			return new ResponseEntity<Object>("Admin NOT FOUND",HttpStatus.BAD_REQUEST) ;
	}
	
//--------------------------Admin Username Update-----------------------------------------------------------	
	
	
	@PutMapping("/updateUSERNAME/{newUname}")
	public ResponseEntity<Object> adminUsernameUpdate(@PathVariable String aUName,
			@PathVariable String aUPass,
			@PathVariable String newUname){
		
		if (aUName.equals(control.adminDetails().getaName())
				&& aUPass.equals(control.adminDetails().getaPass()))
			return control.updateAdminUsername(newUname);
		else
			return new ResponseEntity<Object>("Admin NOT FOUND",HttpStatus.BAD_REQUEST) ;
	}
	
	
//--------------------------Admin Password Update-----------------------------------------------------------	
	
	
		@PutMapping("/updatePASSWORD/{newUpass}")
		public ResponseEntity<Object> adminPassUpdate(@PathVariable String aUName,
				@PathVariable String aUPass,
				@PathVariable String newUpass){
			
			if (aUName.equals(control.adminDetails().getaName())
					&& aUPass.equals(control.adminDetails().getaPass()))
				return control.updateAdminPassword(newUpass);
			else
				return new ResponseEntity<Object>("Admin NOT FOUND",HttpStatus.BAD_REQUEST) ;
		}
	
	
}
