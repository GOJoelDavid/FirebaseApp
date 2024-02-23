import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { doc, setDoc } from 'firebase/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ledstate:boolean = false;
  ruta:any
  constructor(private db:Firestore) {}
  async BotonEA() {
    this.ledstate = !this.ledstate;
    this.ruta = doc(this.db,'controlLED','LED1');
    await setDoc(this.ruta  , { encender: this.ledstate });
  }
//   async encender() {
//     this.ledstate = doc(this.db,'controlLED','LED1');
//     await setDoc(this.ledstate, { encender: this.ledstate });
// }
}
