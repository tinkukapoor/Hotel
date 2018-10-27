function MatchWindow() {

    // var Exp_states = Ext.getCmp('comboExp_States');
    // var Exp_dis = Ext.getCmp('comboExp_District');
    // var Exp_teh = Ext.getCmp('comboExp_Tehsil');
    // var Exp_vill = Ext.getCmp('comboExp_Villages');
    // var Exp_Structure = Ext.getCmp('comboExp_Struct');
    var match_grid = Ext.getCmp('gridmatch');
	// var StructureDetails1= Ext.getCmp('txtfldExp');

	
   Match_Window = new Ext.Window({
        id: "Match_Windowid",
        layout: 'fit',
        title: 'Availability Requirement Match',
        width: 1200,
        height: 450,
        closable: true,
        closeAction: 'hide',
        buttonAlign: 'center',
        items: [match_grid],
        modal: true
    });

};



