package com.newlecture.web.admin.member;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/admin/member/list")
public class ListController extends HttpServlet {
	
	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
//		PrintWriter out = response.getWriter();
//		
//		//stream - ansi �⺻
//		//writer - �����ڵ� �ٱ���
//		
//		out.print("Hello Servlet");
		
		
		
	 	List<Map<String, String>> members = new ArrayList<>();
	 	Map<String, String> member;
	 	
	 	member = new HashMap<>();
	 	member.put("id","dargon");
	 	member.put("name","�տ���");
	 	members.add(member);
	 	
	 	member = new HashMap<>();
	 	member.put("id","moon");
	 	member.put("name","������");
	 	members.add(member);
	 	
	 	// ���� ���� ���� = ���� ���� ����
	 	// application(��� ����), session(�� ����ڿ��� ����), request(1:1 ���迡���� ��)
	 	
	 	request.setAttribute("members", members);
	 	request.setAttribute("x", 15);
	 	request.setAttribute("member", member);
	 	request.setAttribute("y", new int[]{3,4,5});
	 	
	 	request.getRequestDispatcher("list.jsp").forward(request, response);
	 	
	 	//EL -> MVC�� �����ϴ� ����п��� View ���� ����ҷ� ��ü�κ��� �����͸� "���� ������" "���� ���" �ϰ� �ϴ� ���
		//A redirect B => A �������� B �������� ��ȯ(��ġ)
	 	//A forward B => A ���� B �̾�� ��
	}

}
