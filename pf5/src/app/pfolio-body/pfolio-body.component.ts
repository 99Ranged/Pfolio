import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-pfolio-body',
  templateUrl: './pfolio-body.component.html',
  styleUrls: ['./pfolio-body.component.scss']
})
export class PfolioBodyComponent implements OnInit {

  constructor() { }

  showdiv = false;
  inview = false;
  shownovavar = false;
  hidenovavar = false;
  ngOnInit()
  {
    $(document).ready(function () {
      $('.c3').viewportChecker({
        classToAdd: 'changecolor'
    });
  });

  }

  shownovanow()
  {
    this.hidenovavar = false;
    this.shownovavar = true;
    /*if(this.shownovavar = false)
      {
        this.hidenovavar = true;
      }*/
  }
  hidenovanow()
  {
    this.hidenovavar = true;
  }

}
