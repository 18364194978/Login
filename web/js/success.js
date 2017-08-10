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
        }, {
                id: 'password',
                name: 'password',
                allowBlank: false,
                fieldLabel: '密码',
                maxLength: 100,
                emptyText: '请输入密码',
                maxLengthText: '长度不能超过100字符',
                xtype: 'textfield',
                anchor: '99%'
            }]
    });
    var add_studentlist = new Ext.FormPanel({
        name: 'add_panel',
        bodyStyle: 'padding:10 5 0',
        defaultType: 'textfield',
        labelAlign: 'right',
        labelWidth: 100,
        frame: true,
        items: [{
            id: 'name',
            name: 'name',
            allowBlank: false,
            fieldLabel: '姓名',
            maxLength: 100,
            emptyText:'请输入学生姓名',
            maxLengthText: '长度不能超过100字符',
            xtype: 'textfield',
            anchor: '99%'
        },{
            id: 'sex',
            name: 'sex',
            allowBlank: false,
            columns:2,
            fieldLabel: '性别',
            xtype: 'radiogroup',
            items:[
                {boxLabel:'男',name:'sex',inputValue:'male'},
                {boxLabel:'女',name:'sex',inputValue:'female'},
            ]
        }, {
            id: 'old',
            name: 'old',
            allowBlank: false,
            hideTrigger:true,
            allowDecimals:false,
            fieldLabel: '年龄',
            maxLength: 100,
            nanText: '请输入年龄',
            maxValue:100,
            minValue:1,
            xtype: 'numberfield',
            anchor: '99%'
        }, {
            id: 'studentnumber',
            name: 'studentnumber',
            hideTrigger:true,
            allowDecimals:false,
            allowBlank: false,
            fieldLabel: '学号',
            maxLength: 100,
            emptyText: '请输入学号',
            maxLengthText: '长度不能超过100字符',
            xtype: 'numberfield',
            anchor: '99%'
        },{
            id: 'national',
            name: 'national',
            allowBlank: false,
            fieldLabel: '民族',
            maxLength: 100,
            emptyText: '请输入名族',
            maxLengthText: '长度不能超过100字符',
            xtype: 'textfield',
            anchor: '99%'
        }, {
            id: 'address',
            name: 'address',
            allowBlank: false,
            fieldLabel: '籍贯',
            maxLength: 100,
            emptyText: '请输入籍贯',
            maxLengthText: '长度不能超过100字符',
            xtype: 'textfield',
            anchor: '99%'
        }, {
            id: 'grade',
            name: 'grade',
            allowBlank: false,
            fieldLabel: '级部',
            maxLength: 100,
            emptyText: '请输入级部',
            maxLengthText: '长度不能超过100字符',
            xtype: 'textfield',
            anchor: '99%'
        }, {
            id: 'gradeclass',
            name: 'gradeclass',
            allowBlank: false,
            fieldLabel: '班级',
            maxLength: 100,
            emptyText: '请输入班级',
            maxLengthText: '长度不能超过100字符',
            xtype: 'textfield',
            anchor: '99%'
        }, {
            id: 'starttime',
            name: 'starttime',
            allowBlank: false,
            fieldLabel: '入学时间',
            maxLength: 100,
            emptyText: '请输入入学时间',
            maxLengthText: '长度不能超过100字符',
            xtype: 'textfield',
            anchor: '99%'
        }, {
            id: 'phonenum',
            name: 'phonenum',
            allowBlank: false,
            hideTrigger:true,
            allowDecimals:false,
            fieldLabel: '联系电话',
            maxLength:11,
            minLength:11,
            emptyText: '请输入联系电话',
            xtype: 'numberfield',
            anchor: '99%'
        }]
    });
    var data = [{
        factory:'第一家维修公司', date:'2014-05', cost:52492.0, costav:52492.0
    },{
        factory:'第二家维修公司', date:'2014-05', cost:760.0, costav:760.0
    },{
        factory:'第三家维修公司', date:'2014-05', cost:1807.0, costav:1807.0
    },{
        factory:'第一家维修公司', date:'2014-06', cost:4921.0, costav:4921.0
    },{
        factory:'第二家维修公司', date:'2014-06', cost:1020.0, costav:1020.0
    },{
        factory:'第三家维修公司', date:'2014-06', cost:1637.0, costav:1637.0
    },{
        factory:'第一家维修公司', date:'2014-07', cost:48150.0, costav:48150.0
    },{
        factory:'第二家维修公司', date:'2014-07', cost:7940.0, costav:7940.0}];

    var store = Ext.create('Ext.data.Store', {
        fields: [{name: 'date'}, {name: 'cost'},{name: 'costav'},{name: 'factory'}],
        // groupField: 'date',
        data: data
    });

    var grid = Ext.create('Ext.grid.Panel', {
        frame: true,
        height: 800,
        columnLines: true, // 加上表格线
        // renderTo: Ext.getBody(),
        columns: [{
            text: '维修时间', dataIndex: 'date',width:100,
        },{
            text: '维修费用(元)', dataIndex: 'cost', width:180,
            field: { xtype: 'numberfield'},
            summaryType: 'sum',
        },{
            text: '维修厂家', dataIndex: 'factory',width:120,
        },{
            text: '总费用', dataIndex: 'costav', width:180,
            field: {xtype: 'numberfield'},
            summaryType: 'average',
        }],
        store: store
    });
    // grid.show();
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
                // Ext.Msg.show({
                //     title:'新增信息',
                //     msg:'添加成功',
                //     // fn:processResult,
                //     icon:Ext.Msg.QUESTION,
                //     buttons:Ext.Msg.YEYESNO
                // });
            }
        }]
    });
    var add_studentlistWin = new Ext.Window({//此处为公共add弹窗
        title:'添加学生信息',
        layout:'fit',
        closable:true,
        collapsible: true,
        width:300,
        height:350,
        items:[add_studentlist],
        modal:true,
        constrain: true,
        titleCollapse: true,
        buttonAlign:'center',
        buttons:[{
            text:'确定',
            id:'addItem',
            handler:function () {
                // addInfoToData();
                addStudentInfoToData();
            }
        }]
    });
    function addStudentInfoToData() {
        var submitValues = add_studentlist.getForm().getValues();
        for(var param in submitValues){
            if (add_studentlist.form.findField(param) && add_studentlist.form.findField(param).emptyText == submitValues[param]) {
                add_studentlist.form.findField(param).setValue(' ');
            }
        }
            if (!add_studentlist.form.isValid()){
                Ext.Msg.alert('提示','请填写完整信息后再提交！');
                return;
            }
        add_studentlist.form.doAction('submit',{
            url:'getStudentInfo.action',
            method:'post',
            success:function(form,action){
                var resMsg = action.result.msg;
                add_studentlistWin.hide();
                Ext.Msg.show({
                    title:'新增信息',
                    msg:'添加成功了o',
                    // fn:processResult,
                    icon:Ext.Msg.QUESTION,
                    buttons:Ext.Msg.YEYESNO
                });
            },
            failure:function(form,action){
                Ext.Msg.show({
                    title:'新增信息失败',
                    msg:'添加失败了哦',
                    // fn:processResult,
                    icon:Ext.Msg.QUESTION,
                    buttons:Ext.Msg.YEYESNO
                });
            }
        });
    }
    function addInfoToData() {
        var submitValues = add_panel.getForm().getValues();
        for(var param in submitValues){
            if (add_panel.form.findField(param) && add_panel.form.findField(param).emptyText == submitValues[param]) {
                add_panel.form.findField(param).setValue(' ');
            }
        }
        add_panel.form.doAction('submit',{
            url:'addInfo.action',
            method:'post',
            success:function(form,action){
                Ext.Msg.show({
                    title:'新增信息',
                    msg:'添加成功了o',
                    // fn:processResult,
                    icon:Ext.Msg.QUESTION,
                    buttons:Ext.Msg.YEYESNO
                });
            },
            failure:function(form,action){
                Ext.Msg.show({
                    title:'新增信息失败',
                    msg:'添加失败了哦',
                    // fn:processResult,
                    icon:Ext.Msg.QUESTION,
                    buttons:Ext.Msg.YEYESNO
                });
            }
        });
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
                    {
                        title:"用户管理",
                        tbar:[
                            {
                                text:"新增学生",
                                handler:function () {
                                    add_studentlistWin.show();
                                }
                            }
                            ],
                        items:[grid]
                    }
                ]
            }
        ]
    })
});
// function processResult() {
//     Ext.Msg.alert('结果',btn);
// }