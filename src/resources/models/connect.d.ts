import { EffectsCommandMap, Subscription } from 'dva';

import { TableModelState } from '@/pages/Table/model';
import { GlobalModelState } from './global';

export { TableModelState, GlobalModelState };

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean };
  models: {
    table: boolean;
    global: boolean;
  };
}

export interface ConnectState {
  table: TableModelState;
  global: GlobalModelState;
  loading: Loading;
  router: { location: Location };
}

export { EffectsCommandMap, Subscription };

/**
 * An Action type which accepts any other properties.
 * This is mainly for the use of the `Reducer` type.
 * This is not part of `Action` itself to prevent types that extend `Action` from
 * having an index signature.
 */
export interface AnyAction extends Action {
  // Allows any extra properties to be defined in an action.
  [extraProps: string]: any;
}

export type Reducer<S = any, A extends Action = AnyAction> = (
  state: S,
  action: A
) => S;

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & {
    select: <T>(func: (state: ConnectState) => T) => T;
  }
) => void;

export type Action<P = any, C = (payload: P) => void> = {
  type: string;
  payload?: P;
  callback?: C;
  meta?: {};
  [key: string]: any;
};

/**
 * @type P: Type of payload
 * @type C: Type of callback
 */
export type Dispatch = <P = any, C = (payload: P) => void>(action: {
  type: string;
  payload?: P;
  callback?: C;
  [key: string]: any;
}) => any;

export interface DispatchProps {
  dispatch: Dispatch;
}

export interface DvaModel<S> {
  namespace?: string;
  state: S;
  reducers: {
    save: Reducer<S>;
  };
  effects?: { [key: string]: Effect };
  subscriptions?: { [key: string]: Subscription };
}
