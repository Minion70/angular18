import { Component, Input } from '@angular/core';
import { House } from '../house.interface';
import { houses } from '../houses.data';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-hosue',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './hosue.component.html',
  styleUrl: './hosue.component.css',
})
export class HosueComponent {
  @Input() house: House = houses[0];
  @Input() index = 0;
  houseClass() {
    if (this.house.id % 2) return 'odd';
    else return 'even';
  }
  houseStyle() {
    return {
      'background-image': 'url(' + this.house.photo + ')',
    };
  }
}
