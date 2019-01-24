import {Injectable} from '@angular/core';
import {Ticket} from '../models/ticket';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getTicketList() {
    return this.http.get<Ticket[]>(environment.BACKEND_LONG_IP + '/tickets');
  }

  getActiveFailureList() {
    return new Observable();
  }
}
