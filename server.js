const express = require('express');
const  handlebars = require('express-handlebars');

const app = express();
const PORT = 3000;

const getProductList = () => {
  return [
    {
      name: 'Banana',
      image: '/assets/images/banana.png'
    },
    {
      name: 'Cebolla',
      image: '/assets/images/cebollas.png'
    },
    {
      name: 'Lechuga',
      image: '/assets/images/lechuga.png'
    },
    {
      name: 'Papas',
      image: '/assets/images/papas.png'
    },
    {
      name: 'Pimenton',
      image: '/assets/images/pimenton.png'
    },
    {
      name: 'Tomate',
      image: '/assets/images/tomate.png'
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
  res.render('main', {
    title: 'Listado de productos',
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