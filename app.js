import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import history from 'connect-history-api-fallback';
import mongoose from 'mongoose';
const uri = 'mongodb+srv://user_app_tutorial_node:ChVH5oqbRHkTzFIM@nodecluster-jwqdf.mongodb.net/test?retryWrites=true&w=majority';
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

app.use(cors());
app.use(history());
app.use(morgan('dev'));
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', require('./routes/nota'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);

app.listen(app.get('puerto'), () => {
    console.log('Puerto activo: ' + app.get('puerto'));
});