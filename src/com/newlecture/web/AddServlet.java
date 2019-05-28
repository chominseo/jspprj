package com.newlecture.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/add")
public class AddServlet extends HttpServlet {
	/*
	  
	 Servlet -> 서버 어플리케이션의 (기능)조각 프로그램
	 GET/POST 에 수행되는 프로그램 -> url을 요청받은 web server -> was에게 위임
	 -> was가 url에 매핑된 프로그램 실행(1. was가 그 로드된 객체를 참조할 수 있어야 한다. 그리고 코드를 실행하는 부분을 
	 
	 /add <--> com.newlectur.web.AddServlet
	 HttpServlet servlet = Class.forName("com.newlectur.web.AddServlet").newInstance();
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");
		
		int result = 0;
		
		String result_ = request.getParameter("result");
		
		if(result_!=null)
			result = Integer.parseInt(result_);
		
		PrintWriter out = response.getWriter();
		
		out.write("<!DOCTYPE html");
		out.write("<html>");
		out.write("<head>");
		out.write("<meta charset=\"UTF-8\">");
		out.write("<title>Insert title here</title>");
		out.write("</head>");
		out.write("<body>");
		out.write("<!DOCTYPE html>");
		out.write("<html>");
		out.write("<head>");
		out.write("<meta charset=\"UTF-8\">");
		out.write("<title>ADD PAGE</title>");
		out.write("</head>");
		out.write("<body>");
		out.write("<form action=\"add\" method=\"post\">");
		out.write("<div>");
		out.write("<label>x : </label>");
		out.write("<input type=\"text\" name=\"x\" />");
		out.write("</div>");
		out.write("<div>");
		out.write("<label>y : </label>");
		out.write("<input type=\"text\" name=\"y\" />");
		out.write("</div>");
		out.write("<div>");
		out.write("<br>");
		out.write("<input type=\"submit\" value=\"덧셈\" />");
		out.write("</div>");
		out.write("<br>");
		out.println("결과 : ");
		out.println(result);
		
		out.write("</form>");

		out.write("</body>");
		out.write("</html>");
		
	}
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
			String x_ = request.getParameter("x");
			String y_ = request.getParameter("y");
			
			Integer x = 0;
			Integer y = 0;
			
			if(x_ != null)
				x = Integer.parseInt(x_);
			if(y_ != null)
				y = Integer.parseInt(y_);
			
			int result = x+y;
			
			//서버에서 다른 서블릿을 요청하는 방법
			//1. 리디렉트 redirect
			response.sendRedirect("add?result="+result);
			//2. 포워드 forward
			//request.getRequestDispatcher("add").forward(request, response);
			//GET -> GET , POST -> POST
	}
	*/
	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		int result = 0;
		
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");
		
		if(request.getMethod().equals("POST")) {
		String x_ = request.getParameter("x");
		String y_ = request.getParameter("y");
		
		Integer x = 0;
		Integer y = 0;
		
		if(x_ != null)
			x = Integer.parseInt(x_);
		if(y_ != null)
			y = Integer.parseInt(y_);
		
		result = x+y;
		}
		
		PrintWriter out = response.getWriter();
		
		out.write("<!DOCTYPE html");
		out.write("<html>");
		out.write("<head>");
		out.write("<meta charset=\"UTF-8\">");
		out.write("<title>Insert title here</title>");
		out.write("</head>");
		out.write("<body>");
		out.write("<!DOCTYPE html>");
		out.write("<html>");
		out.write("<head>");
		out.write("<meta charset=\"UTF-8\">");
		out.write("<title>ADD PAGE</title>");
		out.write("</head>");
		out.write("<body>");
		out.write("<form action=\"add\" method=\"post\">");
		out.write("<div>");
		out.write("<label>x : </label>");
		out.write("<input type=\"text\" name=\"x\" />");
		out.write("</div>");
		out.write("<div>");
		out.write("<label>y : </label>");
		out.write("<input type=\"text\" name=\"y\" />");
		out.write("</div>");
		out.write("<div>");
		out.write("<br>");
		out.write("<input type=\"submit\" value=\"덧셈\" />");
		out.write("</div>");
		out.write("<br>");
		out.println("결과 : ");
		out.println(result);
		
		out.write("</form>");

		out.write("</body>");
		out.write("</html>");
		
	}
	

}
