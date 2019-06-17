import { IRoute } from 'umi-types';

const routes: IRoute[] = [
  {
    path: '/*',
    exact: true,
    component: '../layouts',
    routes: [
      { path: '/welcome', exact: true, component: 'welcome' },
      { path: '/login', exact: true, component: 'login' }
    ]
  }
];

export default routes;
