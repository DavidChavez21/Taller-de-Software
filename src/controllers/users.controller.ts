import libs from '@libs/index';

const findAll = (_req, res) => {
    res.status(200).json(libs.USERS.service.getAll());
}

const getByID = (req, res)=>{
    const { id } = req.params;
    const datos = libs.USERS.service.getById(id);

    if(datos){
        return res.status(201).json(datos)
    }
    return res.status(201).json({ message: "Error to find users!"})
}

const addUsers = (req,res)=>{
    const { nombre, correo, password, confirmPassword } = req.body;
    const datos = libs.USERS.User;
    datos.nombre = nombre;
    datos.correo = correo;
    datos.password = password;
    if(confirmPassword == password){
        if(libs.USERS.service.add(datos)){
            return res.json({message: "User created!"});
         } 
         return res.status(404).json({message: "Error to create a User!"});
    }
    return res.status(403).json({message: 'Unaunthorized passwords needs to be the same!'});
}

const updateUsers = (req, res)=>{
    const { id } = req.params;
    const body = req.body;
    const datos = libs.USERS.User;
    datos.codigo = id;
    datos.correo = body?.correo;
    datos.nombre = body?.nombre;
    datos.password = body?.password;
    datos.roles = body?.roles;
    
    if(libs.USERS.service.update(datos)){
        return res.json({message: `Users with the id: ${id} updated!`});
    } 
    return res.status(404).json({message: "Error to update the user!"})
}

const deleteUsers = (req,res)=>{
    const { id } = req.params;

    if(libs.USERS.service.delete(id)){
        return res.status(201).json(`Users with the id: ${id} deleted!`)
    }
    return res.status(201).json({ message: "Error to delete the user!"})
}

const getUrls = (_req, res) =>{
    const jsonUrls = {
        "getAll": {"method":"get","url": "users/all"},
        "getById": {"method":"get","url": "users/byId/:id"},
        "new": {"method":"post","url": "users/new"},
        "update": {"method":"put","url": "users/update/:id"},
        "delete": {"method":"delete","url": "users/delete/:id"},
    };
    res.status(200).json(jsonUrls);
}

export { findAll, getByID, addUsers, updateUsers, deleteUsers, getUrls }