import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import mockRouter from "@/router/helpers/mockRouter";
import App from "@/App";

describe('Header', () => {
    it('should go to the about page', async () => {
        const localVue = createLocalVue();

        localVue.use(VueRouter);
        const router = mockRouter.mock();

        const wrapper = shallowMount(App, {
            localVue,
            router
        });

        wrapper.find('[data-test-id = "nav-to-about"]').trigger('click');
        // expect(wrapper).toHaveBeenCalledWith('/the-desired-path');
        expect(wrapper.vm.$route.name).toBe("about");
    });
});