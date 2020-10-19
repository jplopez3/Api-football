const express = require('express');
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
    res.json( process.env
    );
});

const path = require('path');
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
app.use(`/api`, router);
//express()
 // .use(express.static(path.join(__dirname, 'public')))
 // .set('views', path.join(__dirname, 'views'))
 // .set('view engine', 'ejs')
  //.get('/', (req, res) => res.render('pages/index'))
  