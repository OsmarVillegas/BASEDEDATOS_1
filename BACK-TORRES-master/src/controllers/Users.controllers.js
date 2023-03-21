import Users from '../models/Users'


export const findAllUsers= async(req,res)=>{
     try {
        const users = await Users.find()
        res.json(users);
     } catch (error) {
        res.status(500).json({message: error.message||'ocurrio un error al deovlver los usuarios'})
     }
}


export const createUser= async(req,res)=>{
    if(!req.body.nombreUsuario){   
        return res.status(400).json({message: 'Nombre usuario es requerido'})
     }
    try {
        const newUser= new Users({
            nombreUsuario:req.body.nombreUsuario,
            apellidosUsuario:req.body.apellidosUsuario,
            rol:req.body.rol,
            correo:req.body.correo,
            estado:req.body.estado,
            password:req.body.password
        
        });
        const  userSaved = await newUser.save();
        
        res.json(userSaved); 
    } catch (error) {
        console.log(req.body);
        res.status(500).json({message: error.message||'ocurrio un error al crear al usuario'})
    }
}

export const findOneUser= async(req ,res)=>{

    const {id}= req.params;
    try {
       
   
    const user = await Users.findById(id);
    if(!user)
    return res.
    status(404)
    .json({message:'el usuario con es id no existe'});

    
    res.json(user);
    } catch (error) {
        
        res.status(500).json({message: error.message||'Eror con ese id'})
    }


}

export const deleteUser= async(req,res)=>{
    const {id}= req.params;
   try {
    const data= await Users.findByIdAndDelete(id);

    res.json({
        message: 'el usuario a sido eliminado'
    });
   } catch (error) {
    res.status(500).json({message:'Error, el usuario no fue liminado'});
   }

}

export const updateUser= async(req,res)=>{

   try {
    await Users.findByIdAndUpdate(req.params.id,req.body,{
        useFindAndModify:false
       });
    
       res.json({message: "usuario actualizado"});
    
   } catch (error) {
    res.status(500).json({message:'No se puedo actualizar'});
   }
}