<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

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