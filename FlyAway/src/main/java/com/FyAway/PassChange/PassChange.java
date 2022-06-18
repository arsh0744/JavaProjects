package com.FyAway.PassChange;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class PassChange
 */
@WebServlet("/PassChange")
public class PassChange extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String exisUname = request.getParameter("ExisUname");
		String exisPass = request.getParameter("exisPass");
		String newPass = request.getParameter("newPass");
		String newPass2 = request.getParameter("newPass2");
		
		
		
		if(newPass.equals(newPass2)) {
			
			String sqlurl = "jdbc:mysql://localhost:3306/FlyAway";
			 String sqlUser = "root";
			 String sqlPass = "arsh";
			  
			  try {
				  boolean rtr = true;
				  Class.forName("com.mysql.cj.jdbc.Driver");
			 java.sql.Connection connect =    DriverManager.getConnection(sqlurl,sqlUser,sqlPass);
			 
			 String query = "Select  * from users";
		        Statement statement = connect.createStatement();
		        ResultSet rs = statement.executeQuery(query); 
		        
		        while(rs.next()) {
		        	String eUname = rs.getString("uname");
		        	String epass = rs.getString("password");
		        	
		        	if(eUname.equals(exisUname) && epass.equals(exisPass)) {
		        		
		        		String passUpdateQuery = "update users set password= \"" + newPass + "\" where uname =\""+exisUname + "\"";
		        		Statement statement3 = connect.createStatement();
			        	statement3.executeUpdate(passUpdateQuery);
			        	rtr = true ;
			        	PrintWriter writer= response.getWriter();
			        	writer.println("Password Changed Succesfully");
			        	//response.sendRedirect("AccountAdded.html");
		        		
		        		break ;
		        	}
		        	else {
		        		
		        		
			        	rtr = false ;
		        		
		        	}
		        	
		        }
		        
		        if (rtr == true) {
		        	response.sendRedirect("UserLogin.html");
		        PrintWriter writer1= response.getWriter();
	        	writer1.append("Aaja Bhadwe");
		        }
		        else {
		        	PrintWriter writer1= response.getWriter();
		        	writer1.println("Credentials Do Not Match with an Existing Account");
		        }
		        
		        connect.close();
		        
		        
		        
			
			
			  }catch (ClassNotFoundException e) {
					// TODO Auto-generated catch block
					
					System.out.println("Connection Error ");
					
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					
					PrintWriter writer = response.getWriter();
				     writer.println("Enter All Values");
				}
			
			
		}
		else {
			
			PrintWriter writer = response.getWriter();
			writer.println("New Passwords Do Not Match");
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
