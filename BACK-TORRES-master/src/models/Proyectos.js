import {Schema, model} from "mongoose";

const proyectoSchema = new Schema({

    proyectName:{
       type:String,
       required:true,
       trim:true,
   },
   proyectDes:{
       type:String,
       required:true,
       trim:true
   },
   fechIn:
   {
       type:String,
       trim:true
   },   
   fechFin:
   {
       type:String,
       trim:true
   },
   resp:{
       type:String,
       required:true,
       trim:true,
   }
   ,
   state:{
       type:String,
       required:true,
       trim:true,
   },
   proyectIntegrante: [{
    name: {
        type: String,
        trim: true
    }
}]
   

},
{
   versionKey:false,
   timestamps:true
});

export default model('Proyectos',proyectoSchema)