import { Component, OnInit } from '@angular/core';

import *as dfd from "danfojs";


@Component({
  selector: 'app-model10',
  templateUrl: './model10.component.html',
  styleUrls: ['./model10.component.sass']
})
export class Model10Component implements OnInit {

  ngOnInit(): void {
    this.run();
  }

  async run() {
    // const df = await dfd.readCSV("./assets/titanic data/train.csv");
    const df = await dfd.readCSV("https://docs.google.com/spreadsheets/d/e/2PACX-1vTDKT_bkGRbq2YG9injvABNihk6lXaQNsft5ZujQ7PWJ8v1bTjeulcT91JQ9j-w-ds8milOV8mR7Xjn/pub?gid=0&single=true&output=csv");

    df.head().print();
    df.describe().print();

  }

}
