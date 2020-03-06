import express from 'express';
import morgan from 'morgan';
import path from 'path';
import history from 'connect-history-api-fallback';

const app = express();

app.use(history());
app.use(morgan('dev'));
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/asd', (req, res) => {
});

app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);

app.listen(app.get('puerto'), () => {
    console.log('Puerto activo: ' + app.get('puerto'));
});