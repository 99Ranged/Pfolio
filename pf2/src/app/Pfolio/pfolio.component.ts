import { Component } from '@angular/core';

import { StyleSharingService } from "../stylesharing.service";
@Component({
  selector: 'pfolio-body',
  templateUrl: 'pfolio.component.html',
  styleUrls: ['./pfolio.component.scss']
})

export class PfolioComponent  {
  constructor(public styleservice: StyleSharingService) { }





}
