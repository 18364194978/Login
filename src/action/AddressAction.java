package action;
import service.AddressImpl;
import bean.Addresslist;
import com.opensymphony.xwork2.ActionSupport;
import org.springframework.beans.factory.annotation.Autowired;
/**
 * Created by xie on 2017/7/28.
 */
public class AddressAction {
//    private String name;
//    private String phone;
    @Autowired
    private AddressImpl address;
//    public void setName(String name){
//        this.name = name;
//    }
//    public void setPhone(String phone){
//        this.phone= phone;
//    }
//    public String getName(){
//        return name;
//    }
//    public String getPhone(){
//        return phone;
//    }
    private String username;
    private String password;
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
        al.setName(getUsername());
        al.setPassword(getPassword());
        address.add(al);
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
