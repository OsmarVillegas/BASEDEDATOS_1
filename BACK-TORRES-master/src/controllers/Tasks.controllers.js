import Tasks from '../models/Tasks';



export const findAllTasks= async(req,res)=>{
     try {
        const tasks = await Tasks.find()
        res.json(tasks);
     } catch (error) {
        res.status(500).json({message: error.message||'ocurrio un error al deovolver los tareas'})
     }
}


export const  createTask= async(req,res)=>{
    if(!req.body.nombreTarea){   
        return res.status(400).json({message: 'Nombre de la tarea es requerido'})
     }
    try {
        const newTask= new Tasks({
            nombreProyecto:req.body.nombreProyecto,
            nombreTarea:req.body.nombreTarea,
            descripcion:req.body.descripcion,
            fechaEntrega:req.body.fechaEntrega,
            estado:req.body.estado,
            responsable:req.body.responsable,
        });
        const  taskSaved = await newTask.save();
        
        res.json(taskSaved); 
    } catch (error) {
        console.log(req.body);
        res.status(500).json({message: error.message||'ocurrio un error al crear la tarea'})
    }
}

export const findOneTask= async(req ,res)=>{

    const {id}= req.params;
    try {
       
   
    const task = await Tasks.findById(id);
    if(!task)
    return res.
    status(404)
    .json({message:'la tarea con ese id no existe'});

    
    res.json(task);
    } catch (error) {
        
        res.status(500).json({message: error.message||'Eror con ese id'})
    }


}

export const deleteTask= async(req,res)=>{
    const {id}= req.params;
   try {
    const data= await Tasks.findByIdAndDelete(id);

    res.json({
        message: 'la tarea ha sido eliminada'
    });
   } catch (error) {
    res.status(500).json({message:'Error, la tarea no fue eliminada'});
   }

}

export const updateTask= async(req,res)=>{

   try {
    await Tasks.findByIdAndUpdate(req.params.id,req.body,{
        useFindAndModify:false
       });
    
       res.json({message: "tarea actualizada"});
    
   } catch (error) {
    res.status(500).json({message:'No se puedo actualizar'});
   }
}