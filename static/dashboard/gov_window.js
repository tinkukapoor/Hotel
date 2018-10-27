function GovWindow() {

    // var Exp_states = Ext.getCmp('comboExp_States');
    // var Exp_dis = Ext.getCmp('comboExp_District');
    // var Exp_teh = Ext.getCmp('comboExp_Tehsil');
    // var Exp_vill = Ext.getCmp('comboExp_Villages');
    // var Exp_Structure = Ext.getCmp('comboExp_Struct');
    var gov_grid = Ext.getCmp('gridgov');
	// var StructureDetails1= Ext.getCmp('txtfldExp');
	

   Gov_Window = new Ext.Window({
        id: "Gov_Windowid",
        layout: 'fit',
        title: 'Government Data',
        width: 1200,
        height: 450,
        closable: true,
        closeAction: 'hide',
        buttonAlign: 'center',
        items: [gov_grid],
        modal: true

    });
    	
};


