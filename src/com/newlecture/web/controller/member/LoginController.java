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
		
		//�����̶�� ���� �ؾ� �Ѵ�. : ȸ�� ���̺� �Ѱ� ���� ������ �ִٸ� ������ ����
		//1. DB���� id �ش��ϴ� ȸ�� �����͸� �����´�
		
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
			
			if(returnURL != null)//���ͷ�Ʈ�� �ɷ��� ���
				response.sendRedirect(returnURL);
			else// �׳� ������ �䱸�� ���
				response.sendRedirect("/notice/list");
		}
		
		
	}
}
