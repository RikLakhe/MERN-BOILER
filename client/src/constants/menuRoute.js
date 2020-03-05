export default [
    {
        menuName: 'Home',
        menuKey: 'home',
        icon: 'home',
        route: '/',
    }, {
        menuName: 'Category',
        menuKey: 'category',
        icon: 'tags',
        route: '/category',
        permission: 'ADMIN'
    }, {
        menuName: 'Products',
        menuKey: 'products',
        icon: 'tags',
        route: '/products',
        permission: 'PARTNER'
    }, {
        menuName: 'Checkout',
        menuKey: 'checkout',
        icon: 'calculator',
        route: '/calculator',
    }, {
        menuName: 'Users',
        menuKey: 'user',
        icon: 'profile',
        route: '/users',
        permission: 'ADMIN',
    }
]