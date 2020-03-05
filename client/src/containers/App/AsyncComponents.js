import loadable from 'react-loadable';
import Loading from "../../components/Layout/Loading";

// Layout containers
export const AsyncAppLayout = loadable({
    loader: () => import('../Layout/AppLayoutContainer'),
    loading: Loading,
});

export const AsyncStaticAppLayout = loadable({
    loader: () => import('../Layout/AppLayoutStaticContainer'),
    loading: Loading,
});

// Exceptions
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

//Auth containers
export const AsyncLogin = loadable({
    loader: () => import('../Auth/LoginContainer'),
    loading: Loading,
});

export const AsyncLogout = loadable({
    loader: () => import('../Auth/LogoutContainer'),
    loading: Loading,
});

export const AsyncSignUp = loadable({
    loader: () => import('../Auth/SignUpContainer'),
    loading: Loading,
});

// Home containers
export const AsyncHome = loadable({
    loader: () => import('../Home/HomeContainer'),
    loading: Loading,
});

// Category containers
export const AsyncCategory = loadable({
    loader: () => import('../Category/CategoryContainer'),
    loading: Loading,
});