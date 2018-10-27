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
var matchcounter = '0';
Ext.onReady(function(){


var proxyExp = new Ext.data.HttpProxy({
    api: {
        read: 'getfbdata/',
        //create: 'saveExpData/',
        //update: 'saveExpData/',
        //destroy: 'NewExpData/'
    method: 'GET',
    }
});


// Typical JsonReader.  Notice additional meta-data params for defining the core attributes of your json-response
var readerexp = new Ext.data.JsonReader({
    idProperty: 'id',
      root: 'items',

        totalProperty: 'totalCount'
        
 // <-- New "messageProperty" meta-data
}, [
    { name: 'id' },
    { name: 'project_name', allowBlank: true },
    { name: 'flat_type', allowBlank: true },
    { name: 'person_name', allowBlank: true },
    { name: 'package', allowBlank: true },
    { name: 'project_qoute', allowBlank: true },
    { name: 'price_per_area', allowBlank: true },
    { name: 'message', allowBlank: true },
    { name: 'price_list', allowBlank: true },
    { name: 'person_mobile', allowBlank: true },
    { name: 'broker_arrangement', allowBlank: true },
    { name: 'area', allowBlank: true },
    { name: 'other_mobiles', allowBlank: true },
    { name: 'other', allowBlank: true },
    
    { name: 'lease_type', allowBlank: true },
    { name: 'deposit', allowBlank: true },
    { name: 'avl_req', allowBlank: true },
    { name: 'address_detail', allowBlank: true },
    { name: 'price', allowBlank: true },
    { name: 'project_detail', allowBlank: true },
    { name: 'builder_name', allowBlank: true },  
    { name: 'msgid', allowBlank: true }, 
]
);

store = new Ext.data.Store({
    storeId : 'store',   // KINDY Change ID.
    proxy: proxyExp,
    reader: readerexp,
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
    function renderTopic(value, p, record){
        return String.format(
                '<b><a href="http://extjs.com/forum/showthread.php?t={2}" target="_blank">{0}</a></b><a href="http://extjs.com/forum/forumdisplay.php?f={3}" target="_blank">{1} Forum</a>',
                value, record.data.forumtitle, record.id, record.data.forumid);
    }
    
    function renderLast(value, p, r){
        return String.format('{0}<br/>by {1}', value.dateFormat('M j, Y, g:i a'), r.data['lastposter']);
    }

var userColumnsExp =  [

    {header: "Location", id:"Location", width: 150, sortable: true, dataIndex: 'address_detail'},
    {header: "Flat Type",id:"flat_type" ,width: 150, sortable: true, dataIndex: 'flat_type'},
    {header: "Lease Type",id:"lease_type", width: 120, sortable: true, dataIndex: 'lease_type'},
    {header: "Avail/Req", id:"avl_req", width: 100, sortable: true, dataIndex: 'avl_req'},
    {header: "Area", id:"area", width: 150, sortable: true, dataIndex: 'area'},
    {header: "Price", id:"Price", width: 120, sortable: true, dataIndex: 'price'},
    {header: "Contact No", id:"Contact", width: 150, sortable: true, dataIndex: 'person_mobile'},
    {header: "Other", id:"Other", width: 180, sortable: true, dataIndex: 'other'},
    {header: "Other Contact No", id:"Otherno", width: 400, sortable: true, dataIndex: 'other_mobiles',hidden:true},
    {header: "Person Name", id:"person_name", width: 300, sortable: true, dataIndex: 'person_name',hidden:true},
    {header: "Project Name", id:"project_name", width: 300, sortable: true, dataIndex: 'project_name',hidden:true},
    {header: "Project Qoute", id:"project_qoute", width: 300, sortable: true, dataIndex: 'project_qoute',hidden:true},
    {header: "Project Details", id:"project_detail", width: 300, sortable: true, dataIndex: 'project_detail',hidden:true},
    {header: "Package", id:"package", width: 200, sortable: true, dataIndex: 'package',hidden:true},
    {header: "Deposit", id:"Deposit", width: 200, sortable: true, dataIndex: 'deposit',hidden:true},
    {header: "Price/Area", id:"price_per_area", width: 200, sortable: true, dataIndex: 'price_per_area',hidden:true},
    {header: "Price List", id:"price_list", width: 200, sortable: true, dataIndex: 'price_list',hidden:true},
    {header: "Broker Arrangement", id:"broker_arrangement", width: 30, sortable: true, dataIndex: 'broker_arrangement',hidden:true},
    {header: "Builder Name", id:"builder_name", width: 300, sortable: true, dataIndex: 'builder_name',hidden:true},
    {header: "Message", id:"Message", width: 1000, sortable: true, dataIndex: 'message',hidden:true},
    {
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../static/dashboard/match.png',  // Use a URL in the icon config
                    tooltip: 'Match availabiliy/requirement',
                    handler: function(grid, rowIndex, colIndex) {
                        matchcounter  = '1'
                        var rec = store.getAt(rowIndex);
                        var Location = rec.get('address_detail');
                        var FlatType = rec.get('flat_type');
                        var Lease = rec.get('lease_type')
                        var AvlReq = rec.get('avl_req');
                        if (AvlReq =='AVL'){ AvlReq = 'REQ'}
                        else if (AvlReq = 'REQ'){AvlReq = 'AVL'}

                        var Area = rec.get('area')
                        var Price = rec.get('price')
                        var Other = Ext.getCmp('otherinformationcombo').getValue();
                        storematch.load({params:{start:0, limit:25, Location:Location,FlatType:FlatType, AvlReq: AvlReq, Lease:Lease, Other:Other , Price: Price, Area: Area,counter: matchcounter }});
                        var popUp = Ext.getCmp('Match_Windowid');
                        popUp.show();
                    }
                 },// {
                //     getClass: function(v, meta, rec) {          // Or return a class from a function
                //         if (rec.get('change') < 0) {
                //             this.items[1].tooltip = 'Do not buy!';
                //             return 'alert-col';
                //         } else {
                //             this.items[1].tooltip = 'Buy stock';
                //             return 'buy-col';
                //         }
                //     },
                //     handler: function(grid, rowIndex, colIndex) {
                //         var rec = store.getAt(rowIndex);
                //         alert(rec.get('Avail/Req'));
                //     }
                // }
                ]
    }


];


    grid = new Ext.grid.GridPanel({
        id: 'grid',
        width:1200,
        height:450,
        title:'ExtJS.com - Browse Forums',
        store: store,
        trackMouseOver:true,
        disableSelection:false,
        loadMask: true,
        autoScroll: true,
        columnLines: true,
        // grid columns
        columns:userColumnsExp,

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
                var popUp = Ext.getCmp('Edit_Windowid');
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
            store: store,
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
                    var view = grid.getView();
                    view.showPreview = pressed;
                    view.refresh();
                }
            }]
        }),
        listeners: {
            rowclick: function(g, index, ev) {
                var rec = g.store.getAt(index);
                var id = rec.get('id');
                
                 Ext.getCmp("simple").getForm().loadRecord(rec);
            },
            destroy : function() {
                //UserForm.getForm().reset();
            }
        }
        
    });

    // render it
    grid.render('topic-grid');
    var other = Ext.getCmp('otherinformationcombo').getValue();
    var lease = Ext.getCmp('leasecombo').getValue();
    // var level = Ext.getCmp('levelmatchcombo').getValue();
    var flat = Ext.getCmp('flattypecombo').getValue();
 

    // trigger the data store load
    store.load({params:{start:0, limit:25,other:other, lease:lease, flat:flat, counter: counter }});
    // store.load({params:{start:0, limit:25}});
 
    
// var colModel = Ext.getCmp('grid').getColumnModel();

// colModel.setHidden(1, true);

MatchWindow();
EditWindow();
GovWindow();
});


