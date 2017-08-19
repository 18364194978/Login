<%--
  Created by IntelliJ IDEA.
  User: xie
  Date: 2017/7/28
  Time: 13:59
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%

    String path =request.getContextPath();

    String basePath =request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

%>
<html>
<head>
    <title>成功界面</title>
    <link rel="stylesheet"type="text/css" href="<%=basePath%>resources/ext-theme-classic/build/resources/ext-theme-classic-all.css">

    <script type="text/JavaScript"src="<%=basePath%>resources/ext-all.js"></script>

    <script type="text/javascript"src="<%=basePath%>resources/ext-bootstrap.js"></script>
    <script type="text/javascript"src="<%=basePath%>resources/jquery.1.11.3.min.js"></script>
    <script type="text/javascript"src="<%=basePath%>resources/ext-theme-classic/build/ext-theme-classic.js"></script>
    <%--<%@ include file="commen.jsp" %>--%>
    <%--<jsp:include page="commen.jsp"><!--此处-->--%>
        <%--<jsp:param name="basePath" value="<%=basePath%>"/>--%>
    <%--</jsp:include>--%>

    <script type="text/javascript"src="<%=basePath%>js/success.js"></script>
</head>
<body>
<%--<%=basePath%>--%>
<%--<div id="grids"></div>--%>
</body>
</html>
