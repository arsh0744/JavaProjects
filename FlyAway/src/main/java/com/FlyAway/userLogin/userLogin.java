package com.FlyAway.userLogin;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class userLogin
 */
@WebServlet("/userLogin")
public class userLogin extends HttpServlet  {
	
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		String uname = request.getParameter("uname");
		String upass = request.getParameter("upass");
		
		
		
		String sqlurl = "jdbc:mysql://localhost:3306/FlyAway";
		 String sqlUser = "root";
		 String sqlPass = "arsh";
		  
		  try {
			  boolean rtr = false   ;
			  Class.forName("com.mysql.cj.jdbc.Driver");
		 java.sql.Connection connect =    DriverManager.getConnection(sqlurl,sqlUser,sqlPass);
		 
		 String query = "Select  * from users";
	        Statement statement = connect.createStatement();
	        ResultSet rs = statement.executeQuery(query); 
	        while(rs.next()) {
	        	String sqlUname = rs.getString("uname");
	        	String dbpass = rs.getString("password");
	        	if(sqlUname.equalsIgnoreCase(uname) && dbpass.equals(upass) ) {
	        		
	        		rtr= true;
	        		
	        	}
	        	else {
	        		
	    	        rtr = false;
	    	       
	        		
	        	}
	        	
	        	
	        }
	        //statement.execute(query);
			System.out.println("Success");
			
			if (rtr == true) {
				//PrintWriter writer = response.getWriter();
			    //  writer.println("Aaja Randii");
			     // RequestDispatcher rd = request.getRequestDispatcher("/TravelDetails.html");
				//this.getServletContext().getRequestDispatcher("/TravelDetails.html");

				response.sendRedirect("UserInterface.html");
				
			}
			else {
				 PrintWriter writer = response.getWriter();
			      writer.println("User Does Not Exist");
			}
			connect.close();
			
			
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			
			System.out.println("Connection Error ");
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			
			PrintWriter writer = response.getWriter();
		     writer.println("Enter All Values");
		}
		
		
   	
   }
	
		
		
	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
