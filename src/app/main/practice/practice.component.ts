import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { typeTask } from '../../types/types';

@Component({
  selector: 'app-practice',
  imports: [],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.scss'
})
export class PracticeComponent {
  activeCategory: string = '';
  activeTasks: typeTask[] = [];
  
  data = inject(DataService);

  async ngOnInit(): Promise<void> {
    // await this.data.loadTasks();

    await this.setActiveCategory('General');
  }

  async setActiveCategory(category: string): Promise<void> {
    this.activeCategory = category;
    this.activeTasks = await this.data.getTasksByCategory(category);
    // this.activeTasks = this.data.allTasks.filter(task => task.category === this.activeCategory);
  }
}
