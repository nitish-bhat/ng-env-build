import { IUser } from './user.in';

export class User implements IUser {
    name: string;
    id: number;
    email: string;
    isAdmin: boolean = false;
    superKey?: string;
}