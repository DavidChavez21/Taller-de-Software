import libs from '@libs/index';

libs.EMPRESAS.service.add({
    codigo: '',
    nombre: 'Mi segunda empresa',
    status: 'activo'
});

const findAll = (_req, res) => {
    res.status(200).json(libs.EMPRESAS.service.getAll());
}

const getByID = (req, res)=>{
    const { id } = req.params;
    const datos = libs.EMPRESAS.service.getById(id);

    if(datos){
        return res.status(201).json(datos)
    }
    return res.status(201).json({ message: "¡Error al encontrar la empresa!"})
}

const addEmpresa = (req,res)=>{
    const { nombre, status } = req.body;
    const datos = libs.EMPRESAS.Empresa;
    datos.nombre = nombre;
    datos.status = status;

    if(libs.EMPRESAS.service.add(datos)){
       return res.json({message: "¡Empresa creada!"});
    } 
    return res.status(404).json({message: "¡Error al crear una empresa!"})
}

const updateEmpresa = (req, res)=>{
    const { id } = req.params;
    const body = req.body;
    const datos = libs.EMPRESAS.Empresa;
    datos.codigo = id;
    datos.nombre = body?.nombre;
    datos.status = body?.status;

    if(libs.EMPRESAS.service.update(datos)){
        return res.json({message: "¡Empresa actualizada!"});
    } 
    return res.status(404).json({message: "¡Error al actualizar la empresa!"})
}

const deleteEmpresa = (req,res)=>{
    const { id } = req.params;

    if(libs.EMPRESAS.service.delete(id)){
        return res.status(201).json(`¡Empresa con el ID: ${id} eliminado!`)
    }
    return res.status(201).json({ message: "¡Error al eliminar la empresa!"})
}

const getUrls = (_req, res) =>{
    const jsonUrls = {
        "getAll": {"method":"get","url": "empresas/all"},
        "getById": {"method":"get","url": "empresas/byId/:id"},
        "new": {"method":"post","url": "empresas/new"},
        "update": {"method":"put","url": "empresas/update/:id"},
        "delete": {"method":"delete","url": "empresas/delete/:id"},
    };
    res.status(200).json(jsonUrls);
}

export { findAll, getByID, addEmpresa, updateEmpresa, deleteEmpresa, getUrls }