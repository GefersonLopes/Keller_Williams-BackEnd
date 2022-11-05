import { users } from "../database";
import { v4 as uuid } from "uuid";

export const createUser_Service = (nome, empresa, permissao) => {

    const verifyUser = users.find(user => user.nome === nome);
    if (verifyUser) {
        return { message: "User already exists" };
    };

    const validNome = nome.length === 0;
    const validEmpresa = empresa.length === 0;
    const validPermissao = permissao.length === 0;
    
    if (validNome || validEmpresa || validPermissao) {
        return { message: "data is required" };
    };
    if (!nome || !empresa || !permissao) {
        return { message: "data is required" };
    }

    const newUser = {
        id: uuid(),
        nome,
        empresa,
        permissao
    };

    users.push(newUser);
    return newUser;
};
