package action;
import service.AddressImpl;
import bean.Addresslist;
import com.opensymphony.xwork2.ActionSupport;
import org.springframework.beans.factory.annotation.Autowired;
/**
 * Created by xie on 2017/7/28.
 */
public class AddressAction {
    @Autowired
    private AddressImpl address;
    private String username;
    private String password;
    public String message;
    public String getUsername(){
        return username;
    }
    public void setUsername(String username){
        this.username = username;
    }
    public String getPassword(){
        return password;
    }
    public void setPassword(String password){
        this.password = password;
    }
    public String add()
    {
        Addresslist al = new Addresslist();
//        Object a = all;
        al.setName(getUsername());
        al.setPassword(getPassword());
        address.add(al);
        this.message = "添加成功了哦";
//        response.getWriter().write("{success:true}");
        return "success";
    }
    public String select(){
        address.select();
        return "success";
    }
    public String check(){
        Addresslist al = new Addresslist();
        al.setName(getUsername());
        al.setPassword(getPassword());
        return (String) address.check(al);
    }

    public void setAddress(AddressImpl address){
        this.address = address;
    }
}
