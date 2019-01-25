import {Injectable} from '@angular/core';
import {Ticket} from '../models/ticket';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Machine} from '../models/machine';
import {Failure} from '../models/failure';
import {Assignment} from '../models/assignment';

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
    return this.http.get<Failure[]>(environment.BACKEND_LONG_IP + '/failures/active');
  }

  getMachineList() {
    return this.http.get<Machine[]>(environment.BACKEND_LONG_IP + '/machines');
  }

  getFailureList() {
    return this.http.get<Failure[]>(environment.BACKEND_LONG_IP + '/failures');
  }

  putFailure(obj) {
    return this.http.put(environment.BACKEND_LONG_IP + '/failures', obj, {responseType: 'text'});
  }

  patchFailure(obj) {
    return this.http.patch(environment.BACKEND_LONG_IP + '/failures', obj, {responseType: 'text'});
  }

  patchTicket(obj) {
    return this.http.patch(environment.BACKEND_LONG_IP + '/tickets', obj, {responseType: 'text'});
  }

  putTicket(obj) {
    return this.http.put(environment.BACKEND_LONG_IP + '/tickets', obj, {responseType: 'text'});
  }

  getActiveFailureCount() {
    return this.http.get(environment.BACKEND_LONG_IP + '/failures/active/count');
  }

  getActiveTicketCount() {
    return this.http.get(environment.BACKEND_LONG_IP + '/tickets/active/count');
  }

  getComments() {
    return this.http.get<Comment[]>(environment.BACKEND_LONG_IP + '/comments');
  }

  putComment(bod) {
    return this.http.put(environment.BACKEND_LONG_IP + '/comments', bod);
  }

  getAssignmentList() {
    return this.http.get<Assignment[]>(environment.BACKEND_LONG_IP + '/assignments');
  }

  deleteFailure(obj) {
    return this.http.delete(environment.BACKEND_LONG_IP + `/failures/${obj.id}`, {responseType: 'text'});
  }

  deleteTicket(obj) {
    return this.http.delete(environment.BACKEND_LONG_IP + `/tickets/${obj.id}`, {responseType: 'text'});
  }

}
