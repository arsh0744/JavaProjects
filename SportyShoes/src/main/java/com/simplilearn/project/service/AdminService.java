package com.simplilearn.project.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.project.entity.ProductByUser;
import com.simplilearn.project.entity.PurchaseReport;
import com.simplilearn.project.entity.SportyShoeProducts;
import com.simplilearn.project.entity.SportyShoeUsers;
import com.simplilearn.project.repository.ProductRepository;
import com.simplilearn.project.repository.PurchaseReportRepository;
import com.simplilearn.project.repository.UserRepository;

@Service
public class AdminService {
	
	
	@Autowired
	private UserRepository repo;
	
	//Add new User Method
	public SportyShoeUsers saveUser(SportyShoeUsers entity) {
		
		return repo.save(entity);
		
					}
	
	//Get all User List
	public List<SportyShoeUsers> getAllUsers(){
		return repo.findAll();
	}
	
	
	
	//Get User by ID
	public SportyShoeUsers getUserByID(int id) {
		if(repo.findById(id).isPresent())
			return repo.findById(id).get();
			
		else
			return null;
	}
	
	// Get User by User name
	
	public List<SportyShoeUsers>  getUserByUname(String uname) {	
		return repo.getUsersByuserName(uname);
		}
	
	
	
	
	//----------Product Services---------------------------------------
	
	
	
	
	@Autowired
	private ProductRepository repo2;
	
	
	//Get all Products
	public List<SportyShoeProducts> getAllProducts(){
		return repo2.findAll();
	}
	
	//Get Product by Category
	public List<SportyShoeProducts>  getProductByCateg(String categ) {	
		return repo2.findBypCategory(categ);
		}
	
	//Get Product By Brand
	
	public List<SportyShoeProducts>  getProductByBrd(String brand) {	
		return repo2.findBypBrand(brand);
		}
	
	
	
	// Add new Product
	public SportyShoeProducts saveProduct(SportyShoeProducts entity) {
		
		return repo2.save(entity);
		
					}
	
	//Get Product by ID
	public SportyShoeProducts getProductByID(int id) {
		if(repo2.findById(id).isPresent())
			return repo2.findById(id).get();
			
		else
			return null;
	}
	
	
	
	//--------------Purchase Report Services----------------------------
	
	
	
	
	@Autowired
	private PurchaseReportRepository repo3;
	
		//Add new Report
	
		public PurchaseReport saveReport(PurchaseReport entity) {
		
		return repo3.save(entity);
		
					}
	
		//Get all reports
		
		
		public List<PurchaseReport> getAllReports(){
			return repo3.findAll();
		}
		
		
		// Find report by ID
		
		public PurchaseReport getReportByID(int id) {
			if(repo3.findById(id).isPresent())
				return repo3.findById(id).get();
				
			else
				return null;
		}
		
		
		
		//Get User  and Product by Purchase Report ID	 
		
		public ProductByUser getUserandProductbyReportID(int rid) {			
			
			PurchaseReport prt = null;
				
			if(repo3.findById(rid).isPresent()) {
				prt = repo3.findById(rid).get();
			}
			else
				prt = null;
				
		//SportyShoeUsers userEntity = repo.findById(prt.getuId()).get();
		
		//SportyShoeProducts productEntity = repo2.findById(prt.getpId()).get();
			
		ProductByUser output = new ProductByUser();
		
		if(prt!=null) {
		output.setReportproduct(repo2.findById(prt.getpId()).get());
		output.setReportUser(repo.findById(prt.getuId()).get());
			
			return output;	
		}
		else 
			return null;
		}
	
		
// Get All Users for A Product
		
		public List<SportyShoeUsers> usersBYProduct(int id){
			
			List<SportyShoeUsers> ureport = new ArrayList<SportyShoeUsers>()  ;
			List<PurchaseReport> preport= repo3.findBypId(id);
			
			for (int i=0;i<preport.size();i++){
				
				int usersid= preport.get(i).getuId();
				ureport.add(i, repo.findById(usersid).get()); 
				
				
			}
			
			return ureport;
		}
		
		public List<SportyShoeProducts> productsBYUser(int id)
		{
			List<SportyShoeProducts> prorep = new ArrayList<SportyShoeProducts>();
			List<PurchaseReport> preport= repo3.findByuId(id);
			
			for (int i=0;i<preport.size();i++){
				
				int prodsid= preport.get(i).getpId();
				prorep.add(i,repo2.findById(prodsid).get()); 
				
			}
			return prorep ;
			
		}
	
	
	
	
	
		
	}

	
	


