import { HosueComponent } from './hosue/hosue.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { houses } from './houses.data';
import { House } from './house.interface';
import { DatePipe, KeyValuePipe, NgFor, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HosueComponent,
    DatePipe,
    KeyValuePipe,
    SlicePipe,
    NgFor,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  houses: House[] = [...houses];
  title = 'blogApp';
  date = new Date(2000, 0, 1);
  data: House = houses[0];
  // inputValue = 'Angular18';
  // receiveClickEvent(value: string) {
  //   console.log("app is received the home's click event", value);
  // }
}
