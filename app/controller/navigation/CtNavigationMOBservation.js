Ext.define('MOBservation.controller.navigation.CtNavigationMOBservation', {
    extend: 'MOBservation.controller.navigation.common.CtNavigation',
    
    config: {
        refs: {
            navigationView : 'xNavigationMOBservation',
            vwMOBservationMenu : 'xVwMOBservationMenu',
            vwMOBservationCustomersList : 'xVwMOBservationCustomersList',
            vwMOBservationPicturesList     : 'xVwMOBservationPicturesList',
            vwMOBservationPicture : 'xVwMOBservationPicture',
            vwMOBservationGeolocation : 'xVwMOBservationGeolocation',
            vwMOBservationSoundsList : 'xVwMOBservationSoundsList',
            vwMOBservationSound : 'VwMOBservationSound'
        },
        control: {
            navigationView : {
                'show' : 'onShowNavigationMOBservation'
            },
            vwMOBservationMenu : {
                'DISCONNECT' : 'onUserDisconnect',
                'CUSTOMERS'   : 'onSelectCustomers',
                'OBSERVATIONS' : 'onSelectObservations',
                'LIST_PICTURES' : 'onListPictures',
                'LIST_SOUNDS' : 'onListSounds',
                'FOLDER'      : 'onFolder',
                'GEOLOCATION' : 'onGeolocation',
                'NO_LATITUDE_LONGITUDE' : 'onErrorNoLatitudeLongitude',
                'OBSERVATION_SENT' : 'onObservationSent',
                'OBSERVATION_IS_NOT_SENT' : 'onObservationIsNotSent'
            },
            vwMOBservationCustomersList : {
                'CUSTOMER_SELECTED' : 'onCustomerSelected'
            },
            vwMOBservationPicturesList : {
                'PICTURE_SELECTED' : 'onPictureSelected'
            },
            xVwMOBservationPicture : {
                'tap' : 'onTapMOBservationPicture'
            },
            vwMOBservationGeolocation : {
                'LOCATION_SAVED' : 'onLocationSaved'
            },
            vwMOBservationSoundsList : {
                'SOUND_SELECTED' : 'onSoundSelected'
            }
        }
    },
    onShowNavigationMOBservation : function (viewNavigationMOBservation) {
        this.showView('xVwMOBservationMenu');
    },
    onUserDisconnect : function (viewMOBservationMenu) {
        this.getNavigationView().fireEvent('USER_DISCONNECTED', this.getNavigationView());
    },
    onSelectCustomers : function (viewMOBservationMenu) {
        this.showView('xVwMOBservationCustomersList');
    },
    onCustomerSelected : function (vwMOBservationCustomersList) {
        this.getNavigationView().pop();
        this.getVwMOBservationMenu().setCurrentCustomer(MOBservation.app.context.getCurrentCustomer());
    },
    onSelectObservations : function (viewMOBservationMenu) {
        this.showView('xVwMOBservationObservationsList');
    },
    onListPictures : function (viewMOBservationMenu) {
        this.showView('xVwMOBservationPicturesList');
    },
    onListSounds : function (viewMOBservationMenu) {
        this.showView('xVwMOBservationSoundsList');
    },
    onFolder : function (viewMOBservationMenu) {
        this.showView('xVwMOBservationMenuFolder');
    },
    onGeolocation : function (viewMOBservationMenu) {
        this.showView('xVwMOBservationGeolocation');
    },
    onPictureSelected : function (viewMOBservationMenu, pictureModel) {
        if (!this.getVwMOBservationPicture()){
            console.log('picture = ' + pictureModel.getData().picture);
           var pictureFullscreen = Ext.create('xVwMOBservationPicture');
           pictureFullscreen.setSrc(pictureModel.getData().picture);
           this.getNavigationView().push(pictureFullscreen);
        }
    },
    onSoundSelected : function (vwMOBservationSoundsList, soundModel) {
        if (!this.getVwMOBservationSound()){
            var sound = Ext.create('VwMOBservationSound', {
                url : soundModel.getData().sound
            });
            this.getNavigationView().push(sound);
            sound.play();
        }
    },
    onTapMOBservationPicture : function () {
        this.getNavigationView().pop();
    },
    onLocationSaved : function (vwMOBservationGeolocation) {
        this.getNavigationView().pop(1);
    },
    onErrorNoLatitudeLongitude : function (viewMOBservationMenu) {
        this.showView('xVwMOBservationGeolocation');
    },
    onObservationSent : function () {
        this.resetMOBservation();
    },
    onObservationIsNotSent : function () {
        this.resetMOBservation();
    },
    resetMOBservation : function () {
        this.getNavigationView().pop();
        MOBservation.app.context.reset();  
    }
});
