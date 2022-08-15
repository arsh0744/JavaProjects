package com.simplilearn.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.project.entity.ProductByUser;
import com.simplilearn.project.entity.PurchaseReport;
import com.simplilearn.project.entity.SportyShoeProducts;
import com.simplilearn.project.entity.SportyShoeUsers;
import com.simplilearn.project.service.AdminControlSevice;
import com.simplilearn.project.service.AdminService;



@RestController
@RequestMapping("/{aUName}/{aUPass}")
public class AdminController {
	
	
	
	
	@Autowired
	private AdminService service;
	
	@Autowired
	private AdminControlSevice control;
	
	
	//User Addition
	
	@PostMapping("/user")
	public ResponseEntity<Object> addUser(@RequestBody SportyShoeUsers entity,
			@PathVariable String aUName,
			@PathVariable String aUPass){
		if (aUName.equals(control.adminDetails().getaName())
				&& aUPass.equals(control.adminDetails().getaPass())) {
		SportyShoeUsers resp = service.saveUser(entity);
		
		if (resp!=null) {
			System.out.println(entity);
			return new ResponseEntity<Object>(resp,HttpStatus.CREATED);
			
		}
		else {
		return new ResponseEntity<Object>("User Not Added",HttpStatus.BAD_REQUEST);
		}
		}
		return new ResponseEntity<Object>("Admin NOT FOUND",HttpStatus.BAD_REQUEST) ;
		}
	
	
	
	
	// Get All Users
	
	
	@GetMapping("/user")
	public ResponseEntity<Object> getuser(@PathVariable String aUName,
			@PathVariable String aUPass){
		if (aUName.equals(control.adminDetails().getaName())
				&& aUPass.equals(control.adminDetails().getaPass()))
		return new ResponseEntity<Object>(service.getAllUsers(),HttpStatus.FOUND);
				
		else
			return new ResponseEntity<Object>("Admin NOT FOUND",HttpStatus.BAD_REQUEST) ;
	}
	
	
	
	
	
	
	
	//Get User by User Name
	
	
	
	@GetMapping("/user/username/{username}")
	public ResponseEntity<Object> getuserbyUSERNAME(@PathVariable String aUName,
			@PathVariable String aUPass,
			@PathVariable String username){
		
		if (aUName.equals(control.adminDetails().getaName())
				&& aUPass.equals(control.adminDetails().getaPass())) {
			
			if(service.getUserByUname(username)!=null)
		return  new ResponseEntity<Object>(service.getUserByUname(username)
				,HttpStatus.FOUND);
		else 
			return new ResponseEntity<Object>("User Not Found",HttpStatus.NOT_FOUND);
		}
		
		else 
			return new ResponseEntity<Object>("Admin NOT FOUND",HttpStatus.BAD_REQUEST) ;
	}
	
	//------------------------------User By Id
	
	@GetMapping("/user/{id}")
	public ResponseEntity<Object> findUById(@PathVariable String aUName,
			@PathVariable String aUPass,
			@PathVariable int id){
		
		if (aUName.equals(control.adminDetails().getaName())
				&& aUPass.equals(control.adminDetails().getaPass())) {
		SportyShoeUsers resp = service.getUserByID(id);
		
		if (resp!=null)
			return new ResponseEntity<Object>(resp,HttpStatus.FOUND);
		else
			return new ResponseEntity<Object>("User Not Found", HttpStatus.NOT_FOUND);
		}
		else 
			return new ResponseEntity<Object>("Admin NOT FOUND",HttpStatus.BAD_REQUEST) ;
	}
	
	
	
	
	
	
	//-----------------------Product Services---------------------------------
	
	
	
	
	// --------------------All products------------------------
	
	
	
	@GetMapping("/products")
	public ResponseEntity<Object> getAProd(@PathVariable String aUName,
			@PathVariable String aUPass){
		
		if (aUName.equals(control.adminDetails().getaName())
				&& aUPass.equals(control.adminDetails().getaPass()))
		return new ResponseEntity<Object>(service.getAllProducts(),HttpStatus.FOUND);
	
		else 
			return new ResponseEntity<Object>("Admin NOT FOUND",HttpStatus.BAD_REQUEST) ;
	
	}
	
	
	//---------------------Products by Category--------------------
	
	
	
	@GetMapping("/products/category/{cat}")
	public ResponseEntity<Object> productsByCat(@PathVariable String aUName,
			@PathVariable String aUPass,
			@PathVariable String cat){
		
		if (aUName.equals(control.adminDetails().getaName())
				&& aUPass.equals(control.adminDetails().getaPass())) {
			if(service.getProductByCateg(cat).size()>0)
		return new ResponseEntity<Object>(service.getProductByCateg(cat),HttpStatus.FOUND);
		
			else
				return new ResponseEntity<Object>("Category NOT FOUND",HttpStatus.NOT_FOUND) ;
				
		}
		else 
			return new ResponseEntity<Object>("Admin NOT FOUND",HttpStatus.BAD_REQUEST) ;
		
	}
	
	
	//-------------Product by Brand----------------------------------------
	
	@GetMapping("/products/brand/{brand}")
	public ResponseEntity<Object> productsByBRND(@PathVariable String aUName,
			@PathVariable String aUPass,
			@PathVariable String brand){
		
		if (aUName.equals(control.adminDetails().getaName())
				&& aUPass.equals(control.adminDetails().getaPass())) {
			if (service.getProductByBrd(brand).size()>0)
		return new ResponseEntity<Object>(service.getProductByBrd(brand),HttpStatus.FOUND);
			else
				return new ResponseEntity<Object>("Brand NOT FOUND",HttpStatus.NOT_FOUND) ;
		}
		else
			return new ResponseEntity<Object>("Admin NOT FOUND",HttpStatus.BAD_REQUEST) ;
	}
	
	
	
	//-----------------Product by ID------------------------------------
	
	@GetMapping("/products/id/{id}")
	public ResponseEntity<Object> findPById( @PathVariable String aUName,
			@PathVariable String aUPass,
			@PathVariable int id){
		
		if (aUName.equals(control.adminDetails().getaName())
				&& aUPass.equals(control.adminDetails().getaPass())) {
		
		SportyShoeProducts resp2 = service.getProductByID(id);
		
		if (resp2!=null)
			return new ResponseEntity<Object>(resp2,HttpStatus.FOUND);
		else
			return new ResponseEntity<Object>("Product Not Found", HttpStatus.NOT_FOUND);
		}
		else
			return new ResponseEntity<Object>("Admin NOT FOUND",HttpStatus.BAD_REQUEST) ;
			
	}
	
	
	//---------------------Add Product----------------------------------------------------
	
	@PostMapping("/products")
	public ResponseEntity<Object> addProd(@PathVariable String aUName,
			@PathVariable String aUPass,
			@RequestBody SportyShoeProducts entity){
		
		if (aUName.equals(control.adminDetails().getaName())
				&& aUPass.equals(control.adminDetails().getaPass())) {
		SportyShoeProducts resp = service.saveProduct(entity);
		
		if (resp!=null) 
					return new ResponseEntity<Object>(resp,HttpStatus.CREATED);
		else 
					return  new ResponseEntity<Object>("Product Not Added", HttpStatus.BAD_REQUEST);
		
		}
		else
			return new ResponseEntity<Object>("Admin NOT FOUND",HttpStatus.BAD_REQUEST) ;
		
		}
	
		
//-------------------------------Report Services----------------------------------		
	
	
	
	
	
	//------------------------------------Add Report-------------------------------------
	@PostMapping("/report")
	public ResponseEntity<Object> addRep(@PathVariable String aUName,
			@PathVariable String aUPass,
			@RequestBody PurchaseReport entity){
		
		if (aUName.equals(control.adminDetails().getaName())
				&& aUPass.equals(control.adminDetails().getaPass())) {
			
		
		PurchaseReport resp = service.saveReport(entity);
		if (resp!=null)
			return new ResponseEntity<Object>(resp,HttpStatus.CREATED);
		else 
		return  new ResponseEntity<Object>("Report Not Added", HttpStatus.BAD_REQUEST);
		
		}
		else
			return new ResponseEntity<Object>("Admin NOT FOUND",HttpStatus.BAD_REQUEST) ;
		
	}
	
	//-----------------------------Get All Reports----------------------------------
	
	@GetMapping("/report")
	public ResponseEntity<Object> getReports(@PathVariable String aUName,
			@PathVariable String aUPass){
		if (aUName.equals(control.adminDetails().getaName())
				&& aUPass.equals(control.adminDetails().getaPass())) {
			
		return new ResponseEntity<Object>(service.getAllReports(),HttpStatus.FOUND);
		}
		else
			return new ResponseEntity<Object>("Admin NOT FOUND",HttpStatus.BAD_REQUEST) ;
	}
	
	//--------------Report by ID-------------------------------------------
	
	@GetMapping("/report/{repId}")
	public ResponseEntity<Object> repById(@PathVariable String aUName,
			@PathVariable String aUPass,
			@PathVariable int repId) {
		
		if (aUName.equals(control.adminDetails().getaName())
				&& aUPass.equals(control.adminDetails().getaPass())) {
		PurchaseReport resp3 = service.getReportByID(repId);
		
		if (resp3!=null)
			return new ResponseEntity<Object>(resp3,HttpStatus.FOUND);
		else
			return new ResponseEntity<Object>("Product Not Found", HttpStatus.NOT_FOUND);
		}
		
		else
			return new ResponseEntity<Object>("Admin NOT FOUND",HttpStatus.BAD_REQUEST) ;
	}
	
	
	
	
	// --------------user and product by report id----------------------------
	
	@GetMapping("/userandproduct/report/{id}")
	public ResponseEntity<Object> findReportById(@PathVariable String aUName,
			@PathVariable String aUPass,
			@PathVariable int id){
		
		if (aUName.equals(control.adminDetails().getaName())
				&& aUPass.equals(control.adminDetails().getaPass())) {
			
		ProductByUser resp = service.getUserandProductbyReportID(id);
		
		if (resp!=null)
			return new ResponseEntity<Object>(resp,HttpStatus.FOUND);
		else
			return new ResponseEntity<Object>("Report Not Found", HttpStatus.NOT_FOUND);
		
		}
		else
			return new ResponseEntity<Object>("Admin NOT FOUND",HttpStatus.BAD_REQUEST) ;
	}

	//-------------- Users by Product---------------------------------------------
	
	@GetMapping("/users/product/{id}")
	public ResponseEntity<Object> findUsersByProduct(@PathVariable String aUName,
			@PathVariable String aUPass,
			@PathVariable int id){
		
		
		if (aUName.equals(control.adminDetails().getaName())
				&& aUPass.equals(control.adminDetails().getaPass())) {
		List<SportyShoeUsers> finalList = service.usersBYProduct(id);
		
		if (finalList.size()>0)
			return new ResponseEntity<Object>(finalList,HttpStatus.FOUND);
		else
			return new ResponseEntity<Object>("No Orders for this Product", HttpStatus.NOT_FOUND);
		}
		
		else
			return new ResponseEntity<Object>("Admin NOT FOUND",HttpStatus.BAD_REQUEST) ;
		
	}
	
	//--------------------------------Products by User------------------------------------------
	
	
	@GetMapping("/products/user/{id}")
	public ResponseEntity<Object> findProdsByUser(@PathVariable String aUName,
			@PathVariable String aUPass,
			@PathVariable int id){
		
		if (aUName.equals(control.adminDetails().getaName())
				&& aUPass.equals(control.adminDetails().getaPass())) {
		
		List<SportyShoeProducts> finalProdList = service.productsBYUser(id);
		if (finalProdList!=null)
			return new ResponseEntity<Object>(finalProdList,HttpStatus.FOUND);
		else
			return new ResponseEntity<Object>("No Products for this User", HttpStatus.NOT_FOUND);
		}
		else
			return new ResponseEntity<Object>("Admin NOT FOUND",HttpStatus.BAD_REQUEST) ;
		
	}
	
	
	

}
