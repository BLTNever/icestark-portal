import * as React from 'react';
import { createApp } from 'ice'
import { ConfigProvider } from '@alifd/next';
import PageLoading from '@/components/PageLoading';
import FrameworkLayout from '@/layouts/FrameworkLayout';

const appConfig: any = {
    app: {
        rootId: 'icestark-container',
        addProvider: ({ children }) => (
            <ConfigProvider prefix="next-icestark-">{children}</ConfigProvider>
        ),
    },
    router: {
        type: 'browser',
    },
    icestark: {
        type: 'framework',
        Layout: FrameworkLayout,
        getApps: async () => {
            const apps = [
                {
                    path: '/child',
                    title: 'Child',
                    // Angular app demo: https://github.com/ice-lab/icestark-child-apps/tree/master/child-common-angular-9 
                    // entry: '//ice.alicdn.com/icestark/child-common-angular/index.html',
                    entry: '//louisedylan.github.io/icestrak-child-demo/'
                }
            ];
            return apps;
        },
        appRouter: {
            LoadingComponent: PageLoading,
        },
    },
};

createApp(appConfig)
