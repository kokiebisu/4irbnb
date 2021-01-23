import mongoose from "mongoose";
interface UserAttributes {
    email: string;
    password: string;
}
interface UserModel extends mongoose.Model<UserDocument> {
    build(attributes: UserAttributes): UserDocument;
}
interface UserDocument extends mongoose.Document {
    email: string;
    password: string;
    updatedAt: string;
}
declare const User: UserModel;
declare const buildUser: (attributes: UserAttributes) => UserDocument;
export { User, buildUser };
