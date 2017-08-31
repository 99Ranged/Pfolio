import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  framewidthnum = 560;
  framewidth = this.framewidthnum + 'px';
  frameheight = '315px';

  @HostListener('window:resize')
  onResize() {
    if(window.innerWidth < this.framewidthnum)
      {
        this.framewidth = window.innerWidth + 'px';
        this.frameheight = window.innerWidth/1.77 + 'px';
      }
  }
}
