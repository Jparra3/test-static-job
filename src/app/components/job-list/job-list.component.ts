import { Component, OnInit, Input, inject } from '@angular/core';
import { Job } from 'src/app/models/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  @Input() job: Job = {} as Job;
  private jobService = inject(JobService);
  public tools: string[] = [];
  public filters: string[] = [];

  constructor(){}

  ngOnInit(): void {
    this.tools = [...this.job.languages, ...this.job.tools, this.job.level];
    this.jobService.getFilters().subscribe((response) => {
      this.filters = response;
    });
  }

  setFilter(filter: string) {
    this.filters = Array.from(new Set([...this.filters, filter]));
    this.jobService.filters.next(this.filters);
  }

}
