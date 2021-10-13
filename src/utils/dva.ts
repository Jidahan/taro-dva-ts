import { create } from 'dva-core';
import createLoading from 'dva-loading';

let app: { use: (arg0: any) => void; model: (arg0: any) => any; start: () => void; _store: any; getStore: () => any; dispatch: any; };
let store: { dispatch: any; };
let dispatch: any;

function createApp(opt: { models: any[]; }){
  app = create(opt);
  app.use(createLoading({}));
  if(!global.registered){
    opt.models.forEach((model: any) => app.model(model));
  }
  global.registered = true;
  app.start();
  store = app._store;
  app.getStore = () => store;
  dispatch = store.dispatch;
  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch: () => {
    return app.dispatch;
  }
}