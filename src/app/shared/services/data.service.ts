import {Injectable} from '@angular/core';
import {Ticket} from '../models/Ticket';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getTicketList() {
    return this.http.get<Ticket[]>(environment.BACKEND_LONG_IP + '/tickets');
  }
}
