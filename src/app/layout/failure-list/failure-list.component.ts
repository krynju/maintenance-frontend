import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DataService} from '../../shared/services/data.service';
import {Failure} from '../../shared/models/failure';

@Component({
  selector: 'app-failure-list',
  templateUrl: './failure-list.component.html',
  styleUrls: ['./failure-list.component.css']
})
export class FailureListComponent implements OnInit {
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
    // this.dataService.getActiveFailureList()
    //   .subscribe(data => {
    //
    //     this.failureList = data;
    //     this.failureListTableData.data = this.failureList;
    //   });
    // todo uncomment this after api is done

    this.failureList = [{'id': 2, 'name': 'hey', 'created': 'now', 'description': 'ye'},
      {'id': 2, 'name': 'hey', 'created': 'now', 'description': 'ye'}];
    this.failureListTableData.data = this.failureList;
  }

}
