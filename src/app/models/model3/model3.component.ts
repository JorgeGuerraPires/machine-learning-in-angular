import { Component, OnInit } from '@angular/core';

require('@tensorflow/tfjs-backend-cpu');
require('@tensorflow/tfjs-backend-webgl');

const cocoSsd = require('@tensorflow-models/coco-ssd');

@Component({
  selector: 'app-model3',
  templateUrl: './model3.component.html',
  styleUrls: ['./model3.component.sass']
})
export class Model3Component implements OnInit {

  ngOnInit(): void {
    (async () => {
      const img = document.getElementById('img');

      // Load the model.
      const model = await cocoSsd.load();

      // Classify the image.
      const predictions = await model.detect(img);

      console.log('Predictions: ');
      console.log(predictions);
    })();
  }



}
