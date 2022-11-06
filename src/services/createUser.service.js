import { users } from "../database";
import { v4 as uuid } from "uuid";

export const createUser_Service = (nome, empresa, permissao) => {

    const verifyUser = users.find(user => user.nome === nome);
    if (verifyUser) {
        throw new Error(`User ${nome} already exists`);
    };

    const validNome = nome.length === 0;
    const validEmpresa = empresa.length === 0;
    const validPermissao = permissao.length === 0;
    
    if (validNome || validEmpresa || validPermissao) {
        throw new Error("data is required");
    };
    if (!nome || !empresa || !permissao) {
        throw new Error("data is required");
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
