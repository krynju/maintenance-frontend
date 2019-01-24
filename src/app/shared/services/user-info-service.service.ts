import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserInfoServiceService {
  constructor(private http: HttpClient) {
  }

  getTicketList() {
    return this.http.get(environment.BACKEND_LONG_IP + '/tickets');
  }

}
