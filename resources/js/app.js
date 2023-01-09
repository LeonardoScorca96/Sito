import './bootstrap';
import '../css/app.css';
import { createApp, h } from 'vue'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createInertiaApp } from '@inertiajs/inertia-vue3'

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
      return  createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
});
