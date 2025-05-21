import { createRouter, createWebHistory } from 'vue-router';
import Writers from '../components/Writers.vue';
import Books from '../components/Books.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/writers'
        },
        {
            path: '/writers',
            name: 'writers',
            component: Writers
        },
        {
            path: '/books',
            name: 'books',
            component: Books
        }
    ]
});

export default router;
