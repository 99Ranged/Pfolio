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
    this.shownovavar = true;
  }
  hidenovanow()
  {
    this.shownovavar = false;
  }

}
