Ext.define('MOBservation.controller.navigation.CtNavigationMOBservation', {
    extend: 'MOBservation.controller.navigation.common.CtNavigation',
    
    config: {
        refs: {
            navigationView : 'xNavigationMOBservation',
            vwMOBservationMenu : 'xVwMOBservationMenu',
            vwMOBservationCustomersList : 'xVwMOBservationCustomersList',
            vwMOBservationPicturesList     : 'xVwMOBservationPicturesList',
            vwMOBservationPicture : 'xVwMOBservationPicture'
        },
        control: {
            navigationView : {
                'show' : 'onShowNavigationMOBservation'
            },
            vwMOBservationMenu : {
                'DISCONNECT' : 'onUserDisconnect',
                'CUSTOMERS'   : 'onSelectCustomers',
                'OBSERVATIONS' : 'onSelectObservations',
                'LIST_PICTURES' : 'onListPictures'
            },
            vwMOBservationCustomersList : {
                'CUSTOMER_SELECTED' : 'onCustomerSelected'
            },
            vwMOBservationPicturesList : {
                'PICTURE_SELECTED' : 'onPictureSelected'
            },
            xVwMOBservationPicture : {
                'tap' : 'onTapMOBservationPicture'
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
    onPictureSelected : function (viewMOBservationMenu, pictureModel) {
       var pictureFullscreen = Ext.create('xVwMOBservationPicture', {
            src : pictureModel.getData().picture
       });
       pictureFullscreen.show();
    },
    onTapMOBservationPicture : function (){
        this.getVwMOBservationPicture().destroy();
    }
});
