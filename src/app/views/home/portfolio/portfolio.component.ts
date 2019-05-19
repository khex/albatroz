import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector:    'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls:  ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  @Input('backgroundGray') public backgroundGray;

  cardData = [
    {
      name: 'Готель', image: 'assets/images/about-hotel.jpg', link: '/uk/hotel',
      text: 'На території комплексу розташований готель з девятьма затишними номерами.'
    }, {
      name: 'Колиби', image: 'assets/images/about-kolyby.jpg', link: '/uk/kolyby',
      text: 'Невеликі колиби в карпатському стилі розраховані на чотирьох чоловік.'
    }, { 
      name: 'Альтанки', image: 'assets/images/about-stolyk.jpg', link: '/uk/altanki',
      text: 'З мангалом та дашком, щоб яскраве сонце чи дощ не зупсували Ваш відпочинок.'
    }, { 
      name: 'Кафе-Крамничка', image: 'assets/images/about-kafe.jpg', link: '/uk/kafe',
      text: 'Тут можна придбати проходжуючі напої та скуштувати свіжоприготовані страви.'
    }, { 
      name: 'Сауна', image: 'assets/images/about-sauna.jpg', link: '/uk/sauna',
      text: 'Пропонуємо доповнити Ваш відпочинок у нашій лазні на дровах.'
    }, { 
      name: 'Озеро', image: 'assets/images/about-lake.jpg', link: '/',
      text: 'Наша база відпочинку розташована на березі мальовничого озера.'
    }
  ];

  constructor() { }

  ngOnInit() { }

}
