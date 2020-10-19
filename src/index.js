import { app, router } from './loaders/express.js';
import dinamicRoute from './DinamicRoute.js'; 
import { catFactsAxiosInstance, apiFootballInstance } from "./loaders/axios.js";


router.get("/api/v3", (req, res) => {
    res.json(OutscoreServer.endPoints);
});

app.get('/', function(req, res) {
    res.send('Hello from root route.')
  });
app.get('/env', function(req, res) {
    res.json( process.env );
});
class Outscore {
    constructor(router){
  
        const catFactsEndPoint = {
            url: '/facts/random',
            axios: catFactsAxiosInstance, 
            router: router,
            cacheStdTTL: '10',
        }; 
        const apiFootballEndPoint = { 
            url: '/fixtures',
            axios: apiFootballInstance,
            router: router,
            cacheStdTTL: '60',
        };
        const apiFootballStatisticsEndPoint = {
            url: '/fixtures/statistics',
            axios: apiFootballInstance,
            router: router,
            cacheStdTTL: '60',
        };
        this._endPoints = [apiFootballEndPoint, catFactsEndPoint, apiFootballStatisticsEndPoint];
        this._activeEndPoints = [];

        this.createEndpoints();
    }

    createEndpoints() {
      this._activeEndPoints = this._endPoints.map((endPoint)=>(dinamicRoute(endPoint)))

    }
    set endPoints(endpoint){
        this._endPoints.push(endpoint);
    }
    get endPoints(){
        return this._activeEndPoints.map(({cache, url}) => ({
               url: url,
               keys: cache.keys(),
               stats: cache.getStats(),
               ttl: cache.keys().map( (key) => { 
                   const myObj = {}
                    myObj[key] = new Date(cache.getTtl( key ));
                    return myObj;
                 } ),
            
                }))
    }
}

const OutscoreServer = new Outscore(router);
app.use('/api/v3', router);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));


  