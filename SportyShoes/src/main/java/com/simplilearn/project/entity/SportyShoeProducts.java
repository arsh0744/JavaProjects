package com.simplilearn.project.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class SportyShoeProducts {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pId;
	
	
	private String pBrand;
	private String pCategory;
	private int pPrice;
	private int pStockQuantity;
	
	
	public SportyShoeProducts() {}

	public SportyShoeProducts(int pId, String pBrand, String pCategory, int pPrice, int pStockQuantity,
			int pPurchaseRequest) {
		super();
		this.pId = pId;
		this.pBrand = pBrand;
		this.pCategory = pCategory;
		this.pPrice = pPrice;
		this.pStockQuantity = pStockQuantity;
		
	}

	public int getpId() {
		return pId;
	}

	public void setpId(int pId) {
		this.pId = pId;
	}

	public String getpBrand() {
		return pBrand;
	}

	public void setpBrand(String pBrand) {
		this.pBrand = pBrand;
	}

	public String getpCategory() {
		return pCategory;
	}

	public void setpCategory(String pCategory) {
		this.pCategory = pCategory;
	}

	public int getpPrice() {
		return pPrice;
	}

	public void setpPrice(int pPrice) {
		this.pPrice = pPrice;
	}

	public int getpStockQuantity() {
		return pStockQuantity;
	}

	public void setpStockQuantity(int pStockQuantity) {
		this.pStockQuantity = pStockQuantity;
	}

	

	
	
	
	

}
