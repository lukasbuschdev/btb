import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { typeTask } from '../types/types';
import Dexie, { Table } from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class DataService extends Dexie {
  private supabase: SupabaseClient;
  tasks!: Table<typeTask, number>;

  public allTasks: typeTask[] = [];
  public categories: string[] = [];


  constructor(private config: ConfigService) {
    super('taskDatabase');

    this.supabase = createClient(
      this.config.supabaseUrl,
      this.config.supabaseKey
    );

    this.version(1).stores({
      tasks: 'id, category',
    });
  }

  async addTask(task: typeTask): Promise<void> {
    await this.tasks.put(task);
  }

  async getTasksByCategory(category: string): Promise<typeTask[]> {
    return this.tasks.where('category').equals(category).toArray();
  }

  public async loadTasks(): Promise<void> {
    const { data } = await this.supabase.from('tasks').select('*');
    this.allTasks = data ?? [];
    console.log(this.allTasks)

    await this.tasks.bulkPut(this.allTasks); 

    this.getCategories();
  }

  getCategories(): void {
    this.categories = [...new Set(this.allTasks.map(task => task.category))];
  }
}
