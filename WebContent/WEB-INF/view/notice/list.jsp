<%@page import="com.newlecture.web.dao.file.FileNoticeDao"%>
<%-- <%@page import="com.newlecture.web.dao.NoiceDao"%> --%>
<%@page import="java.util.Scanner"%>
<%@page import="com.newlecture.web.entity.Info"%>
<%@page import="java.io.FileInputStream"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>


<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Document</title>

<link href="../css/style2.css" type="text/css" rel="stylesheet">
<style>
#footer { 
	-width: 100px;
}
</style>
<script src="../../js/notice/list.js"></script>
</head>



<body>
	<!--header block ----------------------------------------------------------------------------------------------------------------- -->
	<jsp:include page="../inc/header.jsp" />
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
					<h1>공지사항 검색</h1>
					<form>
						<select>
							<option>제목</option>
							<option>작성자</option>
							<option>내용</option>
						</select> <input type="text"> <input type="submit" value="검색">
					</form>
				</section>

				<section id="notice">
					<style>
						.even {
							background: beige
						}
					</style>
					<h1 class="d-none">공지사항 목록</h1>
					<template class="notice-template">
					<tr>
						<td class="num"></td>
						<td class="title"><a href="detail?id="></a>
						<span class="commentCount"></span></td>
						<td class="writerId"></td>
						<td class="regDate"></td>
						<td class="hit"></td>
					</tr>
					</template>

					<table>
						<thead>
							<tr>
								<td class="num">번호</td>
								<td class="title">제목</td>
								<td class="writer">작성자</td>
								<td class="date">작성일</td>
								<td class="hit">조회수</td>
							</tr>
						</thead>
						<tbody class="tbody">

							<c:forEach var="n" items="${list}" varStatus="s">
								<c:if test="${s.index %2 == 1}">
									<tr class="even">
								</c:if>
								<c:if test="${s.index %2 == 0}">
									<tr>
								</c:if>
								<td class="num">${n.id}</td>
								<td class="title"><a href="detail?id=${n.id}">${s.index}/${s.current.title}
										: ${n.title}</a> <span class="commentCount">${n.commentCount}</span>
								<td class="writerId">${n.writerId}</td>
								<td class="regDate">${n.regDate}</td>
								<td class="hit">${n.hit}</td>
								</tr>
							</c:forEach>
						</tbody>
					</table>

					<div>
						<a href="reg">글쓰기</a>
					</div>
				</section>

				<section id="page-index">
					<h1 class="d-none">페이지 정보</h1>
					<div>
						<span class="color-highlight font-blod">1</span> / 1 pages
					</div>
				</section>

				<div id="test-remove">
					<label>삭제할 게시글 ID</label><input type="text" value="">
					<input type="button" value="삭제">
				</div>
				
				<div id="test-pager">
					<input type="text">
					<input type="button" value="요청">
				</div>

				<c:set var="page" value="${(empty param.p) ? 1 : param.p}"></c:set>
				<c:set var="start" value="${page-(page-1)%5}"></c:set>
				<c:set var="last" value="" />

				<section id="pager">
					<h1 class="d-none">페이저</h1>
					<div>

						<div class="icon-next">
							<a href="list?p=${(start == 1) ? 1 : start-1}">이전</a>
						</div>
						<ul>
							<!-- <li class="current"><a href="list?p=1">1</a></li> -->

							<c:forEach var="n" begin="${start}" end="${start+4}"
								varStatus="s">
								<li><a href="list?p=${n}">${n}</a></li>
							</c:forEach>

						</ul>
						<div class="icon-next-pager">
							<a href="${start+5}">다음</a>
						</div>
					</div>
				</section>
			</section>
			</main>

		</div>
	</div>




	<!--footer      block ----------------------------------------------------------------------------------------------------------------- -->

	<jsp:include page="../inc/footer.jsp" />





</body>

</html>