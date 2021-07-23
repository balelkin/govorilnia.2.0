
export interface UserModel extends Document{
    readonly email?: string;
    readonly password?: string;
}