import NodeCache  from 'node-cache';
import {defaultCacheConfig} from './config/index.js';

export default function CreateRouter( {router, url, cacheStdTTL, axios} ) { 
  console.log('CreateRouter', url);
  const footabalApiCache = new NodeCache(defaultCacheConfig.stdTTL = cacheStdTTL);
  console.log('footabalApiCache', footabalApiCache);
   router.get(url, function(req, res){ 
    console.log('router.get', url, req.query);    
    const routerConfig = getRouteConfig(req);
     
     let data = footabalApiCache.get(routerConfig.cacheKey);
      if ( data == undefined ){
        // handle miss!
        axios.get(url, routerConfig.queryParams).then((response)=>{
          data = response.data;
          footabalApiCache.set(routerConfig.cacheKey, data, cacheStdTTL )
          res.json(data);
        }).catch((err)=>(res.json(err)));
      }else{
        res.json(data);
      }  
    });

   function getRouteConfig(req) {
    const queryParams = {}
      queryParams['params'] = req.query ? req.query : {};

      return{
        queryParams,
        cacheKey: req.url
      }
    }

    return{
      cache: footabalApiCache,
      url : url,
    } ;
};