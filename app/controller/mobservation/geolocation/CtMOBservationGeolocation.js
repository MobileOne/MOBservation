Ext.define('MOBservation.controller.mobservation.geolocation.CtMOBservationGeolocation', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            vwMOBservationGeolocation : 'xVwMOBservationGeolocation',
            btnGeolocation : 'xVwMOBservationGeolocation button[name=geolocation]',
            btnSaveGeolocation : 'xVwMOBservationGeolocation button[name=save_geolocation]',
            latitudeField : 'xVwMOBservationGeolocation textfield[name=latitude]',
            longitudeField : 'xVwMOBservationGeolocation textfield[name=longitude]',
            addressField : 'xVwMOBservationGeolocation textareafield[name=address]',
            btnSaveLocation : 'xVwMOBservationGeolocation button[name=save_geolocation]'
        },
        control: {
            btnGeolocation : {
                'tap' : 'onTapBtnGeolocation'
            },
            btnSaveLocation : {
                'tap' : 'onTapBtnSaveLocation'
            }
        }
    },
    onTapBtnSaveLocation : function (button) {
        var latitude = this.getLatitudeField().getValue(),
            longitude = this.getLongitudeField().getValue();
        if (latitude && longitude){
            MOBservation.app.context.setLatitude(latitude);
            MOBservation.app.context.setLatitude(longitude);

            Ext.Msg.alert(MOBservation_strings.app_name, MOBservation_strings.mobservation_geolocation_success_save_latitude_longitude, Ext.bind(this.onSuccessSaveLocation, this));
        } else {
            Ext.Msg.alert(MOBservation_strings.app_name, MOBservation_strings.mobservation_geolocation_error_no_latitude_longitude);
        }
    },
    onSuccessSaveLocation : function (button) {
        this.getVwMOBservationGeolocation().fireEvent('LOCATION_SAVED', this.getVwMOBservationGeolocation());
    },
    onTapBtnGeolocation : function (button) {
        MOBservation.app.showLoadingMask();
        if (Ext.device && Ext.device.Geolocation) {
            Ext.device.Geolocation.getCurrentPosition({
                success: Ext.bind(this.getCurrentPosition, this),
                failure: function() {
                    console.log('something went wrong!');
                }
            }); 
        } else {
            if (navigator.geolocation)
                navigator.geolocation.getCurrentPosition(Ext.bind(this.getCurrentPosition, this));
        }
    },
    getCurrentPosition : function(position){
        this.getLatitudeField().setValue(position.coords.latitude);
        this.getLongitudeField().setValue(position.coords.longitude);
        var url = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&sensor=true";
        Ext.Ajax.request({
            url: url,
            timeout: 60000,
            success: Ext.bind(this.onGeocoderSucceed, this),
            failure: Ext.bind(this.onGeocoderFailed, this)
        });

        //this.getAddessField().setValue()
    },
    onGeocoderSucceed : function(html_response){
        MOBservation.app.hideLoadingMask();
        var response = JSON.parse(html_response.responseText),
            address = (response.results.length ? response.results[0].formatted_address : null);
        this.getAddressField().setValue(address);
    },
    onGeocoderFailed : function (error) {
        MOBservation.app.hideLoadingMask();
        console.log(error);
    }
});
