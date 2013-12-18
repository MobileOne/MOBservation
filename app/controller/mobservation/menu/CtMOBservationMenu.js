Ext.define('MOBservation.controller.mobservation.menu.CtMOBservationMenu', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            vwMOBservationMenu : 'xVwMOBservationMenu',
            btnDisconnect : 'xVwMOBservationMenu button[name=disconnect]',
            btnCustomer      : 'xVwMOBservationMenu button[name=customer]',
            btnObservations  : 'xVwMOBservationMenu button[name=observations]',
            btnTakePicture   : 'xVwMOBservationMenu button[name=picture]',
            btnListPictures  : 'xVwMOBservationMenu button[name=list_pictures]',
            btnListSounds    : 'xVwMOBservationMenu button[name=sound]'
        },
        control: {
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
            btnListSounds : {
                'tap' : 'onTapBtnListSounds'
            }
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
    onTapBtnTakePicture : function (button) {
        if (Ext.device){
            Ext.device.Camera.capture({
                success: function(image) {
                    var picturesStore = Ext.getStore('Pictures');

                    picturesStore.add({
                        picture : image
                    });

                    picturesStore.sync();
                },
                failure : function(){
                },
                quality: 75,
                width: 200,
                height: 200,
                destination: 'data',
                source: 'camera'
            }, this);
        }
    },
    onTapBtnListSounds : function (button) {
        if (Ext.device){
            alert('ok');
            Ext.device.Capture.captureAudio({
                maximumDuration: 15, // limit to 10 seconds per recording
                success: function(files) {
                    for (var i = 0; i < files.length; i++) {
                        alert('Captured audio path: ', files[i].fullPath);
                    };
                },
                failure: function() {
                    alert('Something went wrong!');
                }
            });
        }
    }
});
