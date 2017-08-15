package action;
import bean.Menulist;
import service.GetMenuListImpl;
import javax.servlet.http.HttpServletResponse;
import org.apache.struts2.ServletActionContext;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import java.io.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
/**
 * Created by xie on 2017/8/15.
 */
public class GetMenuListAction {
    @Autowired
    private GetMenuListImpl getMenuList;
    public String getmenu(){
        HttpServletResponse response =ServletActionContext.getResponse();
        PrintWriter out = null;
        try {
            List list = getMenuList.select();
            JSONArray json = JSONArray.fromObject(list);
            System.out.println(json);
            out = response.getWriter();
            out.write(json.toString());
        }catch (Exception ex){
            System.out.println(ex);
        }finally {
            if(out!=null){
                out.close();
            }
        }
        return null;
    }
    public void setGetMenuList(GetMenuListImpl getMenuList){
        this.getMenuList = getMenuList;
    }
}
