// Create HttpProxy instance.  Notice new configuration parameter "api" here instead of load.  However, you can still use
// the "url" paramater -- All CRUD requests will be directed to your single url instead.
//selectedStructure = Ext.getCmp('comboExp_Struct').getValue();
var proxyExp = new Ext.data.HttpProxy({
    api: {
        read: 'getfbdata/',
       // create: 'saveExpData/',
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
    { name: 'lease_type', allowBlank: true },
    { name: 'deposit', allowBlank: true },
    { name: 'avl_req', allowBlank: true },
    { name: 'address_detail', allowBlank: true },
    { name: 'price', allowBlank: true },
    { name: 'project_detail', allowBlank: true },
    { name: 'builder_name', allowBlank: true }    
    
    
]
);

// The new DataWriter component.
var writerExp = new Ext.data.JsonWriter({
    encode: true,
    writeAllFields: true,
    autoSave: true,
    batch:false              // if set to true it sends all modified rows as a list , false forces single requests for each row. 
});

// Typical Store collecting the Proxy, Reader and Writer together.
var storeExp = new Ext.data.Store({
    storeId : 'expDataStore',   // KINDY Change ID.
    proxy: proxyExp,
    reader: readerexp,
   // writer: writerExp,  // <-- plug a DataWriter into the store just as you would a Reader
    autoSave: true // <-- false would delay executing create, update, destroy requests until specifically told to do so with some [save] buton.
});

storeExp.load({ params: { start: 0, limit: 25} });

////
// ***New*** centralized listening of DataProxy events "beforewrite", "write" and "writeexception"
// upon Ext.data.DataProxy class.  This is handy for centralizing user-feedback messaging into one place rather than
// attaching listenrs to EACH Store.
//
// Listen to all DataProxy beforewrite events
//
Ext.data.DataProxy.addListener('beforeupdate', function(proxy, action) {
    App.setAlert(App.STATUS_NOTICE, "Before " + action);
});

////
// all write events
//
Ext.data.DataProxy.addListener('write', function(proxy, action, result, res, rs) {
	if (type === 'response') {
        Ext.Msg.show({
            title: 'NDMA',
            msg: res.responseText,
            icon: Ext.MessageBox.INFO,
            buttons: Ext.Msg.OK
        });
    }
  //  App.setAlert(true, action + ':' + res.message);
});

////
// all exception events
//
//Ext.data.DataProxy.addListener('exception', function(proxy, type, action, options, res) {
//  
//    if (type === 'response') {
//        Ext.Msg.show({
//            title: 'NDMA',
//            msg: res.responseText,
//            icon: Ext.MessageBox.INFO,
//            buttons: Ext.Msg.OK
//        });
//    }
//});

// A new generic text field
var strt=0;
//var totalpage=Math.ceil(storeExp.totalLength/ 100);
var textField1 =  new Ext.form.TextField();
var textField =  new Ext.form.NumberField({
                decimalPrecision : false,
                minValue: 0,
                maxValue: 999999,
                allowNegative: false,
                allowBlank: false,
                maxText: "Maximum 6 digits are allowed."
});
// Let's pretend we rendered our grid-columns with meta-data from our ORM framework.
var userColumnsExp =  [
    {header: "project_name", width: 120, sortable: true, dataIndex: 'project_name'},
    {header: "flat_type", width: 150, sortable: true, dataIndex: 'flat_type'},
    {header: "person_name", width: 100, sortable: true, dataIndex: 'person_name'},
    {header: "package", width: 100, sortable: true, dataIndex: 'package'},
    {header: "project_qoute", width: 100, sortable: true, dataIndex: 'project_qoute'},
    
];

Ext.onReady(function() {
    Ext.QuickTips.init();

    // create user.Grid instance (@see UserGrid.js)
    var userGridExp= new Ext.grid.GridPanel({
      // override : 'Ext.toolbar.Paging',
       id: 'userGridExp',
        store: storeExp,
        loadMask: true,
        style: {
            	"margin-top":"-3px"
            },
        title: 'Search results for editing building structure distribution',
        
        columns : userColumnsExp,
 
        listeners: {
        	
            rowclick: function(g, index, ev) {
                var rec = g.store.getAt(index);
//                userForm.loadRecord(rec);
            },
            destroy : function() {
//                userForm.getForm().reset();
            }
        }
    });

userGridExp.render('topic-grid');

    // trigger the data store load
    storeExp.load({params:{start:0, limit:25}});
});
