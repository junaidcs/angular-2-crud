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
      transition('on => off', [animate('2000ms ease-in', style({transform: 'rotate(90deg)'}))]),
      transition('off => on', [animate('2s ease-out', style({transform: 'rotate(-90deg)'}))])
    ]),
    trigger('circleLeftRight', [
      state('left', style({
        marginLeft: '0px'
      })),
      state('right', style({
        marginLeft: '100px'
      })),
      transition('left => right', animate('2s')),
      transition('right => left', animate('2s'))
    ]),
    trigger('divText', [
      transition(':enter', [        
        style({transform: 'translateX(-100%)'}),
        animate('1s'),
      ]),
      transition(':leave', [
        animate('1s', style({transform: 'translateX(100%)'}))
        //style({transform: 'translateX(100%)'}),
        //animate('1s'),
        
        
      ])
    ])
  ]
})
export class AnimationComponent implements OnInit {

  lightState: string = 'off';
  boxState: string = 'left';
  showDIv: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleLights() {
    this.lightState = (this.lightState === 'off') ? 'on' : 'off';
  }

  moveBoxBtn() {
    this.boxState = (this.boxState === 'left') ? 'right' : 'left';
  }

  moveBox() {
    this.boxState = (this.lightState === 'on') ? 'right' : 'left';
    this.showDIv = this.showDIv ? false : true;
  }

  animationStarted(event: any) {
    console.log('Animation Started');
    console.log(event.fromState);
    console.log(event.toState);
    console.log(event.totalTime);
    console.log('------');
  }

  animationEnded(event: any) {
    console.log(event.fromState);
    console.log(event.toState);
    console.log(event.totalTime);
    console.log('Animation Ended'); 
    this.moveBox();   
  }

  circleAnimationStarted(event: any) {
    console.log('\nBox Animation Started');
    console.log(event.fromState);
    console.log(event.toState);
    console.log(event.totalTime);
    console.log('------');
  }

  circleAnimationEnded(event: any) {
    console.log(event.fromState);
    console.log(event.toState);
    console.log(event.totalTime);
    console.log('Box Animation Ended');    
  }

  

}
