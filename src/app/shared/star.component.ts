import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

/* 02 -what makes this class a component */
@Component ({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})


/* 01 -When we create component, it is the first thing to take care of => EXPORT the class Name */
export class StarComponent implements OnChanges {

  /* (passing data to a nested component using an Input decorator)
   * anytime it needs input data from its container
   * any type of component can be decorated with a input
   * => must be attached to a property of an type
   * => prefix with @ ; suffix with ()
   */
  @Input() rating: number = 4;
  starWidth: number;

  /* use of Output decorator
   * anytime it needs to raise events and optionally pass information back to its container
   * => must be attached to a property ddeclared as an EventEmitter
   * => use the generic argument to define the event payload type
   * => use the new keyword to create an instance of the EventEmitter
   * => prefix with @ ; suffix with ()
   */
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    console.log('the rating ${this.rating} was clicked!');
  }
}
