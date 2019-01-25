import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DataService} from '../../services/data.service';
import {Failure} from '../../models/failure';
import * as moment from 'moment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-failure-list',
  templateUrl: './failure-list.component.html',
  styleUrls: ['./failure-list.component.css']
})
export class FailureListComponent implements OnInit {
  @Input() title_in = 'Failures';
  @Input() paginationSizes = [5, 10, 20];
  @Input() filterType = 'none';
  failureList: Failure[];
  failureListTableData: MatTableDataSource<Failure> = new MatTableDataSource();
  columnsToDisplay = ['id', 'name', 'created'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: DataService, private router: Router) {
  }

  applyFilter(filterValue: string) {
    this.failureListTableData.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.failureListTableData.paginator = this.paginator;
    this.failureListTableData.sort = this.sort;
    if (this.filterType === 'open-only') {
      this.dataService.getActiveFailureList()
        .subscribe(data => {
          data = data.map(obj => {
            obj.created = moment(obj.created).format('LLL');
            return obj;
          });
          this.failureList = data;
          this.failureListTableData.data = this.failureList;
        });
    } else {
      this.dataService.getFailureList()
        .subscribe(data => {
          data = data.map(obj => {
            obj.created = moment(obj.created).format('LLL');
            return obj;
          });
          this.failureList = data;
          this.failureListTableData.data = this.failureList;
        });
    }
  }

  goToDetails(row: any) {
    this.router.navigate(['/app/failure/' + String(row.id)]);
  }

}
