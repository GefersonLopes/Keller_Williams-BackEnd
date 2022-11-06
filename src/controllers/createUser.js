import { createUser_Service } from "../services/createUser.service";

export const createUser = (req, res) => {
    try {
        const { nome, empresa, permissao } = req.body;
        const result = createUser_Service(nome, empresa, permissao);

        return res.status(201).json(result);
    }
    catch(err) { 
        if(err instanceof Error) {
            return res.status(400).json({message: err.message});
        }
    }
};