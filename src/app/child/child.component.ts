import { Dog } from './../app.component';
import {
  AfterContentInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  inputText: string;
  @Input()
  inputDog: Dog;
  show = true;

  constructor () {
  }

  /**
   * Uruchamia sie na poczatku, przed ngOnInit
   * Sprawdza czy zmienily sie zbindowane pola komponentu.
   * Musi zmienic sie referencja!
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges - uruchomione! - #1');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOninit - uruchomione! - #2');
    this.inputDog.name = 'Inne imie';
  }

  /**
   * Uruchamia sie przy kazdej zmienie, wylowaniu eventa etc
   */
  ngDoCheck(): void {
    console.log('ngDoCheck - uruchomione! - #3');
  }

  /**
   * Uruchamia isepo inicjalizacji np <ng-content>
  */
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - uruchomione! - #4');
  }

  /**
   * Uruchamia sie po kazdej zmianie np <ng-content>
   */
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChcecked - uruchomione! - #5');
  }

  /**
   * Uruchamia ise po inicjalizacji widoku
   */
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - uruchomione! - #6');
  }

  /**
   * Uruchamia sie po kazdej zmienie widoku
   */
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked - uruchomione! - #7');
  }

  /**
   * Uruchamia sie po kazdej zmienie w widoku
   */
  ngOnDestroy(): void {
    console.log('ngOnDestroy - uruchomione! - #8');
  }

  content() {
    this.show = !this.show;
  }


}
