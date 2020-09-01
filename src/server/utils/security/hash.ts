import * as bcrypt from "bcrypt";

export const HashContent = (content: string) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(content, salt);
    return hash;
};

export const CompareHash = (content: string, hash: string) => {
    return bcrypt.compareSync(content, hash);
};
