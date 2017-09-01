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

  titlesarray=[this.namegoeshere,"belh"];


  setCharAt(tindex, index,chr) {
    this.titlesarray[tindex] = this.titlesarray[tindex].substring(0,index) + chr + this.titlesarray[tindex].substring(index+1);
  }

  returnchangename(indexoftitle:number, charindextochange:number, finalletter:string )
  {
    setTimeout(() => {
      //Loop to go through all string
     // for(var z = 0; z<this.namegoeshere.length;z++)
        //{
          //Check if caracter is a space, if so, don't change it
          if(this.titlesarray[indexoftitle].charAt(charindextochange) != ' ')
            {
              this.randomletter = this.possible.charAt(Math.floor(Math.random() * this.possible.length));
              //This will replace a character in the random string
             // this.stringtochange = stringtochange.substring(0,indextochange) + this.randomletter + stringtochange.substring(indextochange+1);
              this.setCharAt(indexoftitle,charindextochange,this.randomletter);
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
        this.returnchangename(indexoftitle,charindextochange,finalletter);
      }
      else
      {
        this.counter = 0;
        this.setCharAt(indexoftitle, charindextochange,finalletter);
      }
      // The timing between letter change
    }, 40);
  }



  changename(indexoftitle)
  {
    alert(indexoftitle);
    //this.titlesarray[indexoftitle] = "cocoxixi";
    //stringtochange = 'cocoxixi';
    for(var k = 0; k<this.titlesarray[indexoftitle].length;k++)
     {
       // setTimeout(() =>
       // {
          //execute rotate for a given index
          //Method takes in letter index to be changed and the letter that is supposed to be in the end
        this.returnchangename(indexoftitle, k,this.titlesarray[indexoftitle].charAt(k));

        //Time delay between character rotate finish
       // }, 100);
      }

       // this.returnchangename();

  }

}
