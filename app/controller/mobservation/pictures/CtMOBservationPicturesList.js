Ext.define('MOBservation.controller.mobservation.pictures.CtMOBservationPicturesList', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            vwMOBservationPictures     : 'xVwMOBservationPicturesList',
            vwMOBservationPicturesList : 'xVwMOBservationPicturesList list'
        },
        control: {
            vwMOBservationPicturesList : {
                'itemtap' : 'onItemTapPicturesList',
                'itemtaphold' : 'onItemTapHoldPicturesList'
            }
        }
    },
    onItemTapPicturesList : function (list, index, domItem, item, eOpts){
        if (MOBservation.app.aPopUpIsShown()){
            return;
        }
        this.getVwMOBservationPictures().fireEvent('PICTURE_SELECTED', this.getVwMOBservationPictures(), item);
    },
    onItemTapHoldPicturesList : function (list, index, domItem, item, eOpts) {
        Ext.Msg.confirm(MOBservation_strings.app_name, MOBservation_strings.mobservation_pictures_ask_delete_picture, this.onMessageHoldPicture, this);
    },
    onMessageHoldPicture : function (buttonId, value, opt){
        if (buttonId == "yes") {
            var selectedPicutre = (this.getVwMOBservationPicturesList().getSelection() ? this.getVwMOBservationPicturesList().getSelection()[0] : null);
            if (selectedPicutre) {
                Ext.getStore('Pictures').remove(selectedPicutre);
                this.getVwMOBservationPicturesList().refresh();
            }
        }
    }
});
