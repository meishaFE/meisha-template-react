import { IRoute } from 'umi-types';

const routes: IRoute[] = [
  {
    path: '/*',
    exact: true,
    component: '../layouts',
    routes: [{ path: '/', exact: true, component: 'index' }]
  }
];

export default routes;
