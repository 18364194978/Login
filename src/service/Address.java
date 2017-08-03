package service;
import bean.Addresslist;

import java.util.List;

/**
 * Created by xie on 2017/7/28.
 */
public interface Address {
    public void add(Addresslist al);
    public List select();
    public String check(Addresslist al);
}