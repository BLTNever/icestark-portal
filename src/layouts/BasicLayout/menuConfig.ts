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
        name: 'Goods',
        icon: 'set',
        children: [
            {
                path: '/',
                name: 'home',
            },
            {
                path: '/master',
                name: 'master',
            },
        ]
    },
    {
        name: '商家平台',
        icon: 'atm',
        children: [
            {
                path: '/seller',
                name: 'home',
            },
            {
                path: '/seller/master',
                name: 'master',
            },
            // {
            //     path: '/seller/detail',
            //     name: '商家详情',
            // },
            // {
            //     path: '/seller/404',
            //     name: '商家 404',
            // },
        ],
    },
    {
        name: 'manifest',
        icon: 'account',
        path: '/local/',
        // children: [
        //     {
        //         path: '/local/master',
        //         name: 'master',
        //     },
        //     {
        //         path: '/local/',
        //         name: 'home',
        //     },
        // ]
    },
    // {
    //     name: '小二平台',
    //     icon: 'account',
    //     children: [
    //         {
    //             path: '/waiter',
    //             name: '小二首页',
    //         },
    //         {
    //             path: '/waiter/list',
    //             name: '小二列表',
    //         },
    //         {
    //             path: '/waiter/detail',
    //             name: '小二详情',
    //         },
    //         {
    //             path: '/waiter/404',
    //             name: '小二 404',
    //         },
    //     ],
    // },
];

export { headerMenuConfig, asideMenuConfig };
