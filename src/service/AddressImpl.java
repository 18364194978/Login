package service;
import bean.Addresslist;
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
 * Created by xie on 2017/7/28.
 */
public class AddressImpl implements Address {

//    @Qualifier("sessionFactory")
    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public void add(Addresslist al) {
        Session session = sessionFactory.openSession();
        Transaction tx= session.beginTransaction();
        session.save(al);
        tx.commit();
        session.close();
    }
    public List select(){
        Session session = sessionFactory.openSession();
        Transaction tx = session.beginTransaction();
        String sql = "select new Addresslist(A.id,A.name,A.password)from Addresslist A";
        Query query = session.createQuery(sql);
        List list = query.list();
        tx.commit();
        session.close();
        return list;
    }
    public String check(Addresslist al){
        String result = "false";
        Session session = sessionFactory.openSession();
        Transaction tx = session.beginTransaction();
        String sql = "select new Addresslist(A.name,A.password)from Addresslist A";
        Query query = session.createQuery(sql);
        List list = query.list();
        ServletActionContext.getRequest().setAttribute("list",list);
        tx.commit();
        session.close();
        for(int i = 0;i<list.size();i++){
            Addresslist addresslist = (Addresslist) list.get(i);
            String name = addresslist.getName();
            String password = addresslist.getPassword();
//            String name = "123";
//            String password = "123";
            if(al.getName().equals(name)&&al.getPassword().equals(password)){
                result = "success";
            }
        }
        return result;
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
}