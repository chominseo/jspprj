package com.newlecture.web.controller.member;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import com.newlecture.web.dao.MemberDao;
import com.newlecture.web.dao.oracle.OracleMemberDao;
import com.newlecture.web.entity.Member;

@WebServlet("/member/login")
public class LoginController extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		request.getRequestDispatcher("/WEB-INF/view/member/login.jsp").forward(request, response);
	}
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String id = request.getParameter("id");
		String pwd = request.getParameter("pwd");
		
		//인증이라는 것을 해야 한다. : 회원 테이블에 넘겨 받은 정보가 있다면 인증에 성공
		//1. DB에서 id 해당하는 회원 데이터를 가져온다
		
		MemberDao memberDao = new OracleMemberDao();
		Member member = null;
		
		try {
			member = memberDao.get(id);
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		//System.out.println(member.getId()+member.getPwd());
		
		if(member == null)
			response.sendRedirect("login?error=1");
			
		else if(!member.getPwd().equals(pwd))
			response.sendRedirect("login?error=1");
		else {
			
			HttpSession session = request.getSession();
			session.setAttribute("id", id);
			
			String returnURL = request.getParameter("return-url");
			
			if(returnURL != null)//인터럽트가 걸렸을 경우
				response.sendRedirect(returnURL);
			else// 그냥 인증을 요구한 경우
				response.sendRedirect("/notice/list");
		}
		
		
	}
}
