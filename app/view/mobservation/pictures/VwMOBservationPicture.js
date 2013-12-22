Ext.define('MOBservation.view.mobservation.pictures.VwMOBservationPicture', {

    extend: 'Ext.Img',

    fullscreen: true,

    alternateClassName: 'xVwMOBservationPicture',

    xtype: 'xVwMOBservationPicture',

   	requires : [
   		'Ext.Img'
   	],

   	config : {
   		style : 'background-size: auto;'
   	},

   	onError : function (e) {
   		this.fireEvent('error', this, e);
   	}
});