package com.FlyAway.sqlConnector;

import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Connection {

	public static void main(String[] args) {
		/*System.out.println("fhdsfhsf");
		String sqlurl = "jdbc:mysql://localhost:3306/FlyAway";
		 String sqlUser = "root";
		 String sqlPass = "arsh";
		  try {
			  
			  Class.forName("com.mysql.cj.jdbc.Driver");
		 DriverManager.getConnection(sqlurl,sqlUser,sqlPass);
			//DriverManager.getConnection(sqlurl,sqlUser,sqlPass);
			System.out.println("Success");
			
			
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			
			System.out.println("Connection Error ");
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			
			System.out.println("Database Error");
		}
		  */
		selectData();
		
	}

	

	public static void selectData() {

		String sqlurl = "jdbc:mysql://localhost:3306/FlyAway";
		 String sqlUser = "root";
		 String sqlPass = "arsh";
		  try {
			  
			  Class.forName("com.mysql.cj.jdbc.Driver");
		 java.sql.Connection connect =    DriverManager.getConnection(sqlurl,sqlUser,sqlPass);
		 String query = "Select  * from users";
	        Statement statement = connect.createStatement();
	        ResultSet rs = statement.executeQuery(query); 
	        while(rs.next()) {
	        	String sqlUname = rs.getString("uname");
	        	System.out.println(sqlUname);
	        }
	        //statement.execute(query);
			System.out.println("Success");
			
			
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			
			System.out.println("Connection Error ");
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			
			System.out.println("Database Error");
		}
		
	}

    public static boolean addUser(String firname, String lasname, String mail, int userage, String prefUname) {
    	
    	String sqlurl = "jdbc:mysql://localhost:3306/FlyAway";
		 String sqlUser = "root";
		 String sqlPass = "arsh";
		 boolean rtr = false ;
		  try {
			  
			  Class.forName("com.mysql.cj.jdbc.Driver");
		 java.sql.Connection connect =    DriverManager.getConnection(sqlurl,sqlUser,sqlPass);
		 
		 String query = "Select  * from users";
	        Statement statement = connect.createStatement();
	        ResultSet rs = statement.executeQuery(query); 
	        while(rs.next()) {
	        	String sqlUname = rs.getString("uname");
	        	if(sqlUname.equalsIgnoreCase(prefUname)) {
	        		
	        		rtr= false;
	        		
	        	}
	        	else {
	        		String query1 = "insert into users values("+firname+",";
	    	        Statement statement1 = connect.createStatement();
	    	        statement1.executeQuery(query1);
	    	        rtr = true;
	    	       
	        		
	        	}
	        	connect.close();
	        	
	        	
	        }
	        //statement.execute(query);
			System.out.println("Success");
			
			
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			
			System.out.println("Connection Error ");
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			
			System.out.println("Database Error");
		}
		
		
		return rtr;
    	
    }

}
