<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
                    <h1>로그인</h1>

                    <section id="breadcrumb">
                        <h1 class="d-none">경로</h1>
                        <ol>
                            <li>home</li>
                            <li>member</li>
                            <li>login</li>
                        </ol>
                    </section>
                    <section>
                    	<h1>로그인 폼</h1>
                    	<c:if test="${param.error == 1}">
                    	<div style="color:red">
                    		아이디 또는 비밀번호가 유효하지 않습니다.
                    	</div>
                    	</c:if>
                    	<form method="post">
                    	<table>
                    		<tbody>
                    			<tr>
                    				<th>아이디</th>
                    				<td><input type="text" name="id"></td>
                    			</tr>
                    			<tr>
                    				<th>비밀번호</th>
                    				<td><input type="password" name="pwd"></td>
                    			</tr>
                    			<tr>
                    				<td colspan="2"><input type="submit" value="로그인"></td>
                    			</tr>
                    			
                    		</tbody>
                    	</table>
                    	</form>
                    </section>
                </section>
                
			</main>

        </div>
    </div>




    <!--footer      block ----------------------------------------------------------------------------------------------------------------- -->

	<jsp:include page="../inc/footer.jsp" />





</body>

</html>