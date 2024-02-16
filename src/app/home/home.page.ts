import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { doc, setDoc } from 'firebase/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ledstate:any;
  constructor(private db:Firestore) {}
  async BotonEA() {
    this.ledstate = !this.ledstate;
    this.ledstate = doc(this.db,'controlLED','LED1');
    await setDoc(this.ledstate  , { encender: this.BotonEA });
  }
  async encender() {
    this.ledstate = doc(this.db,'controlLED','LED1');
    await setDoc(this.ledstate, { encender: true });
}
}
