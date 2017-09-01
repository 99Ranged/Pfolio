import { Component } from '@angular/core';

import { StyleSharingService } from "../stylesharing.service";
@Component({
  selector: 'pfolio-head',
  templateUrl: 'pfolio.component.html',
  styleUrls: ['./pfolio.component.scss']
})

export class PfolioComponent  {
  constructor(public styleservice: StyleSharingService) { }

  stopchanging:boolean = false;
  counter:number = 0;
  randomletter:string = "";
  namegoeshere:string = 'COMPETÊNCIAS ACADÉMICAS';
  newnamegoeshere:string = '';
  possible = "ABCDEÊFGHIJKLMNOPQRSTUVWXYZ0123456789";

  setCharAt(index,chr) {
    this.namegoeshere = this.namegoeshere.substring(0,index) + chr + this.namegoeshere.substring(index+1);
  }

  returnchangename(indextochange:number, finalletter:string )
  {
    setTimeout(() => {
      //Loop to go through all string
     // for(var z = 0; z<this.namegoeshere.length;z++)
        //{
          //Check if caracter is a space, if so, don't change it
          if(this.namegoeshere.charAt(indextochange) != ' ')
            {
              this.randomletter = this.possible.charAt(Math.floor(Math.random() * this.possible.length));
              //This will replace a character in the random string
              this.setCharAt(indextochange,this.randomletter);
            }

        //}
      /*this.randomletter = this.possible.charAt(Math.floor(Math.random() * this.possible.length));
      //This will replace a character in the random string
      this.setCharAt(0,this.randomletter);
      //This will replace a character in the random string
      this.randomletter = this.possible.charAt(Math.floor(Math.random() * this.possible.length));
      this.setCharAt(1,this.randomletter);*/
      this.counter++;
      // How many times are we changing letters
      if(this.counter != 15)
      {
        this.returnchangename(indextochange,finalletter);
      }
      else
      {
        this.counter = 0;
        this.setCharAt(indextochange,finalletter);
      }
      // The timing between letter change
    }, 80);
  }



  changename()
  {
    for(var k = 0; k<this.namegoeshere.length;k++)
     {
       // setTimeout(() =>
       // {
          //execute rotate for a given index
          //Method takes in letter index to be changed and the letter that is supposed to be in the end
        this.returnchangename(k,this.namegoeshere.charAt(k));

        //Time delay between character rotate finish
       // }, 100);
      }

       // this.returnchangename();

  }

}
