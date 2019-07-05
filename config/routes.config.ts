import { IRoute } from 'umi-types';

const routes: IRoute[] = [
  {
    path: '/*',
    exact: true,
    component: '../layouts',
    routes: [
      { path: '/', exact: true, component: 'welcome' },
      { path: '/login', exact: true, component: 'login' },
      { path: '/register', exact: true, component: 'register' }
    ]
  }
];

export default routes;
