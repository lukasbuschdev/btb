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
  
  public allArrayTasks: typeTask[] = [];
  public allObjectTasks: typeTask[] = [];
  public allDomTasks: typeTask[] = [];
  public allGeneralTasks: typeTask[] = [];
  public categories: string[] = [];

  constructor(private config: ConfigService) {
    this.supabase = createClient(
      this.config.supabaseUrl,
      this.config.supabaseKey
    );
  }

  public async loadTasks(): Promise<void> {
    const { data } = await this.supabase.from('tasks').select('*');
    this.allTasks = data ?? [];

    this.getTasksOfCategories();
    this.getCategories();
  }

  getTasksOfCategories(): void {
    this.allArrayTasks = this.allTasks.filter(task => task.category === 'Arrays');
    this.allObjectTasks = this.allTasks.filter(task => task.category === 'Objects');
    this.allDomTasks = this.allTasks.filter(task => task.category === 'DOM');
    this.allGeneralTasks = this.allTasks.filter(task => task.category === 'General');
  }

  getCategories(): void {
    this.categories = [...new Set(this.allTasks.map(task => task.category))];
  }
}
