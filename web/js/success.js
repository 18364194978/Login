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
                    fn:processResult,
                    icon:Ext.Msg.QUESTION,
                    buttons:Ext.Msg.YEYESNO
                });
            }
        }]
    });
    win.show();
});
function processResult() {
    Ext.Msg.alert('结果',btn);
}