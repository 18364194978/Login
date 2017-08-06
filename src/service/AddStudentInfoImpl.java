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

}
