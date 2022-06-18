package com.FlyAway.PaymentPortal;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class PaymentPortal
 */
@WebServlet("/PaymentPortal")
public class PaymentPortal extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	
		int fare = Integer.parseInt(request.getParameter("fare"))  ;
		PrintWriter out = response.getWriter();
		
		 out.println("<html>");
	        out.println("<head>");
     	out.println("<title>Flight Results</title>");
     	out.println("</head>");
     	out.println("<center><h1>Confirm Payment of Amount : Rs.  "+ fare +"</h1></center><br/>");
     	
     	out.println("<a href=\"http://localhost:8080/FlyAway/TicketConfirm.html\" target=\"parent\"><button >Confirm Payment</button></a>");
     	out.println("<a href=\"http://localhost:8080/FlyAway/Travel.html\" target=\"parent\"><button >Cancel</button></a>");
     	
	
		
		
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
