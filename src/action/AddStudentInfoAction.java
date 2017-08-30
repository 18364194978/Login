package action;
import service.AddStudentInfoImpl;
import bean.Student;
import java.lang.reflect.Field;
import com.opensymphony.xwork2.ActionSupport;
import javax.servlet.http.HttpServletResponse;
import org.apache.struts2.ServletActionContext;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import java.io.*;
import java.nio.Buffer;
import java.text.SimpleDateFormat;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

/**
 * Created by Administrator on 2017/8/6 0006.
 */
public class AddStudentInfoAction {
    @Autowired
    private AddStudentInfoImpl addStudentInfo;
    private int id;
    private String name;
    private String old;
    private String studentnumber;
    private String sex;
    private String address;
    private String grade;
    private String gradeclass;
    private String starttime;
    private String phonenum;
    private String national;
    private boolean success;
    private String msg = "";
    private List selectList;
    public boolean isSuccess(){
        return success;
    }
    public void setSuccess(boolean success){
        this.success = success;
    }
    public String getMsg(){
        return msg;
    }
    public void setSelectList(List list){
        this.selectList = list;
    }
    public List getSelectList(){
        return selectList;
    }
    public void setMsg(String msg){
        this.msg = msg;
    }
    public void setId(int id){
        this.id = id;
    }
    public int getId(){
        return id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getOld() {
        return old;
    }
    public void setOld(String old) {
        this.old = old;
    }
    public String getStudentnumber() {
        return studentnumber;
    }
    public void setStudentnumber(String studentnumber) {
        this.studentnumber = studentnumber;
    }
    public String getSex() {
        return sex;
    }
    public void setSex(String sex) {
        this.sex = sex;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getGrade() {
        return grade;
    }
    public void setGrade(String grade) {
        this.grade = grade;
    }
    public String getGradeclass() {
        return gradeclass;
    }
    public void setGradeclass(String gradeclass) {
        this.gradeclass = gradeclass;
    }
    public String getStarttime() {
        return starttime;
    }
    public void setStarttime(String starttime) {
        this.starttime = starttime;
    }
    public String getPhonenum() {
        return phonenum;
    }
    public void setPhonenum(String phonenum) {
        this.phonenum = phonenum;
    }
    public String getNational() {
        return national;
    }
    public void setNational(String national) {
        this.national = national;
    }
    public String addStudentInfo(){
        HttpServletResponse response =ServletActionContext.getResponse();
        response.setContentType("text/html;charset=utf-8");
        try {
            Student student = new Student();
            student.setName(getName());
            student.setOld(getOld());
            student.setStudentnumber(getStudentnumber());
            student.setSex(getSex());
            student.setAddress(getAddress());
            student.setGrade(getGrade());
            student.setGradeclass(getGradeclass());
            student.setStarttime(getStarttime());
            student.setPhonenum(getPhonenum());
            student.setNational(getNational());
            addStudentInfo.add(student);
            response.getWriter().write("{success:true,msg:'成功了啊'}");
        }
        catch (Exception ex){
            success = false;
            msg = "添加失败";
        }
        return null;
    }
    public String deleteStudent(){
        HttpServletResponse response =ServletActionContext.getResponse();
        response.setContentType("text/html;charset=utf-8");
        try {
            Student student = new Student();
            List list = getSelectList();
            for (int i=0;i<list.size();i++){
                int ids = Integer.parseInt((String) list.get(i));
                student.setId(ids);
                addStudentInfo.delete(student);
            }
            response.getWriter().write("{success:true,msg:'成功了啊'}");
        }catch (Exception ex){
            success = false;
            msg = "添加失败";
        }
        return null;
    }
    public static Object getValueByKey(Object obj, String key) {
        // 得到类对象
        Class userCla = (Class) obj.getClass();
        /* 得到类中的所有属性集合 */
        Field[] fs = userCla.getDeclaredFields();
        for (int i = 0; i < fs.length; i++) {
            Field f = fs[i];
            f.setAccessible(true); // 设置些属性是可以访问的
            try {

                if (f.getName().endsWith(key)) {
                    System.out.println("单个对象的某个键的值==反射==" + f.get(obj));
                    return f.get(obj);
                }
            } catch (IllegalArgumentException e) {
                e.printStackTrace();
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            }
        }
        // 没有查到时返回空字符串
        return "";
    }
    public String exportData() throws IOException {
        HttpServletResponse response =ServletActionContext.getResponse();
        PrintWriter out = null;
        response.setHeader("Content-Disposition", "attachment; filename=aaaaa.xls");
        OutputStream os= new BufferedOutputStream(response.getOutputStream());
        response.setContentType("application/vnd.ms-excel;charset=gb2312");
//        os.write(Buffer);
        os.flush();
        os.close();
            HSSFWorkbook wb = new HSSFWorkbook();//1、创建一个webbook，对应一个Excel文件
            HSSFSheet sheet = wb.createSheet("表一");//2、在webbook中添加一个sheet，对应Excel文件中的sheet
            HSSFRow row = sheet.createRow((int)0);//3、在sheet中添加表头第0行，老版本poi对excel的行数有限制short
            HSSFCellStyle style = wb.createCellStyle();//创建单元格，并设置表头设置表头居中
            style.setAlignment(HSSFCellStyle.ALIGN_CENTER);//居中
            HSSFCell cell = row.createCell(0);
            cell.setCellValue("学号");
            cell.setCellStyle(style);
            cell = row.createCell(1);
            cell.setCellValue("姓名");
            cell.setCellStyle(style);
            cell = row.createCell(2);
            cell.setCellValue("年龄");
            cell.setCellStyle(style);
            List list = addStudentInfo.exportData();//获取数据并写入excel
            for (int i = 0;i<list.size();i++) {
                row = sheet.createRow((int) i + 1);
                Object object = list.get(i);
                row.createCell(0).setCellValue(getValueByKey(object, "name").toString());
                row.createCell(1).setCellValue(getValueByKey(object, "old").toString());
                row.createCell(2).setCellValue(getValueByKey(object, "sex").toString());
            }
        try {

//        FileOutputStream fileOutputStream = new FileOutputStream("E:/a.xls");
//        wb.write(fileOutputStream);
//        fileOutputStream.close();
        }catch (Exception ex){
            System.out.println(ex);
        }
        return null;
    }
    public String getStudentInfo(){
        HttpServletResponse response =ServletActionContext.getResponse();
        PrintWriter out = null;
        response.setContentType("text/html;charset=utf-8");
        try {
            String names = getName();
            List list = addStudentInfo.select(names);
            JSONArray json = JSONArray.fromObject(list);
            System.out.println(json);
            out = response.getWriter();
            out.write(json.toString());

        }
        catch (Exception ex){
            System.out.println(ex);
        }finally {
            if(out!=null){
                out.close();
            }
        }
        return null;
    }


    public void setAddStudentInfo(AddStudentInfoImpl addStudentInfo){
        this.addStudentInfo = addStudentInfo;
    }
}
