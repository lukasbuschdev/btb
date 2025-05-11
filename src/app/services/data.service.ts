import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { typeTask } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private supabase: SupabaseClient;
  public allTasks: typeTask[] = [];

  constructor(private config: ConfigService) {
    this.supabase = createClient(
      this.config.supabaseUrl,
      this.config.supabaseKey
    );

    this.loadTasks();
  }

  public async loadTasks(): Promise<void> {
    const { data } = await this.supabase.from('tasks').select('*');
    this.allTasks = data ?? [];
  }
}
