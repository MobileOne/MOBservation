Ext.define('MOBservation.controller.mobservation.pictures.CtMOBservationPicturesList', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            vwMOBservationPictures     : 'xVwMOBservationPicturesList',
            vwMOBservationPicturesList : 'xVwMOBservationPicturesList list'
        },
        control: {
            vwMOBservationPicturesList : {
                'itemtap' : 'onItemTapPicturesList'
            }
        }
    },
    onItemTapPicturesList : function(list, index, domItem, item, eOpts){
        this.getVwMOBservationPictures().fireEvent('PICTURE_SELECTED', this.getVwMOBservationPictures(), item);
    }
});
