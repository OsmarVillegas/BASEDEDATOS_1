 import {Schema, model} from "mongoose";

 const userSchema = new Schema({

    nombreUsuario:{
        type:String,
        required:true,
        trim:true,
    },
	apellidosUsuario:{
        type:String,
        required:true,
        trim:true
    },
	rol:
    {
        type:String,
        required:true,
        trim:true
    },
    correo:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
	estado:{
        type:String,
        required:true,
        trim:true,
    }

 },
 {
    versionKey:false,
    timestamps:true
 });

 export default model('Users',userSchema)