package bean;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by xie on 2017/8/15.
 */
@Entity
public class Menulist {
    private int id;
    private String name;
    private String text;
    private String leaf;
    private String checked;
    private String parentid;
    public Menulist(){}
    public Menulist(int id, String name,String text, String leaf){
        this.id = id;
        this.name = name;
        this.text = text;
        this.leaf = leaf;
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
    @Column(name = "name", nullable = true, length = 20)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "text", nullable = true, length = 64)
    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    @Basic
    @Column(name = "parentid", nullable = true, length = 64)
    public String getParentid() {
        return parentid;
    }

    public void setParentid(String parentid) {
        this.parentid = parentid;
    }

    @Basic
    @Column(name = "leaf", nullable = true, length = 64)
    public String getLeaf() {
        return leaf;
    }

    public void setLeaf(String leaf) {
        this.leaf = leaf;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Menulist menulist = (Menulist) o;

        if (id != menulist.id) return false;
        if (name != null ? !name.equals(menulist.name) : menulist.name != null) return false;
        if (text != null ? !text.equals(menulist.text) : menulist.text != null) return false;
        if (leaf != null ? !leaf.equals(menulist.leaf) : menulist.leaf != null) return false;
        if (parentid != null ? !parentid.equals(menulist.parentid) : menulist.parentid != null) return false;
        if (checked != null ? !checked.equals(menulist.checked) : menulist.checked != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (text != null ? text.hashCode() : 0);
        result = 31 * result + (leaf != null ? leaf.hashCode() : 0);
        result = 31 * result + (parentid != null ? parentid.hashCode() : 0);
        result = 31 * result + (checked != null ? checked.hashCode() : 0);
        return result;
    }
}
