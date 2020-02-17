import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme:{
        themes:{
            light:{
                primary: '#484d6d',
                secondary: '#efe9f4',
                accent: '#3e2a35',
                info: '#08b2e3',
                warning: '#e26d5a',
                success: '#57a773',
                error: '#ee6352',
            },
            dark:{
                primary: '#484d6d',
                secondary: '#efe9f4',
                accent: '#3e2a35',
                info: '#08b2e3',
                warning: '#e26d5a',
                success: '#57a773',
                error: '#ee6352',
            },
            blue:{
                primary: '#1976D2',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
            },
            purple:{
                primary: '#673ab7',
                secondary: '#3f51b5',
                accent: '#9c27b0',
                error: '#e91e63',
                warning: '#795548',
                info: '#ffeb3b',
                success: '#ffc107'
            }
        }
    }
});
