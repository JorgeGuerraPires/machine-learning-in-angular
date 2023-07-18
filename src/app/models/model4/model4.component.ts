import { Component, OnInit } from '@angular/core';


import *as cocoSsd from "@tensorflow-models/coco-ssd";
import *as tf from "@tensorflow/tfjs";




@Component({
  selector: 'app-model4',
  templateUrl: './model4.component.html',
  styleUrls: ['./model4.component.sass']
})
export class Model4Component implements OnInit {

  ngOnInit(): void {

    this.run();

  }

  run() {

    tf.ready().then(() => {
      const modelPath =
        "https://tfhub.dev/tensorflow/tfjs-model/ssd_mobilenet_v2/1/default/1";
      tf.tidy(() => {
        tf.loadGraphModel(modelPath, { fromTFHub: true }).then((model) => {
          const mysteryImage: any = document.getElementById("mystery");
          const myTensor = tf.browser.fromPixels(mysteryImage);

          // SSD 
          console.log("Before expansion: ", myTensor.shape);
          const readyfied = tf.expandDims(myTensor, 0);
          console.log("After expansion: ", readyfied.shape);

          model.executeAsync(readyfied).then((result: any) => {
            console.log("First", result[0].shape);
            result[0].print();
            console.log("Second", result[1].shape);
            result[1].print();
          });
        });
      });
    });

  }


}
