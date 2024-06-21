import { Login, Home } from './LazyComponents';

const routes = [
    {
        name: 'Login',
        path: '/login',
        exact: true,
        component: Login
    },
    {
        name: 'Home',
        path: '/home',
        exact: true,
        component: Home
    }
];
export default routes;
