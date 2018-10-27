/*
This file is part of Ext JS 3.4

Copyright (c) 2011-2013 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as
published by the Free Software Foundation and appearing in the file LICENSE included in the
packaging of this file.

Please review the following information to ensure the GNU General Public License version 3.0
requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Build date: 2013-04-03 15:07:25
*/
var store;
var grid;


var proxygov = new Ext.data.HttpProxy({
    api: {
         read: '../getgovdata/',
        //create: 'saveExpData/',
        //update: 'saveExpData/',
        //destroy: 'NewExpData/'
 	method: 'GET',
    }
});


// Typical JsonReader.  Notice additional meta-data params for defining the core attributes of your json-response
var readergov = new Ext.data.JsonReader({
    idProperty: 'id',
      root: 'items',

        totalProperty: 'totalCount'
        
 // <-- New "messageProperty" meta-data
}, [
	{ name: 'id' },
    { name: 'year', allowBlank: true },
    { name: 'district', allowBlank: true },
    { name: 'village', allowBlank: true },
    { name: 'cts_no', allowBlank: true },
    { name: 'doc_no', allowBlank: true },
    { name: 'doc_name', allowBlank: true },
    { name: 'registration_date', allowBlank: true },
    { name: 'perchaser_name', allowBlank: true },
    { name: 'seller_name', allowBlank: true },
    { name: 'property_desc', allowBlank: true },
    { name: 'sro_code', allowBlank: true },
    { name: 'sro_name', allowBlank: true },
    { name: 'status', allowBlank: true },
    { name: 'returns', allowBlank: true },
    { name: 'market_rate', allowBlank: true },
    { name: 'area', allowBlank: true },
    { name: 'doc_creation_date', allowBlank: true },
    { name: 'sr_no_sec_page', allowBlank: true },
    { name: 'stamp_duty_market_rate', allowBlank: true },
    { name: 'doc_registration_date', allowBlank: true },
    { name: 'reg_fee_market_rate', allowBlank: true },    
]
);


storegov = new Ext.data.Store({
    storeId : 'storegov',   // KINDY Change ID.
    proxy: proxygov,
    reader: readergov,
   // writer: writerExp,  // <-- plug a DataWriter into the store just as you would a Reader
    autoSave: true // <-- false would delay executing create, update, destroy requests until specifically told to do so with some [save] buton.
});

    // create the Data Store
   /* var store = new Ext.data.JsonStore({
        root: 'topics',
        totalProperty: 'totalCount',
        idProperty: 'threadid',
        remoteSort: true,

        fields: [
            'title', 'forumtitle', 'forumid', 'author',
            {name: 'replycount', type: 'int'},
            {name: 'lastpost', mapping: 'lastpost', type: 'date', dateFormat: 'timestamp'},
            'lastposter', 'excerpt'
        ],

        // load using script tags for cross domain, if the data in on the same domain as
        // this page, an HttpProxy would be better
        proxy: new Ext.data.ScriptTagProxy({
            url: 'http://extjs.com/forum/topics-browse-remote.php'
        })
    });
    store.setDefaultSort('lastpost', 'desc');*/


    // pluggable renders
    // function renderTopic(value, p, record){
    //     return String.format(
    //             '<b><a href="http://extjs.com/forum/showthread.php?t={2}" target="_blank">{0}</a></b><a href="http://extjs.com/forum/forumdisplay.php?f={3}" target="_blank">{1} Forum</a>',
    //             value, record.data.forumtitle, record.id, record.data.forumid);
    // }
    
    // function renderLast(value, p, r){
    //     return String.format('{0}<br/>by {1}', value.dateFormat('M j, Y, g:i a'), r.data['lastposter']);
    // }

var userColumnsgov =  [

    {header: "Year",  width: 100, sortable: true, dataIndex: 'year'},
    {header: "District" ,width: 120, sortable: true, dataIndex: 'district'},
    {header: "Village", width: 100, sortable: true, dataIndex: 'village'},
    {header: "CTS No",width: 100, sortable: true, dataIndex: 'cts_no'},
    {header: "Doc No",  width: 100, sortable: true, dataIndex: 'doc_no'},
    {header: "Doc Name", width: 200, sortable: true, dataIndex: 'doc_name'},
    {header: "Registration Date",  width: 120, sortable: true, dataIndex: 'registration_date'},
    {header: "Perchaser Name",  width: 300, sortable: true, dataIndex: 'perchaser_name'},
    {header: "Seller Name",width: 500, sortable: true, dataIndex: 'seller_name'},
    {header: "Property Desc",  width: 1000, sortable: true, dataIndex: 'property_desc'},
    {header: "SRO Code",  width: 100, sortable: true, dataIndex: 'sro_code'},
    {header: "SRO Name", width: 150, sortable: true, dataIndex: 'sro_name'},

    {header: "Status",  width: 100, sortable: true, dataIndex: 'status'},
    {header: "Returns",  width: 120, sortable: true, dataIndex: 'returns'},
    {header: "Market Rate",  width: 120, sortable: true, dataIndex: 'market_rate'},
    {header: "Area", width: 150, sortable: true, dataIndex: 'area'},
    {header: "Doc Creation Date",  width: 120, sortable: true, dataIndex: 'doc_creation_date'},
    {header: "Sr No Sec Page",  width: 120, sortable: true, dataIndex: 'sr_no_sec_page'},
    {header: "Stamp Duty",  width: 100, sortable: true, dataIndex: 'stamp_duty_market_rate'},
    {header: "Doc Registration Date",  width: 120, sortable: true, dataIndex: 'doc_registration_date'},
    {header: "Reg Fee",  width: 100, sortable: true, dataIndex: 'reg_fee_market_rate'},
    


    
    // {
    //             xtype: 'actioncolumn',
    //             width: 50,
    //             items: [{
    //                 icon   : '../static/dashboard/match.png',  // Use a URL in the icon config
    //                 tooltip: 'Match availabiliy/requirement',
    //                 handler: function(grid, rowIndex, colIndex) {
    //                     var rec = store.getAt(rowIndex);
    //                     alert(rec.get('avl_req'));
    //                 }
    //              },// {
    //             //     getClass: function(v, meta, rec) {          // Or return a class from a function
    //             //         if (rec.get('change') < 0) {
    //             //             this.items[1].tooltip = 'Do not buy!';
    //             //             return 'alert-col';
    //             //         } else {
    //             //             this.items[1].tooltip = 'Buy stock';
    //             //             return 'buy-col';
    //             //         }
    //             //     },
    //             //     handler: function(grid, rowIndex, colIndex) {
    //             //         var rec = store.getAt(rowIndex);
    //             //         alert(rec.get('Avail/Req'));
    //             //     }
    //             // }
    //             ]
    // }


];


    gridgov = new Ext.grid.GridPanel({
        id: 'gridgov',
        width:1500,
        height:450,
        store: storegov,
        trackMouseOver:true,
        disableSelection:false,
        loadMask: true,
        autoScroll: true,
        // grid columns
        columns:userColumnsgov,

        // customize view config
        viewConfig: {
            forceFit:false,
            enableRowBody:true,
            showPreview:false,
            getRowClass : function(record, rowIndex, p, store){
                if(this.showPreview){
                    p.body = '<p>'+record.data.excerpt+'</p>';
                    return 'x-grid3-row-expanded';
                }
                return 'x-grid3-row-collapsed';
            }
        },


        tbar:[
        {
            text:'Edit',
            tooltip:'Add a new row',
            handler: function() {
                seletionModel = grid.getSelectionModel();
                selectedRecords = seletionModel.getSelected();
                var popUp = Ext.getCmp('Edit_GovWindowid');
                popUp.show();
                
            }
            // iconCls:'add'
        }, '-', {
            text:'Options',
            tooltip:'Blah blah blah blaht',
            iconCls:'option'
        }
        ],


        // paging bar on the bottom
        bbar: new Ext.PagingToolbar({
            pageSize: 25,
            store: storegov,
            displayInfo: true,
            displayMsg: 'Displaying topics {0} - {1} of {2}',
            emptyMsg: "No topics to display",
            items:[
                '-', {
                pressed: true,
                enableToggle:true,
                text: 'Show Preview',
                cls: 'x-btn-text-icon details',
                toggleHandler: function(btn, pressed){
                    var view = gridgov.getView();
                    view.showPreview = pressed;
                    view.refresh();
                }
            }]
        }),
        listeners: {
            rowclick: function(g, index, ev) {
                var rec = g.store.getAt(index);
                var id = rec.get('id');
                
                 Ext.getCmp("government").getForm().loadRecord(rec);
            },
            destroy : function() {
                //UserForm.getForm().reset();
            }
        }

    });

    // render it
    // grid.render('topic-grid');
    // var other = Ext.getCmp('otherinformationcombo').getValue();
    // var lease = Ext.getCmp('leasecombo').getValue();
    // // var level = Ext.getCmp('levelmatchcombo').getValue();
    // var flat = Ext.getCmp('flattypecombo').getValue();
 

    // trigger the data store load
    // storematch.load({params:{start:0, limit:25,other:other, lease:lease, flat:flat, counter: counter }});
    storegov.load({params:{start:0, limit:25}});
 
    
// var colModel = Ext.getCmp('grid').getColumnModel();

// colModel.setHidden(1, true);

