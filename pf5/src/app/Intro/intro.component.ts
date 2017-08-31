import { Component,trigger, transition, style, animate  } from '@angular/core';
import { StyleSharingService } from "../stylesharing.service";

@Component({
  selector: 'intro-app',
  templateUrl: 'intro.component.html',
  styleUrls: ['./intro.component.scss'],

})

export class IntroComponent  {
  constructor(public styleservice: StyleSharingService) { }

  show=false;
  begone = false;

  waitup()
  {
    setTimeout(() => {
      this.begone=true;
      this.styleservice.blureffect = true;
    }, 1300);


  }


}
