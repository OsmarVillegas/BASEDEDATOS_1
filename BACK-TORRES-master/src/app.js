import express  from 'express';
import cors from 'cors';
import morgan from 'morgan';
import UsersRoutes from './routes/users.routes';
import ProyectosRoutes from './routes/proyecto.routes';
import TasksRoutes from './routes/tasks.routes';



const app=express();
//settings
app.set('port', process.env.PORT || 4000);

//middelware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Configuración de CORS
app.use(cors());

//rutas
app.get('/', (req, res)=>{
    res.json({message:'hello world'})

});

app.use('/api/users',UsersRoutes);
app.use('/api/proyects',ProyectosRoutes);
app.use('/api/tasks',TasksRoutes);

export default app;