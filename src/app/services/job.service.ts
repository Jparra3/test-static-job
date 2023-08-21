import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Job } from '../models/job';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private url;
  public filters = new BehaviorSubject<string[]>([]);

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  getJobs(): Observable<Job[]>{
    return this.http
    .get<Job[]>(this.url);
  }

  getFilters(){
    return this.filters.asObservable();
  }
}
