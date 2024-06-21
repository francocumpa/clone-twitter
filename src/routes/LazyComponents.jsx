import { lazy, Suspense } from 'react';

const LoginComponent = lazy(() => import('../components//Login/Login'));
const HomeComponent = lazy(() => import('../components/Home'));

export const Login = () => (
    <Suspense fallback={<div>Cargando...</div>}>
        <LoginComponent />
    </Suspense>
)

export const Home = () => (
    <Suspense fallback={<div>Cargando...</div>}>
        <HomeComponent />
    </Suspense>
)