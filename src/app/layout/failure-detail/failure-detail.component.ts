import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/services/data.service';
import {Failure} from '../../shared/models/failure';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-failure-detail',
  templateUrl: './failure-detail.component.html',
  styleUrls: ['./failure-detail.component.scss']
})
export class FailureDetailComponent implements OnInit {
  failure: Failure;
  allowedFlag: boolean = JSON.parse(localStorage.getItem('userData')).level === 0;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.dataService.getTicketList().subscribe(list => {
      this.failure = list.find((obj) => obj.id === id);
    });
  }

  edit() {
    this.router.navigate(['/app/failure-edit/' + String(this.route.snapshot.paramMap.get('id'))]);
  }

}
