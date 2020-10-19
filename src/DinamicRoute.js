import NodeCache  from 'node-cache';
import {defaultCacheConfig} from './config/index.js';
import { catFactsAxiosInstance, apiFootballInstance } from "./loaders/axios.js";

 export default class endPoint {
  constructor({router, url, cacheStdTTL, axios = apiFootballInstance}){
    console.log('new endPoint',url);
    this.url = url;
    this.router = router;
    this.axios = axios;
    this.cacheStdTTL = cacheStdTTL;
    this.cache = new NodeCache(defaultCacheConfig.stdTTL = cacheStdTTL);

    this.createNewRoute();
  }

  createNewRoute() {
    let me = this;
    this.router.get(this.url, (req, res) => { 
      const routerConfig = this.getRouteConfig(req);
      console.log('router.get', me.url, routerConfig);  

       let data = this.cache.get(routerConfig.cacheKey);
        if ( data == undefined ){
          // handle miss!
          this.axios.get(this.url, routerConfig.queryParams).then((response)=>{
             console.log(response);
            data = response.data;
            this.cache.set(routerConfig.cacheKey, data, this.cacheStdTTL )
            res.json(data);
          }).catch((err)=>(res.json(err)));
        }else{
          res.json(data);
        }  
      });
  }

  getRouteConfig(req) {
    const queryParams = {}
      queryParams['params'] = req.query ? req.query : {};

      return{
        queryParams,
        cacheKey: req.url
      }
  }
}
