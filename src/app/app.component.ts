import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { FooterComponent } from "./footer/footer.component";
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainComponent, FooterComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'btb';
}
