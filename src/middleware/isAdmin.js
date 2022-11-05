// DEFINA UM MIDDLEWARE QUE VERIFIQUE SE O USUÁRIO QUE ESTÁ ENVIANDO O REQUEST TEM A PERMISSÃO DE ADMINISTRADOR

import { users } from "../database";

export const isAdmin = (req, res, next) => {
    let { callerId } = req.params;

    const user = users.find(u => u.id === callerId);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    };

    if (user.permissao !== "ADMIN") {
        return res.status(401).json({ message: "User not is admin" });
    }
    next();
}