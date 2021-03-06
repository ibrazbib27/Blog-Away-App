import {Connection} from "../index";

const findOneByEmail = async (email: string) => {
    return new Promise<Array<any>>((res, rej) => {
        Connection.query(
            `SELECT * FROM Blogs.Users WHERE email = '${email}' LIMIT 1;`,
            (err, result) => {
                if (err) return rej(err);
                res(result);
            }
        );
    });
};

const findOneById = async (id: number) => {
    return new Promise<Array<any>>((res, rej) => {
        Connection.query(
            `SELECT * FROM Blogs.Users WHERE id = ${id} LIMIT 1;`,
            (err, result) => {
                if (err) return rej(err);
                res(result);
            }
        );
    });
};

const insert = async (user: any) => {
    return new Promise<Array<any>>((res, rej) => {
        Connection.query(
            "INSERT INTO Blogs.Users (`email`, `password`, `role`, `token`) VALUES (?, ?, ?, ?);",
            [user.email, user.password, user.role, user.token],
            (err, result) => {
                if (err) return rej(err);
                res(result);
            }
        );
    });
};
const update = async (user: any) => {
    return new Promise<Array<any>>((res, rej) => {
        Connection.query(
            "UPDATE  Blogs.Users SET `activation` = 1 WHERE `token` = ?;",
            [user.token],
            (err, result) => {
                if (err) return rej(err);
                res(result);
            }
        );
    });
};

export default {
    FindOneByEmail: findOneByEmail,
    FindOneById: findOneById,
    Insert: insert,
    Update: update
};
