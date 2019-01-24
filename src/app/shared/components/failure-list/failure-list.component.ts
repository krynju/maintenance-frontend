import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DataService} from '../../services/data.service';
import {Failure} from '../../models/failure';

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

  constructor(private dataService: DataService) {
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

          this.failureList = data;
          this.failureListTableData.data = this.failureList;
        });
    } else {
      this.dataService.getFailureList()
        .subscribe(data => {
          this.failureList = data;
          this.failureListTableData.data = this.failureList;
        });
    }
  }

}
