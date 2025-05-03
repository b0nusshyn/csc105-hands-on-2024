import { db } from '../index.js'

const isDuplicate = async( firstName: string, lastName: string ) => {
    const user = await db.user.findFirst({
        where: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}

const createUser = async( firstName: string, lastName: string ) => {
    const user = await db.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}

const getAllUsers = async () => {
    return await db.user.findMany();
};

const updateName = async (id: number, firstName: string, lastName: string) => {
    return await db.user.update({
        where: { id },
        data: { firstName, lastName }
    });
};


export { isDuplicate, createUser, getAllUsers, updateName};