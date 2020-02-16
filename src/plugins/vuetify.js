import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme:{
        themes:{
            custom:{
                primary: '#484d6d',
                secondary: '#efe9f4',
                accent: '#08b2e3',
                anti: '#57a773',
                error: '#ee6352'
            }
        }
    }
});
