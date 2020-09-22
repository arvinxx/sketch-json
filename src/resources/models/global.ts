import { DvaModel, Reducer, Effect } from '@/models/connect';

export interface GlobalModelState {
  sketch?: string;
  plugin: string;
  env: string;
  platform: string;
}
export interface GlobalModelStore extends DvaModel<GlobalModelState> {
  state: GlobalModelState;
  effects: {};
  reducers: {
    save: Reducer<GlobalModelState>;
  };
}

const GlobalModel: GlobalModelStore = {
  state: {
    plugin: '',
    sketch: '',
    env: '',
    platform: '',
  },
  effects: {},
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
export default GlobalModel;
