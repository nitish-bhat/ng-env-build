import { IUserService } from './user.in'
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DomainService } from '../domain/domain.svc';
import { IUser } from '../../_models/user/user.in';
import { UserResponse } from '../../_models/user/user.response';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService implements IUserService {
    constructor(private domainService: DomainService, private http: Http) {

    }

    getUsers = (): Observable<UserResponse> => {
        return this.http.get(this.domainService.domainUrl)
            .map((response: any) => {
                return response;
            });
    }
}
