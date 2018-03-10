import { IUser } from '../../_models/user/user.in';
import { UserResponse } from '../../_models/user/user.response';
import { Observable } from 'rxjs/Rx';
export interface IUserService {
    getUsers(): Observable<UserResponse>;
}