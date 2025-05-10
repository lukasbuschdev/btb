import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import { typeTask } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  http = inject(HttpClient);
  config = inject(ConfigService);

  allTasks: typeTask[] = [];

  fetchData(): Observable<typeTask[]> {
    return this.http.get<typeTask[]>(`${this.config.supabaseUrl}/rest/v1/tasks`, {
      headers: {
        apiKey: this.config.supabaseKey, 
        Authorization: `Bearer ${this.config.supabaseKey}`
      }
    });
  }

}
