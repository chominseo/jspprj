package com.newlecture.web.controller.admin.notice;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.SQLException;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import com.newlecture.web.dao.NoticeDao;
import com.newlecture.web.dao.NoticeFileDao;
import com.newlecture.web.dao.oracle.OracleNoticeDao;
import com.newlecture.web.dao.oracle.OracleNoticeFileDao;
import com.newlecture.web.entity.Notice;
import com.newlecture.web.entity.NoticeFile;

@WebServlet("/admin/notice/reg")
@MultipartConfig(location = "D:\\temp", fileSizeThreshold = 1024 * 1024, maxFileSize = 1024 * 1024 * 5, // 5메가
		maxRequestSize = 1024 * 1024 * 5 * 5 // 5메가 5개까지
)

public class RegController extends HttpServlet {

	   @Override
	   protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

	      String title = req.getParameter("title");
	      String content = req.getParameter("content");
	      Part filePart = req.getPart("file");
	      InputStream fis = filePart.getInputStream();
	      OutputStream fos;

	      // 1. 업로드 경로 얻기
	      String urlPath = "/upload";
	      String path = req.getServletContext().getRealPath(urlPath);

	      // 2. 업로드 파일명 얻기
	      String fileName = filePart.getSubmittedFileName();

	      // 3. 경로구분자
	      String filePath = path + File.separator + fileName;

	      // 4. 경로가 없을때
	      File pathFile = new File(path);
	      if (!pathFile.exists())
	         pathFile.mkdirs();

	      // 5. 동일경로에 동일 파일이 존재할때

//	      File f = new File(filePath);
//	      
//	      if(f.isFile()) {   //파일이 이미 있다면
//	         String dFileName = filePath.substring(filePath.lastIndexOf("/"));
//	         int rFileName = dFileName.lastIndexOf(".");
//	         String _dFileName = dFileName.substring(0, rFileName);
//	         
//	         
//	      } else {
//	         fos = new FileOutputStream(filePath);   //파일이 없다면
//	      }

	      // -----------규석오빠 코드----------------

	      File sameFile = new File(filePath);

	      if (sameFile.exists()) {
	         int n = fileName.lastIndexOf("."); // hello(2).jpg

	         String name = fileName.substring(0, n); // hello(2)
	         String suffix = fileName.substring(n); // .jpg

	         // name.endsWith(")");

	         int parenS = name.lastIndexOf("("); // 3
	         int parenE = name.lastIndexOf(")"); // 1

	         if (parenS == -1)
	            fileName = name + "(" + 1 + ")" + suffix;
	         else {
	            String indexC = name.substring(parenS + 1, parenE); // 2
	            int indexN = Integer.parseInt(indexC); // 2
	            indexN++; // 3
	            fileName = fileName.substring(0, parenS + 1) + indexN + ")" + suffix; // hello( + 3 + ) + .jpg =
	                                                                  // hello(3).jpg
	         }
	      }

	      fos = new FileOutputStream(filePath);

	      Scanner fscan = new Scanner(fis);

	      int b = 0;

	      byte[] buf = new byte[1024];
	      while ((b = fis.read(buf)) != -1) {
	         fos.write(buf, 0, b);
	      }

	      fis.close();
	      fos.close();

	      System.out.println("완료");

	      Notice notice = new Notice();
	      notice.setTitle(title);
	      notice.setContent(content);

	      NoticeDao noticeDao = new OracleNoticeDao();
	      NoticeFileDao noticeFileDao = new OracleNoticeFileDao();

	      int result = 0;
	      
	      try {
	         result = noticeDao.insert(notice);

	         int noticeId = noticeDao.getLastId();
	         
	         NoticeFile noticeFile = new NoticeFile();
	         noticeFile.setName(fileName);
	         noticeFile.setNoticeId(noticeId);

	         noticeFileDao.insert(noticeFile);

	      } catch (Exception e) {
	         e.printStackTrace();
	      }

	      if (result != 1)
	         resp.sendRedirect("error");
	      else
	         resp.sendRedirect("list");

	   }

	   @Override
	   protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

	      req.getRequestDispatcher("../WEB-INF/view/notice/reg.jsp").forward(req, resp);
	   }

	}
