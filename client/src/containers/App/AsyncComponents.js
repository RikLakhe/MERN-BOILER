import loadable from 'react-loadable';
import Loading from "../../components/Layout/Loading";

export const AsyncAppLayout = loadable({
    loader: () => import('../Layout/AppLayoutContainer'),
    loading: Loading,
});

export const AsyncStaticAppLayout = loadable({
    loader: () => import('../Layout/AppLayoutStaticContainer'),
    loading: Loading,
});

export const AsyncAuth = loadable({
    loader: () => import('../Auth/AuthContainer'),
    loading: Loading,
});

export const AsyncLogout = loadable({
    loader: () => import('../Auth/LogoutContainer'),
    loading: Loading,
});

export const AsyncHome = loadable({
    loader: () => import('../Home/HomeContainer'),
    loading: Loading,
});

export const AsyncForbidden = loadable({
    loader: () => import('../Exception/ForbiddenContainer'),
    loading: Loading,
});

export const AsyncInternalServer = loadable({
    loader: () => import('../Exception/InternalServerContainer'),
    loading: Loading,
});

export const AsyncNotFound = loadable({
    loader: () => import('../Exception/NotFoundContainer'),
    loading: Loading,
});