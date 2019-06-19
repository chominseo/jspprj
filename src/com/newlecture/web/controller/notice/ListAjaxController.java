package com.newlecture.web.controller.notice;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.newlecture.web.dao.NoticeDao;
import com.newlecture.web.dao.oracle.NoticeView;
import com.newlecture.web.dao.oracle.OracleNoticeDao;
import com.newlecture.web.entity.Notice;

@WebServlet("/notice/list-ajax")
public class ListAjaxController extends HttpServlet {
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
		
		int page = 1;
		
		String p_ = request.getParameter("p");
		if(p_!=null && !p_.equals(""))
			page = Integer.parseInt(p_);

		NoticeDao noticeDao = new OracleNoticeDao();
		List<NoticeView> list = null;
//		int count = 0;
//		
//		Cookie[] cookies = request.getCookies();
//		for(int i = 0; i<cookies.length; i++)
//			if(cookies[i].getName().equals("count")) {
//				count=Integer.parseInt(cookies[i].getValue());
//				
//				System.out.println("cookie name : " + cookies[i].getName() + ",value:" + cookies[i].getValue());
//				
//				count++;
//				break;
//			}
//		
//		Cookie cookie = new Cookie("count", String.valueOf(count));
//		cookie.setMaxAge(1000*60*60*24*30);
//		cookie.setPath("/member/");
//		response.addCookie(cookie);
//		
		try {
			list = noticeDao.getList(page);
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/txt;charset=utf-8");//json ÄÁÅÙÃ÷Å¸ÀÔ
		PrintWriter out = response.getWriter();
		
		StringBuilder json = new StringBuilder();
		json.append("[");
		
		for(int i=0; i<list.size(); i++) {
			Notice nv = list.get(i);
			
			json.append(String.format("{\"id\":%d,",nv.getId()));
			json.append(String.format("\"title\":\"%s\",",nv.getTitle()));
			json.append(String.format("\"writerId\":\"%s\",",nv.getWriterId()));
			json.append(String.format("\"regDate\":\"%s\",",nv.getRegDate()));
			json.append(String.format("\"hit\":%d}",nv.getHit()));
			
			if(i<list.size()-1)
				json.append(",");
		
		}
		
		json.append("]");
		
		out.write(json.toString());
		/*
		String json = "[";
		
		int count = list.size();
		int idx = 0;
		
		for(NoticeView nv : list) {
			
		String js = "{"
				+ "\"id\":"+nv.getId()+","
				+ "\"title\":\""+nv.getTitle()+"\","
				+ "\"writerId\":\""+nv.getWriterId()+"\","
				+ "\"regDate\":\""+nv.getRegDate()+"\","
				+ "\"hit\":\""+nv.getHit()+"\","
				+"}";
					
			if(idx < count-1)
				js += ",";
			
			idx++;
			json += js;	
			
		}
		
		json += "]";
		
		out.write(json);
		*/
		
	}
	
}
