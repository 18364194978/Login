package service;
import bean.Student;

import java.util.List;
/**
 * Created by Administrator on 2017/8/6 0006.
 */
public interface AddStudentInfo {
    public void add(Student student);
    public String check(Student student);
    public List select(String names);
    public void delete(Student student);
}
