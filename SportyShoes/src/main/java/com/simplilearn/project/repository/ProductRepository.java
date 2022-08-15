package com.simplilearn.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.project.entity.SportyShoeProducts;

@Repository
public interface ProductRepository extends JpaRepository<SportyShoeProducts, Integer>,
CrudRepository<SportyShoeProducts, Integer> {

	@Query("select pBrand,pCategory,pPrice,pStockQuantity "
			+ "from SportyShoeProducts where pCategory =:category")
	public List<SportyShoeProducts>  getProductsByCategory(String category);
	            
	public List<SportyShoeProducts> findBypCategory(String pcategory);

	public List<SportyShoeProducts> findBypBrand(String brand);
		
}
