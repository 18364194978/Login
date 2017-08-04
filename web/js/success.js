Ext.onReady(function () {
    var win = new Ext.Window({
        width:300,
        height:300,
        items:[],
        modal:true,
        buttonAlign:'center',
        buttons:[{
            text:'测试',
            id:'btnTest',
            handler:function () {
                Ext.Msg.show({
                    title:'询问',
                    msg:'成功了啊',
                    // fn:processResult,
                    icon:Ext.Msg.QUESTION,
                    buttons:Ext.Msg.YEYESNO
                });
            }
        }]
    });
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
                html:"<h1>连接部分</h1>",
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
                    {title:"新闻管理"},
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