import React from 'react';
import { IAppRouterProps } from './router/types';
import { ILogger } from './logger/types';
import { IRequest } from './request/types';
import { IStore } from './store';
export * from './store/types';
import { IIceStark } from './types/icestark';

export interface IApp {
  rootId?: string;
  mountNode?: HTMLElement;
  addProvider?: ({
    children,
  }: {
    children: React.ReactNode;
  }) => React.ComponentType;
  getInitialData?: () => Promise<any>;
}

export interface IAppConfig {
  app?: IApp;
  router?: IAppRouterProps;
  logger?: ILogger;
  request?: IRequest;
  store?: IStore;
  icestark?: IIceStark;
}
