/**
 * @class MOBservation.override.Override
 */
Ext.define('MOBservation.override.Override', {

  statics: {
        /**
         * @private
         * @static
         * override sencha Strings with strings contained in MOBservation_strings
         * 
         * @param none
         * @return {void}
         */
        overrideStrings: function() {
            // override sencha strings
            if (Ext.MessageBox){
                Ext.MessageBox.OK.text = MOBservation_strings.ok;
                Ext.MessageBox.CANCEL.text = MOBservation_strings.cancel;
                Ext.MessageBox.YES.text = MOBservation_strings.yes;
                Ext.MessageBox.NO.text = MOBservation_strings.no;
                Ext.MessageBox.YESNO[0].text = MOBservation_strings.no;
                Ext.MessageBox.YESNO[1].text = MOBservation_strings.yes;
            }
        }
    }
});