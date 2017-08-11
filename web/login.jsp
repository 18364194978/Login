<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2017/8/10 0010
  Time: 20:58
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<html lang="en" class="no-js">
<head>
    <meta charset="utf-8">
    <title>登录界面</title>
    <meta name="keywords" content="网站模板,手机网站模板,手机登录页面,登录页面HTML,免费网站模板下载" />
    <meta name="description" content="JS代码网提供高质量手机网站模板下载" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- CSS -->
    <link rel="stylesheet" href="logins/css/reset.css">
    <link rel="stylesheet" href="logins/css/supersized.css">
    <link rel="stylesheet" href="logins/css/style.css">

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

</head>

<body>

<div class="page-container">
    <h1>学生信息查询系统</h1>
    <form action="check.action" method="post">
        <input type="text" name="username" class="username" placeholder="用户名">
        <input type="password" name="password" class="password" placeholder="密码">
        <div><button type="submit">登录</button><button type="reset" style="margin-left: 38px">重填</button></div>
        <%--<p type="reset">重填</p>--%>
        <div style="margin-top: inherit"><a href = "add.action">注册</a></div>
        <div class="error"><span>+</span></div>
    </form>
    <div class="connect">
        <p>Or connect with:</p>
        <p>
            <a class="facebook" href=""></a>
            <a class="twitter" href=""></a>
        </p>
    </div>
</div>

<!-- Javascript -->
<script src="logins/js/jquery-1.8.2.min.js"></script>
<script src="logins/js/supersized.3.2.7.min.js"></script>
<script src="logins/js/supersized-init.js"></script>
<script src="logins/js/scripts.js"></script>

</body>

</html>
</html>
