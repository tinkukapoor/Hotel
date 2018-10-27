function EditWindow() {

    // var Exp_states = Ext.getCmp('comboExp_States');
    // var Exp_dis = Ext.getCmp('comboExp_District');
    // var Exp_teh = Ext.getCmp('comboExp_Tehsil');
    // var Exp_vill = Ext.getCmp('comboExp_Villages');
    // var Exp_Structure = Ext.getCmp('comboExp_Struct');
    var editform = Ext.getCmp('simple');
    var govform = Ext.getCmp('government')
	// var StructureDetails1= Ext.getCmp('txtfldExp');
	  
   Edit_Window = new Ext.Window({
        id: "Edit_Windowid",
        layout: 'fit',
        title: 'Edit Form',
        width: 500,
        height: 600,
        closable: true,
        closeAction: 'hide',
        buttonAlign: 'center',
        items: [editform],
        modal: true
    });


   Edit_Window = new Ext.Window({
        id: "Edit_GovWindowid",
        layout: 'fit',
        title: 'Form',
        width: 500,
        height: 600,
        closable: true,
        closeAction: 'hide',
        buttonAlign: 'center',
        items: [govform],
        modal: true
    });

};











