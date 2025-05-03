import type { Context } from "hono";
import * as userModel from  "../models/user.model.js";

type createUserBody = {
	firstName: string;
	lastName: string;
};
const createUser = async (c: Context) => {
	try {
		const body = await c.req.json<createUserBody>();
		if (!body.firstName || !body.lastName)
			return c.json(
				{
					success: false,
					data: null,
					msg: "Missing required fields",
				},
				400
			);
		if (await userModel.isDuplicate(body.firstName, body.lastName)) {
			return c.json({
				success: false,
				data: null,
				msg: "firstName or lastName is duplicated",
			});
		}
		const newUser = await userModel.createUser(
			body.firstName,
			body.lastName
		);
		return c.json({
			success: true,
			data: newUser,
			msg: "Created new User!",
		});
	} catch (e) {
		return c.json(
			{
				success: false,
				data: null,
				msg: `${e}`,
			},
			500
		);
	}
};

const getAllUsers = async (c: Context) => {
    try {
        const users = await userModel.getAllUsers();
        return c.json({
            success: true,
            data: users,
            msg: "All users fetched"
        });
    } catch (e) {
        return c.json({
            success: false,
            data: null,
            msg: `${e}`
        }, 500);
    }
};

const updateName = async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        const { firstName, lastName } = await c.req.json();

        if (!firstName || !lastName || isNaN(id)) {
            return c.json({ success: false, msg: "Invalid input" }, 400);
        }

        const updatedUser = await userModel.updateName(id, firstName, lastName);
        return c.json({ success: true, data: updatedUser, msg: "User name updated" });
    } catch (e) {
        return c.json({ success: false, msg: `${e}` }, 500);
    }
};


export { createUser, getAllUsers, updateName };