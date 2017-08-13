package action;
import service.AddStudentInfoImpl;
import bean.Student;
import com.opensymphony.xwork2.ActionSupport;
import javax.servlet.http.HttpServletResponse;
import org.apache.struts2.ServletActionContext;
import net.sf.json.JSONArray;
import java.io.*;
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
    private String nul = null;
    public boolean isSuccess(){
        return success;
    }
    public void setSuccess(boolean success){
        this.success = success;
    }
    public String getMsg(){
        return msg;
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
    public String getNul(){
        return nul;
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
//        String nams = getName();
//        String nu = getNul();
////        nams.toString();
//        String nulls = "null";
//        Boolean b = nams.equals(nu);
        try {
            Student student = new Student();
            student.setId(getId());
//            String name = getName();
            String old = getOld();
            String a = "a";
//            String name1 = name.toString();
//            Boolean b = name1.equals("null");
            String studentnumber = getStudentnumber();
//            String sex = getSex();
//            String address = getAddress();
//            String grade = getGrade();
//            String gradeclass = getGradeclass();
//            String starttime = getStarttime();
//            String phonenum = getPhonenum();
//            Boolean a = name.equals("null");
//            if(name.equals("null")){
//                student.setName("");
//            }
//            if(old.equals("null")){
//                student.setOld("");
//            }
//            if(studentnumber.equals("null")){
//                student.setStudentnumber("");
//            }
//            if(sex.equals("null")){
//                student.setSex("");
//            }
//            if(address.equals("null")){
//                student.setAddress("");
//            }
//            if(grade.equals("null")){
//                student.setGrade("");
//            }
//            if(gradeclass.equals("null")){
//                student.setGradeclass("");
//            }
//            if(starttime.equals("null")){
//                student.setStarttime("");
//            }
//            if(phonenum.equals("null")){
//                student.setPhonenum("");
//            }
            addStudentInfo.delete(student);
            response.getWriter().write("{success:true,msg:'成功了啊'}");
        }catch (Exception ex){
            success = false;
            msg = "添加失败";
        }
        return null;
    }
    public String getStudentInfo(){
        HttpServletResponse response =ServletActionContext.getResponse();
        PrintWriter out = null;
//        response.setContentType("text/html;charset=utf-8");
        try {
            List list = addStudentInfo.select();
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
