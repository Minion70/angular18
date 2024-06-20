import { HosueComponent } from './hosue/hosue.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { houses } from './houses.data';
import { House } from './house.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HosueComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  houses: House[] = [...houses];
  title = 'blogApp';
  // inputValue = 'Angular18';
  // receiveClickEvent(value: string) {
  //   console.log("app is received the home's click event", value);
  // }
}
