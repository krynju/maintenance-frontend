import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {Ticket} from '../../models/ticket';
import {DataService} from '../../services/data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  @Input() mode;
  @Input() title_in = 'Tickets';
  @Input() filterType = 'none';
  @Input() paginationSizes = [5, 10, 20];
  ticketList: Ticket[];
  ticketListTableData: MatTableDataSource<Ticket> = new MatTableDataSource();
  columnsToDisplay = ['id', 'name', 'status', 'created'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: DataService, private router: Router) {
  }

  applyFilter(filterValue: string) {
    this.ticketListTableData.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {

    this.ticketListTableData.paginator = this.paginator;
    this.ticketListTableData.sort = this.sort;
    if (this.mode) {
      this.dataService.getTicketList()
        .subscribe(data => {
          data = data.map(obj => {
            obj.created = moment(obj.created).format('LLL');
            return obj;
          });
          if (this.filterType === 'open-only') {
            this.ticketList = data.filter(x => x.status !== 'zakończone');
          } else {
            this.ticketList = data;
          }
          this.ticketListTableData.data = this.ticketList;
        });
    } else {
      // todo user mode
      this.dataService.getTicketList()
        .subscribe(data => {
          data = data.map(obj => {
            obj.created = moment(obj.created).format('LLL');
            return obj;
          });
          console.log(data);
          this.dataService.getAssignmentList()
            .subscribe(data2 => {
                console.log(data2);
                this.ticketList = data
                  .filter(x => {
                    const elem = data2.find(re => re.user === JSON.parse(localStorage.getItem('userData')).id);
                    console.log(x.id === elem.ticket);
                    return x.id === elem.ticket;
                  });
                console.log(this.ticketList);
                this.ticketListTableData.data = this.ticketList;

              }
            );
        });
    }


  }


  goToDetails(row: any) {
    this.router.navigate(['/app/ticket/' + String(row.id)]);
  }
}
