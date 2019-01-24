import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  constructor(private http: HttpClient) {
  }

  getUserInfo(code: number) {
    return this.http.get(environment.BACKEND_LONG_IP + '/users/' + String(code));
  }


}
