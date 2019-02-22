import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
 
@Injectable({ providedIn: 'root' })
export class HomeTwoService {

  dataFunc(param) {
    if (param === 'hotel') {
      return {
        html: '\
          <h2><strong>Готель</strong></h2>\
          <p>Невеликий готель на дев\'ять двомісних номерів. В номерах є все необхідне для\
          комфортного проживання - журнальний столик, шафа для одягу, телевізор, туалет із\
          душем, а з вікна відкривається краєвид на озеро. У вартість номера входить постіль\
          та рушник.</p>\
          <p>Вартість за номер - 350 грн./доба.</p>',
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
        html: '\
          <h2><strong>Колиби</strong></h2>\
          <p>Хочете заночувати великою компанією та по більш низькій ціні - значить вам\
          потрібна колиба. Наші колиби розраховані на 4х чоловік. У вартість також входить\
          набор постілі та накритий столик з мангалом біля самої колиби.</p>\
          <p>Вартість колиби - 600 грн./добу.</p>',
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
        html: '\
          <h2><strong>Колиби</strong></h2>\
          <p>Загалом на нашій базі розташовано 24 столика на 10, 20 та 30 чоловік. Всі вони\
          мають дашок, котрий захиститьВас та вашу компанію від палючого сонця вдень та від\
          дощу у непогоду, та мангал. Обирайте самі місце відпочинку - у затінку на берегу\
          озера чи на відкритій сонячній галявні.\
          <p>Вартість будь-якого столика - 400 грн.</p>\
          <p>Вартість в\'язки дров - 50 грн.</p>',
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
        html: '\
          <h2><strong>Кафе</strong></h2>\
          <p>Хочете заночувати великою компанією та по більш низькій ціні - значить вам\
          потрібна колиба. Наші колиби розраховані на 4х чоловік. У вартість також входить\
          набор постілі та накритий столик з мангалом біля самої колиби.</p>\
          <p>Вартість колиби - 600 грн./добу.</p>',
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
        html: '\
          <h2><strong>Сауна</strong></h2>\
          <p>Текст про сауну.</p>\
          <p>Вартість колиби - 200 грн./год.</p>',
        imgs: [
          {src: 'assets/images/medium/sna-1-md.jpg', thumb: 'assets/images/thumbs/sna-1-thumb.jpg'},
        ]
      }
    } else {
      return {html: '', imgs: [{src: '', thumb: ''}]}
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
