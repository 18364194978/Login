Ext.onReady(function () {

    var add_panel = new Ext.FormPanel({
        name: 'add_panel',
        bodyStyle: 'padding:10 5 0',
        defaultType: 'textfield',
        labelAlign: 'right',
        labelWidth: 100,
        frame: true,
        items: [{
            id: 'username',
            name: 'username',
            allowBlank: false,
            fieldLabel: '用户名',
            maxLength: 100,
            emptyText:'请输入用户名称',
            maxLengthText: '长度不能超过100字符',
            xtype: 'textfield',
            anchor: '99%'
        },
            {
                id: 'userpassword',
                name: 'userpassword',
                allowBlank: false,
                fieldLabel: '密码',
                maxLength: 100,
                emptyText: '请输入密码',
                maxLengthText: '长度不能超过100字符',
                xtype: 'textfield',
                anchor: '99%'
            }
            ]
    });
    var add_win = new Ext.Window({//此处为公共add弹窗
        title:'添加信息',
        layout:'fit',
        closable:true,
        collapsible: true,
        width:300,
        height:300,
        items:[add_panel],
        modal:true,
        constrain: true,
        titleCollapse: true,
        buttonAlign:'center',
        buttons:[{
            text:'确定',
            id:'addItem',
            handler:function () {
                addInfoToData();
                add_win.hide();
                Ext.Msg.show({
                    title:'新增信息',
                    msg:'添加成功',
                    // fn:processResult,
                    icon:Ext.Msg.QUESTION,
                    buttons:Ext.Msg.YEYESNO
                });
            }
        }]
    });
    function addInfoToData() {
        var submitValues = add_panel.getForm().getValues();
        for(var param in submitValues){
            if (add_panel.form.findField(param) && add_panel.form.findField(param).emptyText == submitValues[param]) {
                add_panel.form.findField(param).setValue(' ');
            }
        }
        add_panel.form.submit({
            url:'addInfo.action',
            waitTitle:'提示',
            method:'POST',
            waitMsg:'正在处理数据，请稍后...',
            success:function (form,action) {
                var msg = action.result.msg;
                form.reset()
                Ext.MessageBox.alert('提示', msg);
            }
        })
    }
    var viewport = new Ext.Viewport({
        enableTabScroll:true,
        layout:"border",//采用border布局
        items:[
            {
                region:"north",
                height:80,

                title:"面板的标题(上部分)",

                html:"<h1>新闻后台管理系统</h1>"
            },
            {
                region:"west",
                width:120,
                title:"面板的标题(左部分)",
                html:"<h1>结构树</h1>",
                bbar:[
                    {
                        text:'测试',
                        id:"testId",
                        handler:function(){
                            Ext.Msg.show({
                                title:'成了啊',
                                msg:"很好",
                                icon:Ext.Msg.QUESTION,
                                buttons:Ext.Msg.YESNO
                            })
                        }
                    }
                ]
            },
            {
                xtype:"tabpanel",//面板的类型
                region:"center",
                html:"<h1>显示操作部分</h1>",
                items:[
                    {
                        title:"新闻管理",
                        tbar: [
                            {
                                text:'新增',
                                handler:function () {
                                    add_win.show();
                                    add_win.setTitle("添加新信息");
                                }
                            }
                        ]
                    },
                    {title:"用户管理"}
                ]
            }
        ]
    })
    // win.show();
});
// function processResult() {
//     Ext.Msg.alert('结果',btn);
// }