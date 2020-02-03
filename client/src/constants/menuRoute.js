export default [
    {
        menuName: 'Home',
        menuKey: 'home',
        icon: 'home',
        route: '/',
    }, {
        menuName: 'Products',
        menuKey: 'products',
        icon: 'tags',
        route: '/products',
        permission: 'ADMIN'
    }, {
        menuName: 'Checkout',
        menuKey: 'checkout',
        icon: 'calculator',
        route: '/calculator',
    }, {
        menuName: 'Profile',
        menuKey: 'profile',
        icon: 'profile',
        route: '/user',
        permission: 'PARTNER'
    }, {
        menuName: 'Login',
        menuKey: 'login-signup',
        icon: 'contacts',
        route: '/login',
    }
]