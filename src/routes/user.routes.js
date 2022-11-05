import { Router } from "express";

import { isAdmin } from "../middleware/isAdmin";

import { createUser } from "../controllers/createUser";
import { deleteUser } from "../controllers/deleteUser";
import { listUser } from "../controllers/listUsers";
import { updateUser } from "../controllers/updateUser";

export const Users_router = Router();

Users_router.post("/:callerId", isAdmin , createUser);
Users_router.get("/", listUser);
Users_router.patch("/:id", updateUser);
Users_router.delete("/:callerId/:id", isAdmin , deleteUser);