<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>


<!DOCTYPE html>
<%
	int result = 0;

	response.setCharacterEncoding("UTF-8");
	response.setContentType("text/html; charset=UTF-8");

	if (request.getMethod().equals("POST")) {
		String x_ = request.getParameter("x");
		String y_ = request.getParameter("y");

		Integer x = 0;
		Integer y = 0;

		if (x_ != null)
			x = Integer.parseInt(x_);
		if (y_ != null)
			y = Integer.parseInt(y_);

		result = x + y;
	}
%>
<html>
<head>
<meta charset="UTF-8">
<title>MIN</title>
</head>
<body>
	<form action="add.jsp" method="post">
		<div>
			<label>x : </label> <input type="text" name="x" />
		</div>
		<div>
			<label>y : </label> <input type="text" name="y" />
		</div>
		<div>
			<input type="submit" value="덧셈" />
		</div>
		<div>
			결과 :
			<%=result%>
		</div>
	</form>
</body>
</html>