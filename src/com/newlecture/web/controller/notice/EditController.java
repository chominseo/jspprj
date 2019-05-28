package com.newlecture.web.controller.notice;

import java.io.IOException;
import java.sql.SQLException;

import javax.naming.spi.DirStateFactory.Result;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.websocket.SendResult;

import com.newlecture.web.dao.NoticeDao;
import com.newlecture.web.dao.oracle.OracleNoticeDao;
import com.newlecture.web.entity.Notice;

@WebServlet("/notice/edit")
public class EditController extends HttpServlet {
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		NoticeDao noticeDao = new OracleNoticeDao();
		
		Integer id = Integer.parseInt(request.getParameter("id"));
		
		try {
			request.setAttribute("notice", noticeDao.get(id));
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		request.getRequestDispatcher("../WEB-INF/view/notice/edit.jsp").forward(request, response);
		
		
	}
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		//request.setCharacterEncoding("UTF-8");
		
		NoticeDao noticeDao = new OracleNoticeDao();
		
		String title = request.getParameter("title");
		String content = request.getParameter("content");
		Integer id = Integer.parseInt(request.getParameter("id"));
		
		int result = 0;
		
		try {
			Notice n = noticeDao.get(id);
			n.setContent(content);
			n.setTitle(title);
			
			result = noticeDao.update(n);
			request.setAttribute("notice", noticeDao.get(id));
			
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		if(result != 1)
			response.sendRedirect("error");
		else
			response.sendRedirect("detail?id="+id);
		
		//request.getRequestDispatcher("../WEB-INF/view/notice/detail.jsp").forward(request, response);
		
	}
	
	
	
	
	
	
}
