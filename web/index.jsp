<%--
  Created by IntelliJ IDEA.
  User: xie
  Date: 2017/7/28
  Time: 11:07
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>$Title$</title>
  </head>
  <body>
  <form action="check.action" method="post">
    <table align="center">
      <tr>
        <td>用户名：<input type="text" name="username"/></td>
      </tr>
      <tr>
        <td>密&nbsp;&nbsp;&nbsp;&nbsp;码1：<input type="text" name="password"/></td>
      </tr>
      <tr align="center">
        <td colspan="2"><input type="submit" value="登录" /><input type="reset" value="重填"/><a href = "add.action">注册</a></td>
      </tr>
    </table>
  </form>
  </body>
</html>
