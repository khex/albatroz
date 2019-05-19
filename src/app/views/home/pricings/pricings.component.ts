import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector:    'app-pricings',
  templateUrl: './pricings.component.html',
  styleUrls:  ['./pricings.component.scss']
})
export class PricingsComponent implements OnInit {

  @Input('backgroundGray') public backgroundGray;
  isAnnualSelected: boolean = false;

  priceData = [
    {
      name: 'Вхід',
      text: ['Доросді - 30 грн.', 'Діти - безкоштовно', 'Стоянка - 20 грн.']
    }, {
      name: 'Проживання',
      text: ['Готель 2х місний 350 грн./доба', 'Колиба на 4 ліжка 600 грн./доба']
    }, {
      name: 'Альтанки',
      text: ['На 10 чоловік 400 грн.', 'На 20 чоловік 400 грн.', 'На 30 чоловік 400 грн.', 'На 40 чоловік 400 грн.']
    }, { 
      name: 'Сауна',
      text: ['Одна година - 250 грн.', 'Простирало - 30 грн.']
    }
  ];

  constructor() { }

  ngOnInit() { }

}
