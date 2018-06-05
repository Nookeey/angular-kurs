import { Injectable } from '@angular/core';
import { locateHostElement } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class ClickService {

  sumClicks = 0;

  constructor() { }

  addClicks() {
    this.sumClicks += 1;
    console.log('Suma: ' + this.sumClicks);
  }
}
