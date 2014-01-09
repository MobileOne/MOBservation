Ext.define('MOBservation.controller.mobservation.menu.CtMOBservationMenu', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            vwMOBservationMenu : 'xVwMOBservationMenu',
            vwMOBservationMenuFolder : 'xVwMOBservationMenuFolder',
            btnDisconnect : 'xVwMOBservationMenu button[name=disconnect]',
            btnCustomer      : 'xVwMOBservationMenuFolder button[name=customer]',
            btnObservations  : 'xVwMOBservationMenuFolder button[name=observations]',
            btnTakePicture   : 'xVwMOBservationMenu button[name=picture]',
            btnListPictures  : 'xVwMOBservationMenuFolder button[name=list_pictures]',
            btnTakeSounds    : 'xVwMOBservationMenu button[name=sound]',
            btnListSounds    : 'xVwMOBservationMenuFolder button[name=list_sounds]',
            btnFolder        : 'xVwMOBservationMenu button[name=folder]',
            btnGeolocation   : 'xVwMOBservationMenuFolder button[name=geolocation]',
            btnSendObservation : 'xVwMOBservationMenuFolder [name=send]'
        },
        control: {
            vwMOBservationMenu : {
                'initialize' : 'onInitializeMOBservationMenu',
                'updateCurrentCustomer' : 'onUpdateCurrentCustomerMOBservationMenu'
            },
            vwMOBservationMenuFolder : {
                'initialize' : 'onInitializeMOBservationMenuFolder'
            },
            btnDisconnect : {
                'tap' : 'onTapBtnDisconnect'
            },
            btnCustomer : {
                'tap' : 'onTapBtnCustomer'
            },
            btnObservations: {
                'tap' : 'onTapBtnObservations'
            },
            btnTakePicture : {
                'tap' : 'onTapBtnTakePicture'
            },
            btnListPictures : {
                'tap' : 'onTapBtnListPictures'
            },
            btnTakeSounds : {
                'tap' : 'onTapBtnTakeSounds'
            },
            btnListSounds : {
                'tap' : 'onTapBtnListSounds'
            },
            btnFolder : {
                'tap' : 'onTapBtnFolder'
            },
            btnGeolocation : {
                'tap' : 'onTapBtnGeolocation'
            },
            btnSendObservation : {
                'tap' : 'onTapBtnSendObservation'
            }
        }
    },
    onInitializeMOBservationMenu : function(view){
        this.onUpdateCurrentCustomerMOBservationMenu(view, view.getCurrentCustomer());
    },
    onUpdateCurrentCustomerMOBservationMenu : function (view, newValue){
        var customerData = Ext.getStore('Customers').getCustomer(newValue),
            customerInformation = MOBservation_strings.mobservation_no_selected_customer;
        if (customerData){
            customerInformation = MOBservation_strings.mobservation_customer_selection + customerData.first_name + " " + customerData.last_name;
            this.getVwMOBservationMenuFolder().setDisabledOldObservation(false);
            this.getVwMOBservationMenuFolder().setDisabledSendObservation(false);
        }
        this.getVwMOBservationMenu().down('label[name=customerInformation]').setHtml(customerInformation);
    },
    onInitializeMOBservationMenuFolder : function (view) {
        if (this.getVwMOBservationMenu().getCurrentCustomer()){
            view.setDisabledOldObservation(false);
            view.setDisabledSendObservation(false);
        }
    },
    onTapBtnDisconnect : function (button) {
        this.getVwMOBservationMenu().fireEvent('DISCONNECT', this.getVwMOBservationMenu());
    },
    onTapBtnCustomer : function (button) {
        this.getVwMOBservationMenu().fireEvent('CUSTOMERS', this.getVwMOBservationMenu());
    },
    onTapBtnObservations : function (button) {
        this.getVwMOBservationMenu().fireEvent('OBSERVATIONS', this.getVwMOBservationMenu());
    },
    onTapBtnListPictures : function (button) {
        this.getVwMOBservationMenu().fireEvent('LIST_PICTURES', this.getVwMOBservationMenu());
    },
    onTapBtnFolder : function(){
        this.getVwMOBservationMenu().fireEvent('FOLDER', this.getVwMOBservationMenu());
    },
    onTapBtnGeolocation : function (button) {
        this.getVwMOBservationMenu().fireEvent('GEOLOCATION', this.getVwMOBservationMenu());
    },
    onTapBtnTakePicture : function (button) {
        if (Ext.device){
            Ext.device.Camera.capture({
                success: function(image) {
                    var picturesStore = Ext.getStore('Pictures');
                    picturesStore.add({
                        picture : image
                    });
                    picturesStore.sync();
                    Ext.Msg.alert(MOBservation_strings.app_name, MOBservation_strings.mobservation_pictures_take_picture_successed);
                },
                failure : function(){
                },
                quality: 75,
                width: 200,
                height: 200,
                destination: 'file',
                source: 'camera'
            }, this);
        }
    },
    onTapBtnListSounds : function (button) {
        this.getVwMOBservationMenu().fireEvent('LIST_SOUNDS', this.getVwMOBservationMenu());
    },
    onTapBtnTakeSounds : function (button) {
        if (Ext.device && Ext.device.Capture){
            Ext.device.Capture.captureVideo({
                limit: 1,
                maximumDuration: 30, // limit to 30 seconds per recording
                success: function(files) {
                    var soundsStore = Ext.getStore('Sounds');
                    for (var i = 0; i < files.length; i++) {
                        soundsStore.add({
                            sound : files[i].fullPath
                        });
                    }
                    Ext.Msg.alert(MOBservation_strings.app_name, MOBservation_strings.mobservation_sounds_take_sound_successed);
                },
                failure: function() {
                    console.log('Something went wrong!');
                }
            });
        }
    },
    onTapBtnSendObservation : function () {
        if (MOBservation.app.context.getLatitude() && MOBservation.app.context.getLongitude()){
            Ext.Msg.prompt(MOBservation_strings.app_name, MOBservation_strings.mobservation_send_ask_title_observation, Ext.bind(this.onPromptSendObservation, this));
        } else {
            Ext.Msg.alert(MOBservation_strings.app_name, MOBservation_strings.mobservation_send_error_no_latitude_longitude, Ext.bind(this.onErrorNoLatitudeLongitude, this));
        }
    },
    onErrorNoLatitudeLongitude : function () {
        this.getVwMOBservationMenu().fireEvent('NO_LATITUDE_LONGITUDE', this.getVwMOBservationMenu());
    },
    onPromptSendObservation : function (buttonId, value) {
        if (buttonId == 'yes') {
            this.sendObservation(value);
        }
    },
    sendObservation : function (title) {
        var idCustomer = MOBservation.app.context.getCurrentCustomer(),
            idUser = MOBservation.app.context.getCurrentUser(),
            latitude = MOBservation.app.context.getLatitude(),
            longitude = MOBservation.app.context.getLongitude(),
            pictures = Ext.getStore('Pictures').getData(),
            sounds = Ext.getStore('Sounds').getData(),
            title = title;
        // TO-DO
    },
    sendObservationSuccess : function () {
        // TO-DO
    },
    sendObservationFailure : function () {
        // TO-DO
    }
});
