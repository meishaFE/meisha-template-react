import { Dispatch } from 'redux';
import { History } from 'history';

export interface ModelAction {
  type: string;
  action: object;
  payload: object;
}

export interface ModelEffects {
  select: Function;
  call: Function;
  put: Function;
}

export interface ParamLogin {
  phone: string;
  password: string;
}

export interface ParamRegister {
  phone: string;
  password: string;
}

export interface ComponentProps {
  dispatch: Dispatch<any>;
  history?: History<any>;
  loading?: any;
  form?: any;
}
