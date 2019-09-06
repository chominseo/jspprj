<%@page import="com.newlecture.web.dao.file.FileNoticeDao"%>
<%@page import="com.newlecture.web.dao.InfoDao"%>
<%@page import="java.util.Scanner"%>
<%@page import="java.io.FileInputStream"%>
<%@page import="com.newlecture.web.entity.Info"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%
	InfoDao noticeDao = new FileNoticeDao();

	

	int id = Integer.parseInt(request.getParameter("id"));
	Info n = noticeDao.get(id);
	/*
	List<Notice> notice = new ArrayList<>();
	
	//데이터를 제공하는 코드블록
	//List<Notive> getNoticeList(){
	FileInputStream fis = new FileInputStream(
	"D:\\java\\workspace\\JSPPrj\\WebContent\\WEB-INF\\data\\notice-file.df");
	Scanner fscan = new Scanner(fis);
	
	String line = "";
	
	//Notice n = new Notice();
	
	while (fscan.hasNextLine()) {
		line = fscan.nextLine();
		Notice n = new Notice(line.split(","));
		notice.add(n);
	}
	fscan.close();
	fis.close();
	
	int id;
	if (request.getParameter("id") == null)
		id = 1;
	else
		id = Integer.parseInt(request.getParameter("id"));
	
	Notice n = notice.get(notice.size()-id);
	*/
%>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Document</title>
</head>
<body>
	<h1>공지사항</h1>
	<table>
		<tr>
			<td>제목:</td>
			<td><%=n.getTitle()%></td>
		</tr>
		<tr>
			<td>작성자:</td>
			<td><%=n.getWriterId()%></td>
		</tr>
		<tr>
			<td>작성일</td>
			<td><%=n.getRegDate()%></td>
		</tr>
	</table>
</body>
</html>
