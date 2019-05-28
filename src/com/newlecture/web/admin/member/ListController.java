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
//		//stream - ansi 기본
//		//writer - 유니코드 다국어
//		
//		out.print("Hello Servlet");
		
		
		
	 	List<Map<String, String>> members = new ArrayList<>();
	 	Map<String, String> member;
	 	
	 	member = new HashMap<>();
	 	member.put("id","dargon");
	 	member.put("name","손오공");
	 	members.add(member);
	 	
	 	member = new HashMap<>();
	 	member.put("id","moon");
	 	member.put("name","문재인");
	 	members.add(member);
	 	
	 	// 공유 저장 공간 = 상태 저장 공간
	 	// application(모든 서블릿), session(한 사용자에만 공유), request(1:1 관계에서만 씀)
	 	
	 	request.setAttribute("members", members);
	 	request.setAttribute("x", 15);
	 	request.setAttribute("member", member);
	 	request.setAttribute("y", new int[]{3,4,5});
	 	
	 	request.getRequestDispatcher("list.jsp").forward(request, response);
	 	
	 	//EL -> MVC를 지향하는 방법론에서 View 에서 저장소로 객체로부터 데이터를 "쉽게 꺼내고" "쉽게 출력" 하게 하는 언어
		//A redirect B => A 서블릿에서 B 서블릿으로 전환(대치)
	 	//A forward B => A 서블릿 B 이어가는 것
	}

}
