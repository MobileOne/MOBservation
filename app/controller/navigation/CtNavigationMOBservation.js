Ext.define('MOBservation.controller.navigation.CtNavigationMOBservation', {
    extend: 'MOBservation.controller.navigation.common.CtNavigation',
    
    config: {
        refs: {
            navigationView : 'xNavigationMOBservation',
            vwMOBservationMenu : 'xVwMOBservationMenu',
            vwMOBservationCustomersList : 'xVwMOBservationCustomersList',
            vwMOBservationPicturesList     : 'xVwMOBservationPicturesList',
            vwMOBservationPicture : 'xVwMOBservationPicture',
            vwMOBservationGeolocation : 'xVwMOBservationGeolocation'
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
                'NO_LATITUDE_LONGITUDE' : 'onErrorNoLatitudeLongitude'
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
           var pictureFullscreen = Ext.create('xVwMOBservationPicture', {
                src : pictureModel.getData().picture
           });
           this.getNavigationView().push(pictureFullscreen);
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
    }
});
