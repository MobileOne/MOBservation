Ext.define('MOBservation.controller.mobservation.sounds.CtMOBservationSoundsList', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            vwMOBservationSounds     : 'xVwMOBservationSoundsList',
            vwMOBservationSoundsList : 'xVwMOBservationSoundsList list'
        },
        control: {
            vwMOBservationSoundsList : {
                'itemtap' : 'onItemTapSoundsList',
                'itemtaphold' : 'onItemTapHoldSoundsList'
            }
        }
    },
    onItemTapSoundsList : function (list, index, domItem, item, eOpts){
        this.getVwMOBservationSounds().fireEvent('SOUND_SELECTED', this.getVwMOBservationSounds(), item);
    },
    onItemTapHoldSoundsList : function (list, index, domItem, item, eOpts) {
        Ext.Msg.confirm(MOBservation_strings.app_name, MOBservation_strings.mobservation_sounds_ask_delete_sound, this.onMessageHoldSound, this);
    },
    onMessageHoldSound : function (buttonId, value, opt){
        if (buttonId == "yes") {
            var selectedSound = (this.getVwMOBservationSoundsList().getSelection() ? this.getVwMOBservationSoundsList().getSelection()[0] : null);
            if (selectedSound) {
                Ext.getStore('Sounds').remove(selectedSound);
                this.getVwMOBservationSoundsList().refresh();
            }
        }
    }
});
