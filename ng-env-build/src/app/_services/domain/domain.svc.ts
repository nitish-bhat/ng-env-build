import { IDomainService } from './domain.in';
import { environment } from '../../../environments/environment';

export class DomainService implements IDomainService {
    domainUrl: string;
    isAdminDomain: boolean;

    constructor() {
        this.domainUrl = environment.domain.domainUrl;
        this.isAdminDomain = environment.domain.isAdmin;
    }
}