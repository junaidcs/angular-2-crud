import { 
  Component, 
  OnInit,
  trigger,
  style,
  animate,
  state,
  transition
} from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('lightOnOf', [
      state('on', style({
        background: 'white'
      })),
      state('off', style({
        background: 'black'
      })),
      transition('on => off', [animate('2000ms 500ms ease-in', style({transform: 'rotate(90deg)'}))]),
      transition('off => on', [animate('2s ease-out', style({transform: 'rotate(-90deg)'}))])
    ])
  ]
})
export class AnimationComponent implements OnInit {

  lightState: string = 'off';

  constructor() { }

  ngOnInit() {
  }

  toggleLights() {
    this.lightState = (this.lightState === 'off') ? 'on' : 'off';
  }

}
