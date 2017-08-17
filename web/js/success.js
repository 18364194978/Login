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
            emptyText: '请输入用户名称',
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
    var selectStudent = new Ext.FormPanel({
        name: 'add_panel',
        id: 'selectStudent',
        bodyStyle: 'padding:10 5 0',
        defaultType: 'textfield',
        labelAlign: 'right',
        labelWidth: 100,
        frame: true,
        items: [
            {
                id: 'name',
                name: 'name',
                allowBlank: true,
                fieldLabel: '姓名',
                xtype: 'textfield',
                anchor: '90%'

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
            emptyText: '请输入学生姓名',
            maxLengthText: '长度不能超过100字符',
            xtype: 'textfield',
            anchor: '99%'
        }, {
            id: 'sex',
            name: 'sex',
            allowBlank: false,
            columns: 2,
            fieldLabel: '性别',
            xtype: 'radiogroup',
            items: [
                {boxLabel: '男', name: 'sex', inputValue: 'male'},
                {boxLabel: '女', name: 'sex', inputValue: 'female'},
            ]
        }, {
            id: 'old',
            name: 'old',
            allowBlank: false,
            hideTrigger: true,
            allowDecimals: false,
            fieldLabel: '年龄',
            maxLength: 100,
            nanText: '请输入年龄',
            maxValue: 100,
            minValue: 1,
            xtype: 'numberfield',
            anchor: '99%'
        }, {
            id: 'studentnumber',
            name: 'studentnumber',
            hideTrigger: true,
            allowDecimals: false,
            allowBlank: false,
            fieldLabel: '学号',
            maxLength: 100,
            emptyText: '请输入学号',
            maxLengthText: '长度不能超过100字符',
            xtype: 'numberfield',
            anchor: '99%'
        }, {
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
            hideTrigger: true,
            allowDecimals: false,
            fieldLabel: '联系电话',
            maxLength: 11,
            minLength: 11,
            emptyText: '请输入联系电话',
            xtype: 'numberfield',
            anchor: '99%'
        }]
    });
    var store = Ext.create('Ext.data.Store', {
        fields: [{name: 'address'}, {name: 'grade'}, {name: 'gradeclass'}, {name: 'id'}, {name: 'name'}, {name: 'national'}, {name: 'old'}, {name: 'phonenum'}, {name: 'sex'}, {name: 'starttime'}, {name: 'studentnumber'}],
        groupField: 'id',
        proxy: {
            type: 'ajax',
            url: 'getStudentInfo.action',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
        // autoLoad:true//此处为已进入界面自动加载数据，若无此自动加载则需要手动grid.store.reload()加载
    });

    var columns = Ext.create('Ext.grid.ColumnModel', {
        columns: [
            new Ext.grid.RowNumberer({
                width: 40
            }),
            {
                header: '维修时间', dataIndex: 'address', width: 100
            }, {
                header: '维修时间', dataIndex: 'grade', width: 100
            }, {
                header: '维修时间', dataIndex: 'gradeclass', width: 100
            }, {
                header: '维修时间', dataIndex: 'id', width: 100
            }, {
                header: '维修时间', dataIndex: 'name', width: 100
            }, {
                header: '维修时间', dataIndex: 'national', width: 100
            }, {
                header: '维修时间', dataIndex: 'old', width: 100
            }, {
                header: '维修时间', dataIndex: 'phonenum', width: 100
            }, {
                header: '维修费用(元)', dataIndex: 'sex', width: 180
            }, {
                header: '维修厂家', dataIndex: 'starttime', width: 120
            }, {
                header: '总费用', dataIndex: 'studentnumber', width: 180
            }
        ]
    });

    function console() {
    }

    var sm = Ext.create('Ext.selection.CheckboxModel');
    var grid = Ext.create('Ext.grid.Panel', {
        frame: true,
        id: 'grid',
        height: 800,
        columnLines: true, // 加上表格线
        store: store,
        selModel: sm,//添加复选框
        // columns:columns
        columns: [
            new Ext.grid.RowNumberer(),//添加行号
            //     text: 'ID', dataIndex: 'id',width:100
            // },
            {
                text: '姓名', dataIndex: 'name', width: 100
            }, {
                text: '性别', dataIndex: 'sex', width: 180
            }, {
                text: '年龄', dataIndex: 'old', width: 100
            }, {
                text: '学号', dataIndex: 'studentnumber', width: 180
            }, {
                text: '年级', dataIndex: 'grade', width: 100
            }, {
                text: '班级', dataIndex: 'gradeclass', width: 100
            }, {
                header: '籍贯', dataIndex: 'address', width: 100, renderer: console()
            }, {
                text: '电话', dataIndex: 'phonenum', width: 100
            }, {
                text: '民族', dataIndex: 'national', width: 100,
            }, {
                text: '入学时间', dataIndex: 'starttime', width: 120
            }]
    });
    var treeStore = Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: false,//默认不展开
            children: [   //这里是树的节点 有层级的
                {text: "一级节点", leaf: true, id: 'firstNode', checked: false},
                {text: "一级节点1", expanded: false, checked: false},
                {text: "无限加载子节点", leaf: false, checked: false} //leaf:false表示有下级节点
            ]
        }
    });
    var treestoreload = Ext.create('Ext.data.TreeStore', {
        proxy: {
            type: 'ajax',
            url: 'getTreeRoot.action',
            reader: {
                type: 'json',
                root: 'treeList'
            }
        },
        root: {
            text: '根节点',
            expanded: true
        }
    });
    var tree = Ext.create('Ext.tree.Panel', {
        title: '结构树',
        width: 250,
        lines: false,
        store: treestoreload,
        useArrows: true,
        autoEncode: true,//提交时自动编码
        rootVisible: false,
        listeners: {
            beforeitemexpand: function (node, optd) {
                var getNodeId = node.data.id;
                treestoreload.setProxy({
                    type: 'ajax',
                    url: 'getTreeInfoByParentId.action',
                    extraParams: {
                        id: getNodeId
                    }
                })
            },
            itemclick: function (view, record, item) {
                var getMenuName = record.get('menuname');
                if (record.get('leaf')) { //叶子节点
                    var id = record.get('id');
                    if (tab.getComponent(id)){
                        tab.setActiveTab(id);
                    } else {
                        tab.add({
                            title: record.get('text'),
                            // html: 'tab内容--' + record.get('text'),
                            closable: true,
                            id: id,
                            html: '<iframe scrolling="auto" frameborder="0" width="100%" height="100%" src="./jsp/getInfo.jsp"></iframe>'
                        });
                    }
                }
                // var n = tab.getComponent(r.raw.id);
                // if (!n) {
                //     n = tab.add({
                //         id: r.raw.id,
                //         title: r.raw.text,
                //         closable: true,
                //         // html: '<iframe scrolling="auto" frameborder="0" width="100%" height="100%" src="' + r.raw.id + '"></iframe>'
                //     });
                // }
                // tab.setActiveTab(n);
            }
        }
    });
    var add_win = new Ext.Window({//此处为公共add弹窗
        title: '添加信息',
        layout: 'fit',
        closable: true,
        collapsible: true,
        width: 300,
        height: 300,
        items: [add_panel],
        modal: true,
        constrain: true,
        titleCollapse: true,
        buttonAlign: 'center',
        buttons: [{
            text: '确定',
            id: 'addItem',
            handler: function () {
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
        title: '添加学生信息',
        layout: 'fit',
        closable: true,
        collapsible: true,
        width: 300,
        height: 350,
        items: [add_studentlist],
        modal: true,
        constrain: true,
        titleCollapse: true,
        buttonAlign: 'center',
        buttons: [{
            text: '确定',
            id: 'addItem',
            handler: function () {
                // addInfoToData();
                addStudentInfoToData();
            }
        }]
    });
    var selectStudentWin = new Ext.Window({
        title: '查询信息',
        layout: 'fit',
        closble: true,
        collapsible: true,
        width: 500,
        hight: 300,
        items: [selectStudent],
        modal: true,
        constrain: true,
        titleCollapse: true,
        buttonAlign: 'center',
        buttons: [{
            text: '确定',
            handler: function () {
                grid.store.load({//此处通过params传参获取数据，不传参的话把params属性去掉即可
                    params: {
                        name: Ext.getCmp('selectStudent').getComponent('name').getValue()
                    }
                });
            }
        },
            {
                text: '取消',
                handler: function () {
                    selectStudentWin.hide();
                }
            }]
    });

    function addStudentInfoToData() {
        var submitValues = add_studentlist.getForm().getValues();
        for (var param in submitValues) {
            if (add_studentlist.form.findField(param) && add_studentlist.form.findField(param).emptyText == submitValues[param]) {
                add_studentlist.form.findField(param).setValue(' ');
            }
        }
        if (!add_studentlist.form.isValid()) {
            Ext.Msg.alert('提示', '请填写完整信息后再提交！');
            return;
        }
        add_studentlist.form.doAction('submit', {
            url: 'getStudentInfo.action',
            method: 'post',
            success: function (form, action) {
                var resMsg = action.result.msg;
                add_studentlistWin.hide();
                Ext.Msg.show({
                    title: '新增信息',
                    msg: '添加成功了o',
                    // fn:processResult,
                    icon: Ext.Msg.QUESTION,
                    buttons: Ext.Msg.YEYESNO
                });
            },
            failure: function (form, action) {
                Ext.Msg.show({
                    title: '新增信息失败',
                    msg: '添加失败了哦',
                    // fn:processResult,
                    icon: Ext.Msg.QUESTION,
                    buttons: Ext.Msg.YEYESNO
                });
            }
        });
    }

    function addInfoToData() {
        var submitValues = add_panel.getForm().getValues();
        for (var param in submitValues) {
            if (add_panel.form.findField(param) && add_panel.form.findField(param).emptyText == submitValues[param]) {
                add_panel.form.findField(param).setValue(' ');
            }
        }
        add_panel.form.doAction('submit', {
            url: 'addInfo.action',
            method: 'post',
            success: function (form, action) {
                Ext.Msg.show({
                    title: '新增信息',
                    msg: '添加成功了o',
                    // fn:processResult,
                    icon: Ext.Msg.QUESTION,
                    buttons: Ext.Msg.YEYESNO
                });
            },
            failure: function (form, action) {
                Ext.Msg.show({
                    title: '新增信息失败',
                    msg: '添加失败了哦',
                    // fn:processResult,
                    icon: Ext.Msg.QUESTION,
                    buttons: Ext.Msg.YEYESNO
                });
            }
        });
    }

    function exit() {
        Ext.MessageBox.show({
            title: '提示',
            msg: '确认要注销系统，退出登录吗？',
            width: 250,
            buttons: Ext.MessageBox.YESNO,
            animEl: Ext.getBody(),
            icon: Ext.MessageBox.QUESTION,
            fn: function (btn) {
                if (btn === 'yes') {
                    Ext.MessageBox.show({
                        title: '请稍等',
                        msg: '正在注销...',
                        width: 300,
                        wait: true,
                        waitConfig: {
                            interval: 50
                        }
                    });
                    window.location = 'login.jsp';
                }
            }
        });
    }

    function deleteStudent() {
        Ext.MessageBox.show({
            title: '提示',
            msg: '确认要删除学生信息吗？',
            width: 250,
            buttons: Ext.MessageBox.YESNO,
            animEl: Ext.getBody(),
            icon: Ext.MessageBox.QUESTION,
            fn: function (btn) {
                if (btn === 'yes') {
                    if (grid.getSelectionModel().hasSelection()) {
                        var records = grid.getSelectionModel().selected.items[0].data.id;
                        var selectList = [];
                        grid.getSelectionModel().selected.items.forEach(function (x) {
                            selectList.push(x.data.id);
                        });
                        Ext.Ajax.request({//此处通过ajax将id传回bean删除数据
                            url: 'deleteStudentInfo.action',
                            params: {
                                selectList: selectList
                            },
                            success: function (form, action) {
                                var getGrid = Ext.getCmp('grid');
                                grid.store.reload();
                                Ext.Msg.show({
                                    title: '新增信息',
                                    msg: '删除成功了o',
                                    // fn:processResult,
                                    icon: Ext.Msg.QUESTION,
                                    buttons: Ext.Msg.YEYESNO
                                });
                            },
                            failure: function (form, action) {
                                Ext.Msg.show({
                                    title: '新增信息失败',
                                    msg: '删除失败了哦',
                                    // fn:processResult,
                                    icon: Ext.Msg.QUESTION,
                                    buttons: Ext.Msg.YEYESNO
                                });
                            }
                        });
                        // var mycars = new Array();
                        // for ( var i = 0; i < records.length; i++) {
                        //     mycars[i] = records[i].data;
                        // }
                        // alert(mycars.length);
                    }
                    // Ext.MessageBox.show({
                    //     title: '请稍等',
                    //     msg: '正在注销...',
                    //     width: 300,
                    //     wait: true,
                    //     waitConfig: {
                    //         interval: 50
                    //     }
                    // });
                }
            }
        });
    }

    var tab = Ext.create('Ext.TabPanel', {
        region: 'center',
        deferredRender: false,
        activeTab: 0,
        xtype:'panel',
        resizeTabs: true, // turn on tab resizing
        minTabWidth: 115,
        // tabWidth: 135,
        enableTabScroll: true,
        items:[{
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
        }]
    });
    var viewPort = Ext.create('Ext.Viewport', {
        layout: "border",
        items: [
            {
            region: "north",
            height: 80,
            split: true,
            margins: '10 10 10 10',
            title: "面板的标题(上部分)",
            items: [
                {
                    xtype: 'panel',
                    border: false,
                    layout: {
                        type: 'vbox',
                        align: 'right',
                        padding: '7 3 0 0 '
                    },
                    width: '100%',
                    items: [{
                        xtype: 'fieldcontainer',
                        layout: 'column',
                        items: [
                        //     {
                        //     xtype: 'button',
                        //     text: '<span class="hydg_btn">修改密码</span>',
                        //     scale: 'medium',
                        //     id: '11',
                        //     margin: '0 5 0 0',
                        //     handler: function () {
                        //     }
                        // }, 
                            {
                            xtype: 'button',
                            text: '<span class="hydg_btn">退出</span>',
                            scale: 'medium',
                            id: 'btnSearchOption',
                            handler: function () {
                                exit();
                            }
                        }]
                    }],
                    html: '<p>这是一段文字</p>'
                }
            ]
        },
            {
            title: 'West Region is collapsible',
            region: 'west',
            xtype: 'panel',
            width: 200,
            id: 'west-region-container',
            items: [tree]
        }, tab, {
            region: 'south',
            minHeight: 25,
            html: "<div align='center'>版权所有 xxxx有限公司 © 信息服务中心</div>"
        }]
    })
// var viewport = new Ext.Viewport({
    //     enableTabScroll:true,
    //     layout:"border",//采用border布局
    //     items:[
    //         {
    //             region:"north",
    //             height:80,
    //             split : true,
    //             split : true,
    //             margins:'10 10 10 10',
    //             title:"面板的标题(上部分)",
    //             items:[
    //                 {
    //                     xtype:'panel',
    //                     border:false,
    //                     layout:{
    //                         type:'vbox',
    //                         align:'right',
    //                         padding:'7 3 0 0 '
    //                     },
    //                     width:'100%',
    //                     items:[{
    //                         xtype:'fieldcontainer',
    //                         layout:'column',
    //                         items:[{
    //                             xtype:'button',
    //                             text:'<span class="hydg_btn">修改密码</span>',
    //                             scale:'medium',
    //                             id:'11',
    //                             margin:'0 5 0 0',
    //                             handler:function () {
    //                             }
    //                         },{
    //                             xtype: 'button',
    //                             text: '<span class="hydg_btn">退出</span>',
    //                             scale: 'medium',
    //                             id: 'btnSearchOption',
    //                             handler:function () {
    //                                 exit();
    //                             }
    //                         }]
    //                     }],
    //                     html:'<p>这是一段文字</p>'
    //                 }
    //             ],
    //             html:"<div id='closeDiv' style='height: 100%'></div>"
    //         },
    //         {
    //             region:"west",
    //             width:120,
    //             title:"面板的标题(左部分)",
    //             html:"<h1>结构树</h1>",
    //             bbar:[
    //                 {
    //                     text:'测试',
    //                     id:"testId",
    //                     handler:function(){
    //                         Ext.Msg.show({
    //                             title:'成了啊',
    //                             msg:"很好",
    //                             icon:Ext.Msg.QUESTION,
    //                             buttons:Ext.Msg.YESNO
    //                         })
    //                     }
    //                 }
    //             ],
    //             items:[tree]
    //         },
    //         {
    //             xtype:"tabpanel",//面板的类型
    //             region:"center",
    //             html:"<h1>显示操作部分</h1>",
    //             items:[
    //                 {
    //                     title:"新闻管理",
    //                     tbar: [
    //                         {
    //                             text:'新增',
    //                             handler:function () {
    //                                 add_win.show();
    //                                 add_win.setTitle("添加新信息");
    //                             }
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     title:"用户管理",
    //                     tbar:[
    //                         {
    //                             text:"新增学生",
    //                             handler:function () {
    //                                 add_studentlistWin.show();
    //                             }
    //                         },
    //                         {
    //                             text:'删除学生',
    //                             handler:function () {
    //                                 deleteStudent();
    //                             }
    //                         },
    //                         {
    //                             text:'信息查询',
    //                             handler:function () {
    //                                 selectStudentWin.show();
    //                             }
    //
    //                         },
    //                         {
    //                             text:'查询',
    //                             handler:function () {
    //                                 grid.store.reload();
    //                             }
    //                         }
    //                         ],
    //                     items:[grid]
    //                 }
    //             ]
    //         }
    //     ]
    // });
});
