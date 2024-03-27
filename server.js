const express = require('express');
const  handlebars = require('express-handlebars');

const app = express();
const PORT = 3000;

const getProductList = () => {
  return [
    {
      name: 'Banana',
      image: '/assets/images/banana.png',
      price: 100,
    },
    {
      name: 'Cebolla',
      image: '/assets/images/cebollas.png',
      price: 50,
    },
    {
      name: 'Lechuga',
      image: '/assets/images/lechuga.png',
      price: 70,
    },
    {
      name: 'Papas',
      image: '/assets/images/papas.png',
      price: 80,
    },
    {
      name: 'Pimenton',
      image: '/assets/images/pimenton.png',
      price: 120,
    },
    {
      name: 'Tomate',
      image: '/assets/images/tomate.png',
      price: 90,
    }
  ];
}

app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist/css"))
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"))
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"))


app.set('view engine', 'hbs');

app.engine('hbs', handlebars.engine({
  layoutsDir: __dirname + '/views/layouts',
  extname: 'hbs',
  defaultLayout: 'index',
}));

app.use(express.static('public'));




app.get('/', (req, res) => {
  res.render('dashboard', {
    listExists: true,
    products: getProductList(),
  });
});



app.get('*', (req, res) => {
  res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});