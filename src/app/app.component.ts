import { Component, inject } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { FooterComponent } from "./footer/footer.component";
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  data = inject(DataService);
  
  async ngOnInit(): Promise<void> {
    this.data.loadTasks();
  }
}
