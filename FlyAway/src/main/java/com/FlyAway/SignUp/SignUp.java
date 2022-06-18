package com.FlyAway.SignUp;

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
import com.FlyAway.sqlConnector.Connection;

/**
 * Servlet implementation class SignUp
 */
@WebServlet("/SignUp")
public class SignUp extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SignUp() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		  String newFirstName = request.getParameter("newfname");
	       String newLastName = request.getParameter("newlname");
	       String newEmail = request.getParameter("newemail");
	       String newAgeStr = request.getParameter("age");
	       int newAge = Integer.parseInt(newAgeStr) ;
	       String newUserName = request.getParameter("newuname");
	       String newPassword = request.getParameter("newpass");
	       
	       
	       
	      String sqlurl = "jdbc:mysql://localhost:3306/FlyAway";
			 String sqlUser = "root";
			 String sqlPass = "arsh";
			 
			  try {
				  
				  boolean rtr = true  ;
				  
				  Class.forName("com.mysql.cj.jdbc.Driver");
			 java.sql.Connection connect =    DriverManager.getConnection(sqlurl,sqlUser,sqlPass);
			 
			 String query = "Select  * from users";
		        Statement statement = connect.createStatement();
		        ResultSet rs = statement.executeQuery(query); 
		      
		        while(rs.next()) {
		        	String sqlUname = rs.getString("uname");
		        	if(newUserName.equalsIgnoreCase(sqlUname)) {
		        		
		        		rtr= false;
		        		//PrintWriter writer = response.getWriter();
		        		//writer.println("bund maraa user pehle se hai");
		        		break ;
		        		
		        	}
		        	else {
		        		
		    	        rtr = true;
		    	        //PrintWriter writer = response.getWriter();
		    	       // writer.println("Lawde naya user bana tu");
		    	       
		        	}
		        	
		        		        }
		        
		       if (rtr == true) {
		        	
		        	String addQuery = "insert into users values(\" "+ newFirstName + "\",\" " + newLastName
		        			+ "\",\"" + newEmail + "\","+ newAge +",\""+newUserName + "\",\"" + newPassword + "\");";
		        	Statement statement2 = connect.createStatement();
		        	statement2.executeUpdate(addQuery);
		        	response.sendRedirect("AccountAdded.html");
		        
		    	   //PrintWriter writer = response.getWriter();
	    	       // writer.println(addQuery);
	    	       
				
				
			} 
		        else {
		        	PrintWriter writer = response.getWriter();
		        	writer.println("Username Already Exists");
		        	
		        }
		       
		       connect.close();
			  }
		        catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				
				System.out.println("Connection Error ");
				
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				
				System.out.println("Database Error");
			}
			
			
			
	    	
	    }
	       
	       
	       
	       
	       
	       
	       
	       
	
	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		
		
		
		
		doGet(request, response);
	}

}
