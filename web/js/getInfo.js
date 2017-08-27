Ext.onReady(function () {
    var selectStudent = new Ext.FormPanel({
        name: 'add_panel2',
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
        id:'add_panel',
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
                {boxLabel: '男', name: 'sex', inputValue: '男'},
                {boxLabel: '女', name: 'sex', inputValue: '女'},
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
                text: '性别', dataIndex: 'sex', width: 50
            }, {
                text: '年龄', dataIndex: 'old', width: 50
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
        },{
            text:"取消",
            handler:function () {
                Ext.getCmp('add_panel').getForm().reset();
                add_studentlistWin.hide();
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
                var a = Ext.getCmp('selectStudent').getComponent('name').getValue();
                // Ext.getCmp('selectStudent').getForm().reset();
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
    function console() {
    }
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
            url: 'addStudentInfo.action',
            method: 'post',
            success: function (form, action) {
                add_studentlistWin.close();
                Ext.getCmp('add_panel').getForm().reset();
                grid.store.reload();
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
    var viewPort = Ext.create('Ext.Viewport', {
        layout: "border",
        items: [
            {
                xtype:"panel",//面板的类型
                region: 'center',
                layout:'fit',
                items:[grid],
                tbar:[{
                    iconCls:"icon_add",
                    text:'新增学生',
                    handler:function () {
                        add_studentlistWin.show();
                    }
                },{
                    iconCls:"icon_user_suit",
                    text:'筛选',
                    handler:function () {
                        selectStudentWin.show();
                    }
                },{
                    iconCls:"icon_delete",
                    text:'删除',
                    handler:function () {
                        deleteStudent();
                    }
                },{
                    iconCls:"icon_refresh",
                    text:'刷新',
                    handler:function () {
                        grid.store.reload();
                    }
                }]
            }]
    })
})