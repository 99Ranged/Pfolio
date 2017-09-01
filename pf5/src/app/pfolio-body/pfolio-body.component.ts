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
      $('.TextTitleLeft.comp').viewportChecker({


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





  //The counter to be used in the random char generator
  counter:number = 0;
  //Variable containing every random char generated
  randomletter:string = "";
  //Every possible character that comes into the "animation"
  possible = "ABCDEÊFGHIJKLMNOPQRSTUVWXYZ0123456789";
  //---------------------------------------------------------------------
  // Title strings
  //---------------------------------------------------------------------
  CompAcademicasTitle:string = 'COMPETÊNCIAS ACADÉMICAS';
  titlesarray=[this.CompAcademicasTitle,"ACADÉMICAS"];

  mixcolorboolean:boolean = false;

  colorsarray=["#65735F","#6FA657","#40403B","#39344D","#5F6073"];
  MyChangingColor = this.colorsarray[2];


  /*"*/

  returnchangename(indexoftitle:number, charindextochange:number, finalletter:string )
  {
    //A recursive calling of the generator function untill we reach counter maximum
    setTimeout(() => {
          //Checking if the current character of the word is a space
          if(this.titlesarray[indexoftitle].charAt(charindextochange) != ' ')
            {
              this.randomletter = this.possible.charAt(Math.floor(Math.random() * this.possible.length));
              //A method created to replace a character on any given word. We provide the index of the title,
              //the char index we want to change and the random letter to substitute it
              this.setCharAt(indexoftitle,charindextochange,this.randomletter);
              this.MyChangingColor = this.colorsarray[Math.floor(Math.random() * this.colorsarray.length)];
            }
      this.counter++;
      // How many times are we changing letters
      if(this.counter != 10)
      {
        this.returnchangename(indexoftitle,charindextochange,finalletter);
      }
      else
      {
        this.counter = 0;
        this.setCharAt(indexoftitle, charindextochange,finalletter);
        this.MyChangingColor = this.colorsarray[2];
      }
      // The timing between letter change
    }, 80);
  }

  changename(indexoftitle)
  {
    this.titleup = true;
    this.activatecircles();


    //Just checking which title I will be changing (they are inside the array titles)
    for(var k = 0; k<this.titlesarray[indexoftitle].length;k++)
     {
        //Method takes in Title index to be changed, the letter index to be changed
        //and the final letter that will appear
        this.returnchangename(indexoftitle, k,this.titlesarray[indexoftitle].charAt(k));
      }
  }

  setCharAt(tindex, index,chr) {
    this.titlesarray[tindex] = this.titlesarray[tindex].substring(0,index) + chr + this.titlesarray[tindex].substring(index+1);
  }



  //---------------------------------------------------
  //Animation vars and stuff
  //---------------------------------------------------
  circlecounter = 0;
    activatecircles()
    {

      setTimeout(() => {

        this.circleup[this.circlecounter] = true;
        if(this.circlecounter !=6)
          {
            this.activatecircles();
          }
          this.circlecounter++;

      },200);
    }
  titleup = false;
  circleup = [false, false, false, false, false];
  circle1up = false;
  circle2up = false;

}
