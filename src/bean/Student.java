package bean;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by Administrator on 2017/8/6 0006.
 */
@Entity
public class Student {
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
public Student(){}
public Student(int id,String name,String old,String studentnumber,String sex,String address,String grade,String gradeclass,String starttime,String phonenum,String national){
    this.id = id;
    this.name=name;
    this.old = old;
    this.studentnumber =studentnumber;
    this.sex = sex;
    this.address = address;
    this.grade = grade;
    this.gradeclass = gradeclass;
    this.starttime = starttime;
    this.phonenum = phonenum;
    this.name = name;
}
    @Id
    @Column(name = "id", nullable = false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "name", nullable = true, length = 64)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "old", nullable = true, length = 64)
    public String getOld() {
        return old;
    }

    public void setOld(String old) {
        this.old = old;
    }

    @Basic
    @Column(name = "studentnumber", nullable = true, length = 64)
    public String getStudentnumber() {
        return studentnumber;
    }

    public void setStudentnumber(String studentnumber) {
        this.studentnumber = studentnumber;
    }

    @Basic
    @Column(name = "sex", nullable = true, length = 64)
    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    @Basic
    @Column(name = "address", nullable = true, length = 64)
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Basic
    @Column(name = "grade", nullable = true, length = 64)
    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    @Basic
    @Column(name = "gradeclass", nullable = true, length = 64)
    public String getGradeclass() {
        return gradeclass;
    }

    public void setGradeclass(String gradeclass) {
        this.gradeclass = gradeclass;
    }

    @Basic
    @Column(name = "starttime", nullable = true, length = 64)
    public String getStarttime() {
        return starttime;
    }

    public void setStarttime(String starttime) {
        this.starttime = starttime;
    }

    @Basic
    @Column(name = "phonenum", nullable = true, length = 64)
    public String getPhonenum() {
        return phonenum;
    }

    public void setPhonenum(String phonenum) {
        this.phonenum = phonenum;
    }

    @Basic
    @Column(name = "national", nullable = true, length = 64)
    public String getNational() {
        return national;
    }

    public void setNational(String national) {
        this.national = national;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Student student = (Student) o;

        if (id != student.id) return false;
        if (name != null ? !name.equals(student.name) : student.name != null) return false;
        if (old != null ? !old.equals(student.old) : student.old != null) return false;
        if (studentnumber != null ? !studentnumber.equals(student.studentnumber) : student.studentnumber != null)
            return false;
        if (sex != null ? !sex.equals(student.sex) : student.sex != null) return false;
        if (address != null ? !address.equals(student.address) : student.address != null) return false;
        if (grade != null ? !grade.equals(student.grade) : student.grade != null) return false;
        if (gradeclass != null ? !gradeclass.equals(student.gradeclass) : student.gradeclass != null) return false;
        if (starttime != null ? !starttime.equals(student.starttime) : student.starttime != null) return false;
        if (phonenum != null ? !phonenum.equals(student.phonenum) : student.phonenum != null) return false;
        if (national != null ? !national.equals(student.national) : student.national != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (old != null ? old.hashCode() : 0);
        result = 31 * result + (studentnumber != null ? studentnumber.hashCode() : 0);
        result = 31 * result + (sex != null ? sex.hashCode() : 0);
        result = 31 * result + (address != null ? address.hashCode() : 0);
        result = 31 * result + (grade != null ? grade.hashCode() : 0);
        result = 31 * result + (gradeclass != null ? gradeclass.hashCode() : 0);
        result = 31 * result + (starttime != null ? starttime.hashCode() : 0);
        result = 31 * result + (phonenum != null ? phonenum.hashCode() : 0);
        result = 31 * result + (national != null ? national.hashCode() : 0);
        return result;
    }
}
