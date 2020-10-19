import { server, router } from './loaders/express.js';
import Outscore from './Outscore.js';

const OutscoreServer = new Outscore(router);
const PORT = process.env.PORT || 5000;

router.get("/", (req, res) => {
    res.json(OutscoreServer.endPoints);
});

server.get('/', function(req, res) {
    res.send('Hello from root route.')
  });

server.get('/env', function(req, res) {
    res.json( process.env );
});

server.use('/api/v3', router);
server.listen(PORT, () => console.log(`Listening on ${ PORT }`));


  