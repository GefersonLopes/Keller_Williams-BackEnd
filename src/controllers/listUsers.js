import { listUser_Service } from "../services/listUsers.service";

export const listUser = (req, res) => {
    const result = listUser_Service();
    return res.status(200).json(result);
};