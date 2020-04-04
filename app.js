import express from 'express';
import morgan from 'morgan';
import path from 'path';
import history from 'connect-history-api-fallback';
import mongoose from 'mongoose';

const uri = 'mongodb://localhost:27017/computo';
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
};

mongoose.connect(uri, options).then(() => {
    console.log('Conectado a MoongoDB');
}, error => {
    console.log(error);
});
const app = express();

app.use(history());
app.use(morgan('dev'));
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', require('./routes/nota'));

// app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);

app.listen(app.get('puerto'), () => {
    console.log('Puerto activo: ' + app.get('puerto'));
});