package com.FlyAway.FlightList;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
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
 * Servlet implementation class FlightList
 */
@WebServlet("/FlightList")
public class FlightList extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
		
		
		String source = request.getParameter("source");
		String destination = request.getParameter("to");
		String travelDate = request.getParameter("date");
		int passCount = Integer.parseInt(request.getParameter("passCount"))   ;
				
		
		
		
		String sqlurl = "jdbc:mysql://localhost:3306/FlyAway";
		 String sqlUser = "root";
		 String sqlPass = "arsh";
		try {
			  boolean rtr = false   ;
			  Class.forName("com.mysql.cj.jdbc.Driver");
		 java.sql.Connection connect =    DriverManager.getConnection(sqlurl,sqlUser,sqlPass);
		 
		 String query = "Select  * from flights where src =\""+ source +"\" and destination = \"" + destination + "\";";
	        Statement statement = connect.createStatement();
	        ResultSet rs = statement.executeQuery(query); 
	        
	        
	        
	        PrintWriter out= response.getWriter();
	        out.println("<html>");
	        out.println("<head>");
        	out.println("<title>Flight Results</title>");
        	out.println("</head>");
        	out.println("<h1>Select a Flight Option :</h1><br/>");
        	
        	out.println("<form action =\"http://localhost:8080/FlyAway/PaymentPortal\" method = \"post\">");
	        
	        while(rs.next()) {
	        	String src = rs.getString("src");
	        	String dest = rs.getString("destination");
	        	String FlightName = rs.getString("FlightName");
	        	String FlightTime = rs.getString("time");
	        	int price = rs.getInt("ticket_price");
	        	
	        	//int fare = price * passCount;
	        	//String fareStr = fare.to
	        			String fare=String.valueOf(price*passCount);
	        	
	        	
	        	//out.println(src+dest+FlightName+FlightTime+fare);
	        	
	  
	        	
	        	
	        	out.println("<input type =\"radio\" id = \"fare\" name = \"fare\" value =\""+fare+"\">");
	        	out.println("<label for=\"fare\">" + FlightName + "  at "+ FlightTime +"   :   Total Fare - "+fare+ "</label><br>");
	        	
	        	
	        	
	        	
	        	
	        	
	        	
	        }
	        out.println("<input type =\"submit\" value =\"Make Payment\">");
	        out.println("</form>");
	        
	        out.println("</body>");
        	out.println("</html>");
	        //statement.execute(query);
			System.out.println("Success");
			
			
			connect.close();
			
			
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			
			System.out.println("Connection Error ");
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			
			PrintWriter writer = response.getWriter();
		     writer.println("Enter All Values");
		}
		
		
		
		
		
		
		
		
		
		
		
		//PrintWriter writer =  response.getWriter();
		//writer.println(destination);
		//writer.println(travelDate);
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
