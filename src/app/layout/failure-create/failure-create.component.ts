import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/services/data.service';
import {Location} from '@angular/common';
import {Failure} from '../../shared/models/failure';

@Component({
  selector: 'app-failure-create',
  templateUrl: './failure-create.component.html',
  styleUrls: ['./failure-create.component.scss']
})
export class FailureCreateComponent implements OnInit {
  failure: Failure = {} as Failure;

  constructor(
    private dataService: DataService,
    private location: Location,
  ) { }

  ngOnInit() {
  }

  save() {
    this.dataService.putFailure(this.failure).subscribe(() => this.close());
  }

  close() {
    this.location.back();
  }

}
