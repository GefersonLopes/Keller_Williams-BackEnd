import { deleteUser_Service } from "../services/deleteUser.service";

export const deleteUser = (req, res) => {
    try {
        const { id } = req.params;
        const result = deleteUser_Service(id);

        return res.status(201).json(result);
    }
    catch(err) { 
        if(err instanceof Error) {
            return res.status(400).json({message: err.message});
        }
    }
};