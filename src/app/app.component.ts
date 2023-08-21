import { Component, OnInit, inject} from '@angular/core';
import { JobService } from './services/job.service';
import { Job } from './models/job';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private jobService = inject(JobService);
  jobs: Job[] = [];
  filters: string[] = [];
  loading: boolean = false;
  messageError: string = '';

  constructor(){
  }

  ngOnInit(): void {
    this.jobService.getFilters().subscribe((responseFilter) => {
      this.filters = responseFilter;
      this.loading = true;
      this.jobService.getJobs().subscribe((response: Job[]) => {
          if (this.filters.length !== 0) {
            this.jobs = response.filter((item) =>
              this.filters.every((r) =>
                [...item.tools, ...item.languages, item.level].includes(r)
              )
            );
            this.loading = false;
          } else {
            this.jobs = response;
            this.loading = false;
          }
        }/* ,
        (error) => {
          this.messageError = error;
          this.loading = false;
        } */
      );
    });
  }
}
