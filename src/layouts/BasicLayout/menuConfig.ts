const headerMenuConfig = [];

const asideMenuConfig = [
    {
        name: 'Home',
        path: '/',
        icon: 'chart-pie',
    },
    {
        name: 'About',
        path: '/about',
        icon: 'chart-pie',
    },
    {
        name: 'Login',
        path: '/login',
        icon: 'account',
    },
    {
        name: 'child',
        icon: 'set',
        children: [
            {
                path: 'child/',
                name: 'home',
            },
            {
                path: 'child/master',
                name: 'master',
            },
        ]
    },
];

export { headerMenuConfig, asideMenuConfig };
