import { Empresas, Empresa } from './Empresas.libs';
import { Users, User } from './Users.libs';

const libs = {
    EMPRESAS : { service: new Empresas(), Empresa },
    USERS : { service: new Users(), User },
}

export default libs 