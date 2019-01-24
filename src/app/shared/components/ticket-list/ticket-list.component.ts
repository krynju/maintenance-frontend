import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Ticket} from '../../models/ticket';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  @Input() title_in = 'Tickets';
  @Input() filterType = 'none';
  @Input() paginationSizes = [5, 10, 20];
  ticketList: Ticket[];
  ticketListTableData: MatTableDataSource<Ticket> = new MatTableDataSource();
  columnsToDisplay = ['id', 'name', 'status'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: DataService) {
  }

  applyFilter(filterValue: string) {
    this.ticketListTableData.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.ticketListTableData.paginator = this.paginator;
    this.ticketListTableData.sort = this.sort;
    this.dataService.getTicketList()
      .subscribe(data => {
        if (this.filterType === 'open-only') {
          this.ticketList = data.filter(x => x.status !== 'zakończone');
        } else {
          this.ticketList = data;
        }
        this.ticketListTableData.data = this.ticketList;
      });
  }

}
