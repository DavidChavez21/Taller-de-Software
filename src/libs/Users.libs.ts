
export interface IUser {
    codigo: string,
    correo: string,
    nombre: string,
    password: string,
    roles?: string[], 
    creado?: Date, 
    ultimoAcceso?: Date
}


export class Users {
    private users: IUser[];

    constructor(){
        this.users = [];
    }

    add(users : IUser){
        const date = new Date();
        const nuevo : IUser = {
            ...users,
            codigo: (Math.random() * 1000).toString() + date.getDate().toString(),
            roles: ['ADM'],
            creado: date,
            ultimoAcceso: date
        }
        this.users.push(nuevo);
        return nuevo; 
    }

    getAll(){
        return this.users;
    }
    getByEmail(correo : string){
        const User = this.users.find((user)=>{
            return user.correo === correo;
        });
        if(!User){
            return false;
        }
        return true;
    }

    getById(codigo : string){
        const User = this.users.find((user)=>{
            return user.codigo === codigo;
        });
        if(!User){
            return false;
        }
        return User;
    }
    
    update(updateUser : IUser){
       const User = this.getById(updateUser.codigo);
       if(User){
        const newusers : IUser[] = this.users.map(user =>{
            if(user.codigo === updateUser.codigo){
                return {...user, ...updateUser, ultimoAcceso: new Date()}
            }
            return user;
        });
        this.users = newusers;
        return true;
       }
       return false;
    }

    delete (deleteUser : string){
        const User = this.getById(deleteUser);
        if(User){
            const newUser : IUser[] = this.users.filter((user)=>{
                return user.codigo !== User.codigo; 
            });
            return this.users = newUser;
        }
        return false;
    }
}

export const User : IUser = {
    codigo: '',
    correo: '',
    nombre: '',
    password: '',
    ultimoAcceso: new Date()
}