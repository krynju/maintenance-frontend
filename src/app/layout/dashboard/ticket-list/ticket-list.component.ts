import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../../shared/services/data.service';
import {Ticket} from '../../../shared/models/Ticket';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  ticketList: Ticket[];
  ticketListTableData: MatTableDataSource<Ticket> = new MatTableDataSource();
  columnsToDisplay = ['id', 'name', 'status'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.ticketListTableData.paginator = this.paginator;
    this.ticketListTableData.sort = this.sort;
    console.log(this.sort);
    this.dataService.getTicketList()
      .subscribe(data => {
        this.ticketList = data;
        this.ticketListTableData.data = data;
      });
  }

}
