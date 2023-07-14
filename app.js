const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.static('public'));


const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
  });

const Receita = sequelize.define('Receita', {
    nome: Sequelize.STRING,
    descricao: Sequelize.STRING,
});

sequelize.sync()
    .then(() => {
        console.log('Tabelas criadas com sucesso!');
    })
    .catch((error) => {
        console.error('Erro ao criar as tabelas:', error);
    });

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/buscaReceitas', (req, res) => {
    res.render('buscaReceitas');
});

app.get('/buscaReceitas_resultado', (req, res) => {
    const nomeReceita = req.query.nomeReceita;

    Receita.findAll({
        where: {
            nome: { [Sequelize.Op.like]: '%' + nomeReceita + '%' }
        }
    })
        .then((receitas) => {
            res.render('resultadoConsulta', { receitas });
        })
        .catch((error) => {
            console.error('Erro na consulta:', error);
            res.sendStatus(500);
        });
});

app.get('/cadastroReceita', (req, res) => {
    res.render('cadastroReceita');
  });

app.post('/cadastroReceita_resultado', urlencodedParser, (req, res) => {
    const { nome, descricao } = req.body;

    Receita.create({
      nome: nome,
      descricao: descricao
    })
      .then((receita) => {
        console.log('Receita cadastrada:', receita);
        // res.send('Receita cadastrada com sucesso!');
        res.render('resultadoCadastro')
      })
      .catch((error) => {
        console.error('Erro ao cadastrar a receita:', error);
        res.send('Houve um erro ao cadastrar a receita.');
      });
  });


app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
    console.log('>>>> Página inicial: http://localhost:3000 <<<<')
});
