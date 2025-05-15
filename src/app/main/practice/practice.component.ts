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

  ngOnInit(): void {
    this.setActiveCategory('General');
  }

  setActiveCategory(category: string): void {
    this.activeCategory = category;
    this.selectTasks();
  }

  selectTasks(): void {
    if(this.activeCategory === 'General') {
      this.activeTasks = this.data.allGeneralTasks;
    } else if(this.activeCategory === 'Arrays') {
      this.activeTasks = this.data.allArrayTasks;
    } else if(this.activeCategory === 'Objects') {
      this.activeTasks = this.data.allObjectTasks;
    } else {
      this.activeTasks = this.data.allDomTasks;
    }
  }
}
