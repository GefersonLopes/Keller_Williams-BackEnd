import { updateUser_Service } from "../services/updateUser.service";

export const updateUser = (req, res) => {
    try {
        const { id } = req.params;
        const { nome, empresa } = req.body;
        const result = updateUser_Service(id, nome, empresa);

        return res.status(200).json(result);
    }
    catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({message: err.message});
        }
    }
};