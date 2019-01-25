import { Component, OnInit } from '@angular/core';
import {Failure} from '../../shared/models/failure';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../shared/services/data.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-failure-edit',
  templateUrl: './failure-edit.component.html',
  styleUrls: ['./failure-edit.component.scss']
})
export class FailureEditComponent implements OnInit {
  failure: Failure;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location,
  ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.dataService.getFailureList().subscribe(list => {
      this.failure = list.find((obj) => obj.id === id);
    });
  }

  save() {
    this.dataService.patchFailure(this.failure).subscribe(() => this.close());
  }

  close() {
    this.location.back();
  }

}
