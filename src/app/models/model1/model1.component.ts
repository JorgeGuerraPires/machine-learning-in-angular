import { Component, OnInit } from '@angular/core';

import *as tf from "@tensorflow/tfjs";

import { INCEPTION_CLASSES } from '../../../assets/labels'

@Component({
  selector: 'app-model1',
  templateUrl: './model1.component.html',
  styleUrls: ['./model1.component.sass']
})
export class Model1Component implements OnInit {

  ngOnInit(): void {
    this.classify();
  }


  classify() {
    tf.ready().then(() => {
      const modelPath =
        'https://tfhub.dev/google/tfjs-model/imagenet/inception_v3/classification/3/default/1';

      tf.tidy(() => {
        tf.loadGraphModel(modelPath, { fromTFHub: true }).then((model) => {
          const mysteryImage: any = document.getElementById('mystery');

          const myTensor = tf.browser.fromPixels(mysteryImage)
          // Inception v3 expects an image resized to 299x299
          const readyfied = tf.image
            .resizeBilinear(myTensor, [299, 299], true)
            .div(255)
            .reshape([1, 299, 299, 3])

          const result: any = model.predict(readyfied)
          result.print() // useless

          const { values, indices } = tf.topk(result, 3)
          indices.print()

          // Let's hear those winners
          const winners = indices.dataSync();

          const display = document.getElementById('display') as HTMLElement;

          display.innerText = `
          🥇 First place ${INCEPTION_CLASSES[winners[0]]},
          🥈 Second place ${INCEPTION_CLASSES[winners[1]]},
          🥉 Third place ${INCEPTION_CLASSES[winners[2]]}
        `;

          console.log(`
            🥇 First place ${INCEPTION_CLASSES[winners[0]]},
            🥈 Second place ${INCEPTION_CLASSES[winners[1]]},
            🥉 Third place ${INCEPTION_CLASSES[winners[2]]}
          `)
        })
      })
    })

  }

}
