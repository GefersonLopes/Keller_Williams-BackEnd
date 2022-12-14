import { users } from "../database";

export const deleteUser_Service = (id) => {
    const user = users.find(user => user.id === id);
    if(!user) {
        throw new Error("User not found");
    };

    const userIndex = users.findIndex(user => user.id === id);
    users.splice(userIndex, 1);

};