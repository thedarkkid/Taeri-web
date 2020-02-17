import routes from "../routes";
import VueRouter from "vue-router";
import { mockRouterComponents } from '@vue/test-utils';

export default {
    mock(){
        // stub the component the route points to so we don't render real components
        const clearedRoutes = mockRouterComponents(routes);
        return new VueRouter({
            mode: 'history',
            routes: clearedRoutes
        })
    }
}