<%@page import="com.newlecture.web.dao.file.FileNoticeDao"%>
<%-- <%@page import="com.newlecture.web.dao.NoiceDao"%> --%>
<%@page import="java.util.Scanner"%>
<%@page import="com.newlecture.web.entity.Info"%>
<%@page import="java.io.FileInputStream"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%
	/*
	NoticeDao noticeDao = new FileNoticeDao();
	List<Notice> notices = noticeDao.getList();
	
	List<Notice> notices = new ArrayList<>();
	
	FileInputStream fis = new FileInputStream(
			"D:\\java\\workspace\\JSPPrj\\WebContent\\WEB-INF\\data\\notice-file.df");
	Scanner fscan = new Scanner(fis);
	
	String line = "";
	
	while (fscan.hasNextLine()) {
		line = fscan.nextLine();
		Notice notice = new Notice(line.split(","));
		notices.add(notice);
	}
	fscan.close();
	fis.close();
	*/
%>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<title>Document</title>

<link href="../css/style.css" type="text/css" rel="stylesheet">
</head>

<body>
	<!--header block ----------------------------------------------------------------------------------------------------------------- -->
	<jsp:include page="../../inc/header.jsp" />

	<!--visual block ----------------------------------------------------------------------------------------------------------------- -->

	<div id="visual">
		<div class="content-box">
			<div></div>
		</div>
	</div>
	<!--body block ----------------------------------------------------------------------------------------------------------------- -->
	<!-- flexible box layout: 반응형 사용을 위해 존재.수직이든 수평이든 뭐를 둬도 알아서 배치. static은 수직으로 알아서 배치하지만 수평은 안해쥼 axis(중심선) -->
	<div id="body">
		<div class="content-box">

			<jsp:include page="../../inc/aside.jsp" />

			<main>

			<section>
				<h1>공지사항1</h1>

				<section id="breadcrumb">
					<h1 class="d-none">경로</h1>
					<ol>
						<li>home</li>
						<li>고객센터</li>
						<li>공지사항</li>
					</ol>
				</section>
				<section>
					<h1>공지사항 내용</h1>
					<form action="edit" method="post">
						<table>
							<tbody>
								<tr>
									<th>카테고리</th>
									<td>
									<select name="category">
										<option value="학습">학습</option>
										<option value="결제">결제</option>
										<option value="기타">기타</option>
									</select>
									</td>
								</tr>
								<tr>
									<th>제목</th>
									<td><input name="title" value="${notice.title}"></td>
								</tr>
								<tr>
									<th>작성일</th>
									<td>${notice.regDate}</td>
								</tr>
								<tr>
									<th>내용</th>
									<td><textarea name="content">${notice.content}</textarea></td>
								</tr>
							</tbody>
						</table>
						<div>
							<input type="hidden" name="id" value="${notice.id}"> <input
								type="submit" value="저장">
								<a href="detail?id=${notice.id}">취소</a>
						</div>
					</form>
				</section>


			</section>
			</main>

		</div>
	</div>




	<!--footer      block ----------------------------------------------------------------------------------------------------------------- -->
	<jsp:include page="../../inc/footer.jsp" />
</body>

</html>