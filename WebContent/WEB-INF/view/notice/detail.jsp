
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
    <jsp:include page="../inc/header.jsp" />

    <!--visual block ----------------------------------------------------------------------------------------------------------------- -->

    <div id="visual">
        <div class="content-box">
            <div>

            </div>
        </div>
    </div>
    <!--body block ----------------------------------------------------------------------------------------------------------------- -->
    <!-- flexible box layout: 반응형 사용을 위해 존재.수직이든 수평이든 뭐를 둬도 알아서 배치. static은 수직으로 알아서 배치하지만 수평은 안해쥼 axis(중심선) -->
    <div id="body">
        <div class="content-box">
            <jsp:include page="../inc/aside.jsp" />
			  <main>
				 <section>
                    <h1>공지사항</h1>

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
                    	<table>
                    		<tbody>
                    			<tr>
                    				<th>제목</th>
                    				<td>${notice.title}</td>
                    			</tr>
                    			<tr>
                    				<th>작성일</th>
                    				<td>${notice.regDate}</td>
                    			</tr>
                    			<tr>
                    				<th>첨부파일</th>
                    				<td>
                    				<c:forEach var="file" items="${noticeFiles}">
                    				<a href="/upload/${file.name}" download>${file.name}</a>
                    				</c:forEach>
                    				</td>
                    			</tr>
                    			<tr>
                    				<th>내용</th>
                    				<td>${notice.content}</td>
                    			</tr>
                    		</tbody>
                    	</table>
                    	<div>
                    		<a href="edit?id=${notice.id}">수정</a>
                    		<a href="del?id=${notice.id}">삭제</a>
                    	</div>
                    </section>
                </section>
                <section>
                   <h1></h1>
                   <ul>
                      <li><span>이전글</span><a href="detail?id=${prev.id}">${prev.title}</a></li>
                      <li><span>다음글</span><a href="detail?id=${next.id}">${next.title}</a></li>
                   </ul>
                </section>
			</main>

        </div>
    </div>




    <!--footer      block ----------------------------------------------------------------------------------------------------------------- -->

	<jsp:include page="../inc/footer.jsp" />





</body>

</html>