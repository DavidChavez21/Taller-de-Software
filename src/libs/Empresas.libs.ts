export interface IEmpresa {
    codigo: string;
    nombre: string;
    status: string;
    createdAt?: Date,
    updatedAt?: Date,
    observacion?: string
}

export class Empresas {
    private empresas: IEmpresa[];
    
    constructor(){
        this.empresas = [];
    }

    add(nuevaEmpresa : IEmpresa){
        const date = new Date();
        const nueva : IEmpresa = {
            ...nuevaEmpresa,
            codigo: (Math.random() * 1000).toString() + new Date().getDate().toString(),
            createdAt: date,
            updatedAt: date
        }
        this.empresas.push(nueva);
        return nueva;
    }

    getAll(){
        return this.empresas
    }

    getById(codigo : string){
        const empresa = this.empresas.find((emp)=>{
            return emp.codigo === codigo;
        });
        if(!empresa){
            return false;
        }
        return empresa;
    }
    
    update(updateEmpresa : IEmpresa){
        const newEmpresas : IEmpresa[] = this.empresas.map(emp =>{
            if(emp.codigo === updateEmpresa.codigo){
                return {...emp, ...updateEmpresa, updatedAt: new Date()}
            }
            return emp
        });
        this.empresas = newEmpresas;
        return true;
    }

    delete (deleteEmpresa : string){
        const empresa = this.getById(deleteEmpresa);
        if(empresa){
            const newEmpresa : IEmpresa[] = this.empresas.filter((emp)=>{
                return emp.codigo !== empresa.codigo; 
            });
            return this.empresas = newEmpresa;
        }
        return false;
    }
}

export const Empresa : IEmpresa = {
    codigo: '',
    nombre: '',
    status: ''
}