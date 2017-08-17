package service;

import org.hibernate.SessionFactory;
import bean.Menulist;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

/**
 * Created by xie on 2017/8/15.
 */
public class GetMenuListImpl implements GetMenuList {
    @Autowired
    private SessionFactory sessionFactory;
    @Override
    public List select(){
        Session session = sessionFactory.openSession();
        Transaction tx = session.beginTransaction();
        String sql = "select new Menulist(M.id,M.name,M.text,M.leaf,M.menuname)from Menulist M where M.parentid = null ";
        Query query = session.createQuery(sql);
        List list = query.list();
        tx.commit();
        session.close();
        return list;
    }
    public List selectByParentId(String ids){
        Session session = sessionFactory.openSession();
        Transaction tx = session.beginTransaction();
        String sql = "select new Menulist(M.id,M.name,M.text,M.leaf,M.menuname)from Menulist M";
        String parentId = String.valueOf(ids);
        if(!parentId.equals("null")){
            sql = sql+" where M.parentid ="+parentId;
        }
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
