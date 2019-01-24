import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../shared/services/data.service';
import {Ticket} from '../../../shared/models/Ticket';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  ticketList: Ticket[];
  ticketListTableData: MatTableDataSource<Ticket> = new MatTableDataSource(this.ticketList);
  columnsToDisplay = ['id'];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {

    this.dataService.getTicketList()
      .subscribe(data => {
        this.ticketList = data;
        this.ticketListTableData = new MatTableDataSource<Ticket>(this.ticketList);

      });
  }

}
