import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HomeService {

  dataFunc(param) {
    if (param === 'hotel') {
      return {
        html: {
          h2: 'Готель',
          p1: 'Невеликий готель на дев\'ять двомісних номерів. В номерах є все необхідне для комфортного проживання - журнальний столик, шафа для одягу, телевізор, туалет із душем, а з вікна відкривається краєвид на озеро. У вартість номера входить постіль та рушник.',
          p2: 'Вартість за номер - 800 грн./доба.',
          ph: 'assets/images/slide-four.jpg'
        },
        imgs: [
          {src: 'assets/images/medium/hot-1-md.jpg', thumb: 'assets/images/thumbs/hot-1-thumb.jpg'},
          {src: 'assets/images/medium/hot-2-md.jpg', thumb: 'assets/images/thumbs/hot-2-thumb.jpg'},
          {src: 'assets/images/medium/hot-3-md.jpg', thumb: 'assets/images/thumbs/hot-3-thumb.jpg'},
          {src: 'assets/images/medium/hot-4-md.jpg', thumb: 'assets/images/thumbs/hot-4-thumb.jpg'},
          {src: 'assets/images/medium/hot-5-md.jpg', thumb: 'assets/images/thumbs/hot-5-thumb.jpg'},
          {src: 'assets/images/medium/hot-6-md.jpg', thumb: 'assets/images/thumbs/hot-6-thumb.jpg'},
          {src: 'assets/images/medium/hot-7-md.jpg', thumb: 'assets/images/thumbs/hot-7-thumb.jpg'},
          {src: 'assets/images/medium/hot-8-md.jpg', thumb: 'assets/images/thumbs/hot-8-thumb.jpg'}
        ]
      }
    } else if (param === 'kolyby') {
      return {
        html: {
          h2: 'Колиби',
          p1: 'Хочете заночувати великою компанією та по більш низькій ціні - значить вам потрібна колиба. Наші колиби розраховані на 4х осіб. У вартість також входить набор постілі та накритий столик з мангалом біля самої колиби.',
          p2: 'Вартість колиби - 1000 грн./добу.',
          ph: 'assets/images/slide-four.jpg'
        },
        imgs: [
          {src: 'assets/images/medium/kol-1-md.jpg', thumb: 'assets/images/thumbs/kol-1-thumb.jpg'},
          {src: 'assets/images/medium/kol-2-md.jpg', thumb: 'assets/images/thumbs/kol-2-thumb.jpg'},
          {src: 'assets/images/medium/kol-3-md.jpg', thumb: 'assets/images/thumbs/kol-3-thumb.jpg'},
          {src: 'assets/images/medium/kol-4-md.jpg', thumb: 'assets/images/thumbs/kol-4-thumb.jpg'},
          {src: 'assets/images/medium/kol-5-md.jpg', thumb: 'assets/images/thumbs/kol-5-thumb.jpg'},
          {src: 'assets/images/medium/kol-6-md.jpg', thumb: 'assets/images/thumbs/kol-6-thumb.jpg'},
          {src: 'assets/images/medium/kol-7-md.jpg', thumb: 'assets/images/thumbs/kol-7-thumb.jpg'},
          {src: 'assets/images/medium/kol-8-md.jpg', thumb: 'assets/images/thumbs/kol-8-thumb.jpg'}
        ]
      }
    } else if (param === 'altanki') {
      return {
        html: {
          h2: 'Альтанки',
          p1: 'Загалом на нашій базі розташовано 24 альтанки. Всі вони мають дашок, котрий захистить Вас та вашу компанію від палючого сонця вдень та від дощу у непогоду, та мангал. Обирайте самі місце відпочинку - у затінку на берегу озера чи на відкритій сонячній галявні.',
          p2: 'Вартість альтанки на 10, 20 чи 30 осіб - 400 грн, а палатка на 50 осіб - 1000 грн.',
          ph: 'assets/images/slide-four.jpg'
        },
        imgs: [
          {src: 'assets/images/medium/tab-1-md.jpg', thumb: 'assets/images/thumbs/tab-1-thumb.jpg'},
          {src: 'assets/images/medium/tab-2-md.jpg', thumb: 'assets/images/thumbs/tab-2-thumb.jpg'},
          {src: 'assets/images/medium/tab-3-md.jpg', thumb: 'assets/images/thumbs/tab-3-thumb.jpg'},
          {src: 'assets/images/medium/tab-4-md.jpg', thumb: 'assets/images/thumbs/tab-4-thumb.jpg'},
          {src: 'assets/images/medium/tab-5-md.jpg', thumb: 'assets/images/thumbs/tab-5-thumb.jpg'},
          {src: 'assets/images/medium/tab-6-md.jpg', thumb: 'assets/images/thumbs/tab-6-thumb.jpg'},
          {src: 'assets/images/medium/tab-7-md.jpg', thumb: 'assets/images/thumbs/tab-7-thumb.jpg'},
          {src: 'assets/images/medium/tab-8-md.jpg', thumb: 'assets/images/thumbs/tab-8-thumb.jpg'}
        ]
      }
    } else if (param === 'kafe') {
      return {
        html: {
          h2: 'Кафе-крамничка',
          p1: 'На території працює кафе-крамничка де продаються прохолодні напої та снеки.',
          p2: 'Таклж тут готують наші фірмові страви.',
          ph: 'assets/images/slide-four.jpg'
        },
        imgs: [
          {src: 'assets/images/medium/mag-1-md.jpg', thumb: 'assets/images/thumbs/mag-1-thumb.jpg'},
          {src: 'assets/images/medium/mag-2-md.jpg', thumb: 'assets/images/thumbs/mag-2-thumb.jpg'},
          {src: 'assets/images/medium/mag-3-md.jpg', thumb: 'assets/images/thumbs/mag-3-thumb.jpg'},
          {src: 'assets/images/medium/mag-4-md.jpg', thumb: 'assets/images/thumbs/mag-4-thumb.jpg'},
          {src: 'assets/images/medium/mag-5-md.jpg', thumb: 'assets/images/thumbs/mag-5-thumb.jpg'},
          {src: 'assets/images/medium/mag-6-md.jpg', thumb: 'assets/images/thumbs/mag-6-thumb.jpg'},
          {src: 'assets/images/medium/mag-7-md.jpg', thumb: 'assets/images/thumbs/mag-7-thumb.jpg'},
          {src: 'assets/images/medium/mag-8-md.jpg', thumb: 'assets/images/thumbs/mag-8-thumb.jpg'}
        ]
      }
    } else if (param === 'sauna') {
      return {
        html: {
          h2: 'Сауна',
          p1: 'Наша сауна на дровах розрахована на 6 осіб.',
          p2: 'Вартість сауни - 350 грн./год.',
          ph: 'assets/images/slide-four.jpg'
        },
        imgs: [
          {src: 'assets/images/medium/sau-1-md.jpg', thumb: 'assets/images/thumbs/sau-1-thumb.jpg'},
          {src: 'assets/images/medium/sau-2-md.jpg', thumb: 'assets/images/thumbs/sau-2-thumb.jpg'},
          {src: 'assets/images/medium/sau-3-md.jpg', thumb: 'assets/images/thumbs/sau-3-thumb.jpg'},
        ]
      }
    } else if (param === 'prices') {
      return {
        html: {
          h2: 'Ціни',
          p1: 'Наші ціни є досить демократичними',
          p2: '',
          ph: 'assets/images/slide-four.jpg'
        },
        imgs: [
          {src: 'assets/images/medium/pri-2-md.jpg', thumb: 'assets/images/thumbs/pri-2-thumb.jpg'},
          {src: 'assets/images/medium/pri-2-md.jpg', thumb: 'assets/images/thumbs/pri-2-thumb.jpg'},
          {src: 'assets/images/medium/pri-3-md.jpg', thumb: 'assets/images/thumbs/pri-3-thumb.jpg'},
          {src: 'assets/images/medium/pri-4-md.jpg', thumb: 'assets/images/thumbs/pri-4-thumb.jpg'},
        ]
      }
    // FOR MAIN PAGE
    }else if (param === 'main') {
      return {
        html: {
          h2: 'База відпочинку Альбатрос',
          p1: 'Втомились від шаленного ритму великого міста та щоденної рутини, скучили за свіжим повітрям та мальовничою природою - тоді ми запрошуємо Вас відвідати базу-відпочинку "Альбатрос".',
          p2: 'Ми розташовані неподалік від Львова, в кількох кілометрах від смт Брюховичі, у селі Воля-Гомулецька. ',
          ph: 'assets/images/slide-one-square.jpg'
        },
        imgs: [{src: '', thumb: ''}]}
    } else {
      console.warn(param);
      console.info('Home service: Error - "else" statement, param: ', param);
      return {
        html: { h2: '', p1: '', p2: '', ph: ''},
        imgs: [{src: '', thumb: ''}]}
    }
  }

  // Observable string sources as __set__
  private textSourse = new Subject();
  textSetter(argm: string) {
    let pageData = this.dataFunc(argm);
    this.textSourse.next(pageData);
  }

  // Observable string streams as __get__
  textGetter = this.textSourse.asObservable();

}
