import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  @Input() rating: number; // Input decorator allows to get value from container
  starWidth: number;

  // Pass events from child to parent container

  // define event property ratingClicked with type EventEmitter
  // it pass a <string> to the parent
  // and set ratingClicked property to a new instance of EventEmitter
  // Decorate the event with the @Output decorator function
  // so the container can respond to event
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  onClick() {
    // use event property and its emit method passing string
    // this raises event to container and pass string
    // the container listens for and responds to the event 
    // using event binding in parent container
    this.ratingClicked.emit(`the rating ${this.rating} was clicked`);
    // console.log(`the rating ${this.rating} was clicked`);
  }
  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }
  faStar = faStar;
}
