package com.simplilearn.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.project.entity.SportyShoeUsers;


@Repository
public interface UserRepository extends JpaRepository<SportyShoeUsers, Integer>{
	
	
	public List<SportyShoeUsers>  getUsersByuserName(String userName);

}
