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
                        name : MOBservation_strings.mobservation_picture + ' ' + new Date().toLocaleString(),
                        picture : 'data:image/jpeg;base64,' + image
                    });
                    Ext.Msg.alert(MOBservation_strings.app_name, MOBservation_strings.mobservation_pictures_take_picture_successed);
                },
                failure : function(){
                },
                quality: 100,
                width: 350,
                height: 700,
                destination: 'data',
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
                            name : MOBservation_strings.mobservation_sound + ' ' + new Date().toLocaleString(),
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
        if (buttonId == 'ok') {
            this.createObservation(value);
        }
    },
    createObservation : function (title) {
        var idCustomer = MOBservation.app.context.getCurrentCustomer(),
            idUser = MOBservation.app.context.getCurrentUser(),
            latitude = MOBservation.app.context.getLatitude(),
            longitude = MOBservation.app.context.getLongitude();

        MOBservation.app.showLoadingMask();
        Ext.Ajax.request({
            url: Configuration.urlBase + Configuration.createObservation,
            jsonData: {
                userId: idUser,
                customerId: idCustomer,
                title : title,
                description : "",
                positionX : latitude,
                positionY : longitude
            },
            success : Ext.bind(this.createObservationSuccess, this),
            failure : Ext.bind(this.createObservationFailure, this)
        });
    },
    createObservationSuccess : function (response) {
        MOBservation.app.hideLoadingMask();
        var newObservation = Ext.JSON.decode(response.responseText);
        MOBservation.app.context.setCurrentObservation(newObservation.id);
        this.sendObservationPictures(newObservation.id);
    },
    createObservationFailure : function (error) {
        MOBservation.app.hideLoadingMask();
        Ext.Msg.alert(MOBservation_strings.app_name, MOBservation_strings.mobservation_create_observation_error);
    },
    sendObservationPictures : function (observationId) {
        var storePictures = Ext.getStore('Pictures').getData().items,
            based64Pictures = [],
            sounds = Ext.getStore('Sounds').getData(),
            reportId = observationId;

        MOBservation.app.showLoadingMask();

        for (var i=0;i<storePictures.length;i++){
            based64Pictures.push({
                name : storePictures[i].getData().name,
                data : storePictures[i].getData().picture
            });
        }
        Ext.Ajax.request({
            url: Configuration.urlBase + Configuration.sendManyPictures,
            jsonData: {
                reportId : reportId,
                pictures : based64Pictures
            },
            success : Ext.bind(this.sendObservationPicturesSuccess, this),
            failure : Ext.bind(this.sendObservationPicturesFailure, this)
        });
    },
    sendObservationPicturesSuccess : function (response) {
        MOBservation.app.hideLoadingMask();
    },
    sendObservationPicturesFailure : function (error) {
        MOBservation.app.hideLoadingMask();
        Ext.Msg.alert(MOBservation_strings.app_name, MOBservation_strings.mobservation_send_error_pictures);
    },
    sendObservationSounds : function () {
        var sounds = Ext.getStore('Sounds').getData().items,
            observationId = MOBservation.app.context.getCurrentObservation();

        MOBservation.app.context.setSounds(sounds.length);

        MOBservation.app.showLoadingMask();

        for (var i=0;i<sounds.length;i++){
            Ext.Ajax.request({
                url: Configuration.urlBase + Configuration.sendSounds_pre_id + observationId + Configuration.sendSounds_post_id,
                success : Ext.bind(this.sendObservationSoundsSuccess, this),
                failure : Ext.bind(this.sendObservationSoundsFailure, this)
            });

        }
    },
    sendObservationSoundsSuccess : function () {
        MOBservation.app.context.setUploadedSounds(MOBservation.app.context.getUploadedSounds() + 1);
        var sounds = MOBservation.app.context.getSounds(),
            uploadedSounds = MOBservation.app.context.getUploadedSounds(),
            errorDuringUploadSounds = MOBservation.app.context.getErrorDuringUploadSounds();
        if (sounds == uploadedSounds && !errorDuringUploadSounds) {
            alert('cest super');
            this.resetMOBservation();
        }
    },
    sendObservationSoundsFailure : function () {
        console.log('sound is not sent');
        MOBservation.app.context.setErrorDuringUploadSounds();
    },
    resetMOBservation : function () {
        this.getVwMOBservationMenu().setCUrrentCustomer(null);
        this.getVwMOBservationMenu().fireEvent('OBSERVATION_SENT', this.getVwMOBservationMenu()); 
    }
});
