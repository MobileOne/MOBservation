/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.require('Ext.device.Capture');
Ext.require('Ext.device.Camera');

Ext.application({
    name: 'MOBservation',

    requires: [
        'Ext.MessageBox',

        // Context
        'MOBservation.context.Context',
        'MOBservation.override.Override'
    ],

    views: [
        'navigation.common.VwNavigation',
        'navigation.VwNavigationLogin',
        'navigation.VwNavigationMOBservation'
    ],

    controllers : [
        'CtMain',
        'navigation.CtNavigationLogin',
        'navigation.CtNavigationMOBservation',
        'login.CtLogin',
        'mobservation.menu.CtMOBservationMenu',
        'mobservation.customers.CtMOBservationCustomersList',
        'mobservation.observations.CtMOBservationObservationsList',
        'mobservation.pictures.CtMOBservationPicturesList',
        'mobservation.geolocation.CtMOBservationGeolocation',
        'mobservation.sounds.CtMOBservationSoundsList'
    ],

    models : [
        'Customer',
        'Observation',
        'Picture',
        'Sound'
    ],

    stores : [
        'Customers',
        'Observations',
        'Pictures',
        'Sounds'
    ],

    forms : [
    	'login.VwLogin'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        this.context = Ext.create('MOBservation.context.Context');

        MOBservation.override.Override.overrideStrings();

        document.addEventListener("backbutton", MOBservation.app.onBackPressed, false);

        document.onkeypress = function(evt){
            if(evt.keyCode == 32){
                MOBservation.app.onBackPressed();          
            }
        }
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    },
    onBackPressed : function() {
        if (MOBservation.app.aPopUpIsShown()){
                MOBservation.app.hidePopUp();
        } else if (!Ext.Viewport.getMasked() || (Ext.Viewport.getMasked() && Ext.Viewport.getMasked().isHidden())) {
            if (Ext.Viewport.getActiveItem().getInnerItems().length - 1){
                Ext.Viewport.getActiveItem().pop();
            } else {
                navigator.app.exitApp();
            }
        }
    },
    showLoadingMask : function () {
        Ext.Viewport.setMasked({    
            xtype   : 'loadmask',
            message : MOBservation_strings.loading
        });
    },
    hideLoadingMask : function () {
        Ext.Viewport.setMasked(false);
    },
    aPopUpIsShown : function () {
        return Ext.Msg.isPainted();
    },
    hidePopUp : function () {
        Ext.Msg.hide();
    }
});