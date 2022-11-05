import { users } from "../database";

export const updateUser_Service = (id, nome, empresa) => {
    const user = users.find(u => u.id === id);
    if (!user) {
        return { message: "User not found" };
    };

    const userUpdated = {
        nome: nome ? nome : user.nome,
        empresa: empresa ? empresa : user.empresa
    };

    const userIndex = users.findIndex(u => u.id === id);
    
    users[userIndex] = { ...users[userIndex], ...userUpdated };
    return users[userIndex];
};