import { Component, OnInit, inject } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-filter',
  templateUrl: './job-filter.component.html',
  styleUrls: ['./job-filter.component.scss']
})
export class JobFilterComponent implements OnInit {

  private jobService = inject(JobService);
  public filters: string[] = [];

  constructor(){

  }

  ngOnInit(): void {
    this.jobService.getFilters().subscribe((response) => {
      this.filters = response;
    });
  }

  deleteFilter(filter: string) {
    this.filters = this.filters.filter((item) => item != filter);
    this.jobService.filters.next(this.filters);
  }

  removeAllFilters() {
    this.filters = [];
    this.jobService.filters.next(this.filters);
  }

}
