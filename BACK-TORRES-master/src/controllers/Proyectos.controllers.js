import Proyectos from '../models/Proyectos';



export const findAllProyectos= async(req,res)=>{
     try {
        const proyectos = await Proyectos.find()
        res.json(proyectos);
     } catch (error) {
        res.status(500).json({message: error.message||'ocurrio un error al deovolver los proyectos'})
     }
}


export const  createProyecto= async(req,res)=>{
    if(!req.body.proyectName){   
        return res.status(400).json({message: 'Nombre del proyecto es requerido'})
     }
    try {
        const newProyecto= new Proyectos({
            proyectName:req.body.proyectName,
            proyectDes:req.body.proyectDes,
            fechIn:req.body.fechIn,
             fechFin:req.body.fechFin,
            resp:req.body.resp,
            state:req.body.state,
            proyectIntegrante:req.body.proyectIntegrante
        
        });
        const  proyectoSaved = await newProyecto.save();
        
        res.json(proyectoSaved); 
    } catch (error) {
        res.status(500).json({message: error.message||'ocurrio un error al crear el proyecto'})
    }
}

export const findOneProyecto= async(req ,res)=>{

    const {id}= req.params;
    try {
       
   
    const proyecto = await Proyectos.findById(id);
    if(!proyecto)
    return res.
    status(404)
    .json({message:'el proyecto con es id no existe'});

    
    res.json(proyecto);
    } catch (error) {
        
        res.status(500).json({message: error.message||'Eror con ese id'})
    }


}

export const deleteProyecto= async(req,res)=>{
    const {id}= req.params;
   try {
    const data= await Proyectos.findByIdAndDelete(id);

    res.json({
        message: 'el proyecto ha sido eliminado'
    });
   } catch (error) {
    res.status(500).json({message:'Error, el proyecto no fue liminado'});
   }

}

export const updateProyecto= async(req,res)=>{

   try {
    await Proyectos.findByIdAndUpdate(req.params.id,req.body,{
        useFindAndModify:false
       });
    
       res.json({message: "proyecto actualizado"});
    
   } catch (error) {
    res.status(500).json({message:'No se puedo actualizar'});
   }
}