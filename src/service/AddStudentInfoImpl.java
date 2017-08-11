package service;
import bean.Student;
import org.apache.struts2.ServletActionContext;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.filter.ServletContextRequestLoggingFilter;
import java.util.List;
/**
 * Created by Administrator on 2017/8/6 0006.
 */
public class AddStudentInfoImpl implements AddStudentInfo{
    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public void add(Student student){
        Session session = sessionFactory.openSession();
        Transaction tx = session.beginTransaction();
        session.save(student);
        tx.commit();
        session.close();
    }
    public String check(Student student){
        return "success";
    }
    public List select(){
        Session session = sessionFactory.openSession();
        Transaction tx = session.beginTransaction();
        String sql = "select new Student(S.id,S.name,S.old,S.studentnumber,S.sex,S.address,S.grade,S.gradeclass,S.starttime,S.phonenum,S.national) from Student S";
        Query query = session.createQuery(sql);
        List list = query.list();
        tx.commit();
        session.close();
        return list;
    }
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

}
