
var simple = new Ext.FormPanel({
        id:'simple',
        labelWidth: 75, // label settings here cascade unless overridden
       // url:'save-form.php',
        frame:true,
        title: 'Simple Form',
        bodyStyle:'padding:5px 5px 0',
        width: 350,
        height:1200,
        defaults: {width: 230},
        defaultType: 'textfield',
        autoScroll: true,
        items: [{
                fieldLabel: 'Id',
                name: 'id',
                allowBlank:true,
                readOnly: true,
            },{
                fieldLabel: 'Location',
                name: 'address_detail',
                allowBlank:true
            },{
                fieldLabel: 'Flat Type',
                name: 'flat_type'
            },{
                fieldLabel: 'Lease Type',
                name: 'lease_type'
            }, 
            {
                fieldLabel: 'Avail/Req',
                name: 'avl_req',
                allowBlank:true
            },{
                fieldLabel: 'Area',
                name: 'area'
            },{
                fieldLabel: 'Price',
                name: 'price'
            }, 

            {
                fieldLabel: 'Contact No',
                name: 'person_mobile',
                allowBlank:true
            },{
                fieldLabel: 'Other',
                name: 'other'
            },  
            {
                fieldLabel: 'Other Contact No',
                name: 'other_mobiles',
                allowBlank:true
            },{
                fieldLabel: 'Person Name',
                name: 'person_name'
            },{
                fieldLabel: 'Project Name',
                name: 'project_name'
            }, 
            {
                fieldLabel: 'Project Qoute',
                name: 'project_qoute'
            }, 
            {
                fieldLabel: 'Project Details',
                name: 'project_detail',
                allowBlank:true
            },{
                fieldLabel: 'Package',
                name: 'package'
            },{
                fieldLabel: 'Deposit',
                name: 'deposit'
            }, 
            {
                fieldLabel: 'Price/Area',
                name: 'price_per_area'
            }, 
            {
                fieldLabel: 'Price List',
                name: 'price_list'
            }, 
            {
                fieldLabel: 'Broker Arrangement',
                name: 'broker_arrangement'
            },{
                fieldLabel: 'Builder Name',
                name: 'builder_name'
                
            },{
                fieldLabel: 'Message',
                name: 'message',
                //id: 'message',
                height: 200,
                width: 300,
                autoScroll:true,
                 xtype:'textarea',
            },  
            // {
            //     fieldLabel: 'Email',
            //     name: 'email',
            //     vtype:'email'
            // }, new Ext.form.TimeField({
            //     fieldLabel: 'Time',
            //     name: 'time',
            //     minValue: '8:00am',
            //     maxValue: '6:00pm'
            // })
        ],

        buttons: [{
            text: 'Save',
            iconCls: 'icon-save',
            handler: function() {
                    if (simple.getForm().isValid())
                                {
                                    var params = new Object();
                                     params.address_detail= simple.getForm().findField('address_detail').getValue();
                                     params.id= simple.getForm().findField('id').getValue();
                                     params.flat_type= simple.getForm().findField('flat_type').getValue();
                                     params.lease_type= simple.getForm().findField('lease_type').getValue();
                                     params.avl_req= simple.getForm().findField('avl_req').getValue();
                                     params.area= simple.getForm().findField('area').getValue();
                                     params.price= simple.getForm().findField('price').getValue();
                                     params.person_name= simple.getForm().findField('person_name').getValue();
                                     params.person_mobile= simple.getForm().findField('person_mobile').getValue();
                                     params.other= simple.getForm().findField('other').getValue();
                                     params.other_mobiles= simple.getForm().findField('other_mobiles').getValue();
                                     params.project_name= simple.getForm().findField('project_name').getValue();
                                     params.project_qoute= simple.getForm().findField('project_qoute').getValue();
                                     params.project_detail= simple.getForm().findField('project_detail').getValue();
                                     params.package= simple.getForm().findField('package').getValue();
                                     params.deposit= simple.getForm().findField('deposit').getValue();
                                     params.price_per_area= simple.getForm().findField('price_per_area').getValue();
                                     params.price_list= simple.getForm().findField('price_list').getValue();
                                     params.broker_arrangement= simple.getForm().findField('broker_arrangement').getValue();
                                     params.builder_name= simple.getForm().findField('builder_name').getValue();
                                     params.msg= simple.getForm().findField('message').getValue();
                                    
                                    Ext.Ajax.request({
                                        url: 'saveData/',
                                        params: params,
                                        success: function (response) {
                                            Ext.MessageBox.alert('', "Saved Successfully");
                                            
                                    
                                            },
                                        failure: function(form, action) {
                                                                    Ext.Msg.alert('Failed Saved', action.result.msg);
                                                                }                                                                                                                   
                                    });
                                 }
                
            }
        },
        {
            text: 'Delete',
            iconCls: 'icon-delete',
            handler: function() {
                    if (simple.getForm().isValid())
                                {
                                    var params = new Object();
                                    
                                     params.id= simple.getForm().findField('id').getValue();
                                     params.msg= simple.getForm().findField('message').getValue();
                                    
                                    Ext.Ajax.request({
                                        url: 'deleteData/',
                                        params: params,
                                        success: function (response) {
                                             Ext.MessageBox.alert('', "Deleted Successfully");
                                            // RiskWindow.hide();
                                            // AnalysisStatusWindow.show();
                                            
                                    
                                            },
                                        failure: function(form, action) {
                                                                    Ext.Msg.alert('Failed Delete', action.result.msg);
                                                                }                                                                                                                   
                                    });
                                 }
                
            }
        },
        {
            text: 'Add',
            iconCls: 'icon-save',
            handler: function() {
                    if (simple.getForm().isValid())
                                {
                                    var params = new Object();
                                     params.address_detail= simple.getForm().findField('address_detail').getValue();
                                     // params.id= simple.getForm().findField('id').getValue();
                                     params.flat_type= simple.getForm().findField('flat_type').getValue();
                                     params.lease_type= simple.getForm().findField('lease_type').getValue();
                                     params.avl_req= simple.getForm().findField('avl_req').getValue();
                                     params.area= simple.getForm().findField('area').getValue();
                                     params.price= simple.getForm().findField('price').getValue();
                                     params.person_name= simple.getForm().findField('person_name').getValue();
                                     params.person_mobile= simple.getForm().findField('person_mobile').getValue();
                                     params.other= simple.getForm().findField('other').getValue();
                                     params.other_mobiles= simple.getForm().findField('other_mobiles').getValue();
                                     params.project_name= simple.getForm().findField('project_name').getValue();
                                     params.project_qoute= simple.getForm().findField('project_qoute').getValue();
                                     params.project_detail= simple.getForm().findField('project_detail').getValue();
                                     params.package= simple.getForm().findField('package').getValue();
                                     params.deposit= simple.getForm().findField('deposit').getValue();
                                     params.price_per_area= simple.getForm().findField('price_per_area').getValue();
                                     params.price_list= simple.getForm().findField('price_list').getValue();
                                     params.broker_arrangement= simple.getForm().findField('broker_arrangement').getValue();
                                     params.builder_name= simple.getForm().findField('builder_name').getValue();
                                     params.msg= simple.getForm().findField('message').getValue();
                                    
                                    Ext.Ajax.request({
                                        url: 'addData/',
                                        params: params,
                                        success: function (response) {
                                             Ext.MessageBox.alert('', "Saved Successfully");
                                            // RiskWindow.hide();
                                            // AnalysisStatusWindow.show();
                                            
                                    
                                            },
                                        failure: function(form, action) {
                                                                    Ext.Msg.alert('Failed Saved', action.result.msg);
                                                                }                                                                                                                   
                                    });
                                 }
                
            }
        }]
    });






var government = new Ext.FormPanel({
    id:'government',
    labelWidth: 75, // label settings here cascade unless overridden
   // url:'save-form.php',
    frame:true,
    title: 'Government Form',
    bodyStyle:'padding:5px 5px 0',
    width: 350,
    height:1200,
    defaults: {width: 230},
    defaultType: 'textfield',
    autoScroll: true,
    items: [{
            fieldLabel: 'Id',
            name: 'id',
            allowBlank:true,
            readOnly: true,
        },{
            fieldLabel: 'Year',
            name: 'year',
            allowBlank:true
        },{
            fieldLabel: 'District',
            name: 'district'
        },{
            fieldLabel: 'Village',
            name: 'village'
        }, 
        {
            fieldLabel: 'CTS No',
            name: 'cts_no',
            allowBlank:true
        },
        {
            fieldLabel: 'Doc No',
            name: 'doc_no'
        },
        {
            fieldLabel: 'Doc Name',
            name: 'doc_name'
        }, 
        {
            fieldLabel: 'Registration Date',
            name: 'registration_date',
            allowBlank:true
        },
        {
            fieldLabel: 'Perchaser Name',
            name: 'perchaser_name'
        },  
        {
            fieldLabel: 'Seller Name',
            name: 'seller_name',
            allowBlank:true
        },
        {
            fieldLabel: 'SRO Code',
            name: 'sro_code'
        }, 
        {
            fieldLabel: 'SRO Name',
            name: 'sro_name'
        }, 
        {
            fieldLabel: 'Status',
            name: 'status',
            allowBlank:true
        },
        {
            fieldLabel: 'Returns',
            name: 'returns'
        },
        {
            fieldLabel: 'Market Rate',
            name: 'market_rate'
        }, 
        {
            fieldLabel: 'Area',
            name: 'area'
        }, 
        {
            fieldLabel: 'Doc Creation Date',
            name: 'doc_creation_date'
        }, 
        {
            fieldLabel: 'Sr No Sec Page',
            name: 'sr_no_sec_page'
        },
        {
            fieldLabel: 'Stamp Duty',
            name: 'stamp_duty_market_rate'
            
        },
        {
            fieldLabel: 'Doc Registration Date',
            name: 'doc_registration_date'
        },
        {
            fieldLabel: 'Reg Fee',
            name: 'reg_fee_market_rate'
            
        },  
        {
            fieldLabel: 'Property Desc',
            name: 'property_desc',
            height: 200,
            width: 300,
            autoScroll:true,
             xtype:'textarea',
        },
    ],

    buttons: [{
        text: 'Save',
        iconCls: 'icon-save',
        handler: function() {
                if (government.getForm().isValid())
                            {
                                var params = new Object();
                                 params.year= government.getForm().findField('year').getValue();
                                 params.id= government.getForm().findField('id').getValue();
                                 params.district= government.getForm().findField('district').getValue();
                                 params.village= government.getForm().findField('village').getValue();
                                 params.cts_no= government.getForm().findField('cts_no').getValue();
                                 params.doc_no= government.getForm().findField('doc_no').getValue();
                                 params.doc_name= government.getForm().findField('doc_name').getValue();
                                 params.registration_date= government.getForm().findField('registration_date').getValue();
                                 params.perchaser_name= government.getForm().findField('perchaser_name').getValue();
                                 params.seller_name= government.getForm().findField('seller_name').getValue();
                                 params.property_desc= government.getForm().findField('property_desc').getValue();
                                 params.sro_code= government.getForm().findField('sro_code').getValue();
                                 params.sro_name= government.getForm().findField('sro_name').getValue();
                                 params.status= government.getForm().findField('status').getValue();
                                 params.returns= government.getForm().findField('returns').getValue();
                                 params.market_rate= government.getForm().findField('market_rate').getValue();
                                 params.area= government.getForm().findField('area').getValue();
                                 params.doc_creation_date= government.getForm().findField('doc_creation_date').getValue();
                                 params.sr_no_sec_page= government.getForm().findField('sr_no_sec_page').getValue();
                                 params.stamp_duty_market_rate= government.getForm().findField('stamp_duty_market_rate').getValue();
                                 params.doc_registration_date= government.getForm().findField('doc_registration_date').getValue();
                                 params.reg_fee_market_rate= government.getForm().findField('reg_fee_market_rate').getValue();
                                
                                Ext.Ajax.request({
                                    url: 'savegovData/',
                                    params: params,
                                        success: function (response) {
                                            Ext.MessageBox.alert('', "Saved Successfully");
                                            // RiskWindow.hide();
                                            // AnalysisStatusWindow.show();
                                            
                                    
                                            },
                                    failure: function(form, action) {
                                                                Ext.Msg.alert('Failed Saved', action.result.msg);
                                                            }                                                                                                                   
                                });
                             }
            
        }
    },
    {
        text: 'Delete',
        iconCls: 'icon-delete',
        handler: function() {
                if (government.getForm().isValid())
                            {
                                var params = new Object();
                                
                                 params.id= government.getForm().findField('id').getValue();
                                 params.msg= government.getForm().findField('message').getValue();
                                
                                Ext.Ajax.request({
                                    url: 'deletegovData/',
                                    params: params,
                                    success: function (response) {
                                         Ext.MessageBox.alert('', "Deleted Successfully");
                                        // RiskWindow.hide();
                                        // AnalysisStatusWindow.show();
                                        
                                
                                        },
                                    failure: function(form, action) {
                                                                Ext.Msg.alert('Failed Delete', action.result.msg);
                                                            }                                                                                                                   
                                });
                             }
            
        }
    },
    {
        text: 'Add',
        iconCls: 'icon-save',
        handler: function() {
                if (government.getForm().isValid())
                            {
                                 var params = new Object();
                                 params.year= government.getForm().findField('year').getValue();
                                 params.id= government.getForm().findField('id').getValue();
                                 params.district= government.getForm().findField('district').getValue();
                                 params.village= government.getForm().findField('village').getValue();
                                 params.cts_no= government.getForm().findField('cts_no').getValue();
                                 params.doc_no= government.getForm().findField('doc_no').getValue();
                                 params.doc_name= government.getForm().findField('doc_name').getValue();
                                 params.registration_date= government.getForm().findField('registration_date').getValue();
                                 params.perchaser_name= government.getForm().findField('perchaser_name').getValue();
                                 params.seller_name= government.getForm().findField('seller_name').getValue();
                                 params.property_desc= government.getForm().findField('property_desc').getValue();
                                 params.sro_code= government.getForm().findField('sro_code').getValue();
                                 params.sro_name= government.getForm().findField('sro_name').getValue();
                                 params.status= government.getForm().findField('status').getValue();
                                 params.returns= government.getForm().findField('returns').getValue();
                                 params.market_rate= government.getForm().findField('market_rate').getValue();
                                 params.area= government.getForm().findField('area').getValue();
                                 params.doc_creation_date= government.getForm().findField('doc_creation_date').getValue();
                                 params.sr_no_sec_page= government.getForm().findField('sr_no_sec_page').getValue();
                                 params.stamp_duty_market_rate= government.getForm().findField('stamp_duty_market_rate').getValue();
                                 params.doc_registration_date= government.getForm().findField('doc_registration_date').getValue();
                                 params.reg_fee_market_rate= government.getForm().findField('reg_fee_market_rate').getValue();
                                
                                Ext.Ajax.request({
                                    url: 'addgovData/',
                                    params: params,
                                    success: function (response) {
                                         Ext.MessageBox.alert('', "Saved Successfully");
                                        // RiskWindow.hide();
                                        // AnalysisStatusWindow.show();
                                        
                                
                                        },
                                    failure: function(form, action) {
                                                                Ext.Msg.alert('Failed Saved', action.result.msg);
                                                            }                                                                                                                   
                                });
                             }
            
        }
    }]
});
