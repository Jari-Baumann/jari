import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  htmlSkill: number = 60;
  cssSkill: number = 70;
  jsSkill: number = 30;
  tsSkill: number = 90;
  angularSkill: number = 80;
  javaSkill: number = 70;
  springSkill: number = 60;
  
  progressTo100(value: number): number {
    return 100 - value;
  }
}
