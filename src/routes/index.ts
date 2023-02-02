const VERSION = process.env.VERSION;
import version from './v1';

const routerAPI = (app) =>{
  app.use(`/api/${VERSION}`, version);
}

export default routerAPI;