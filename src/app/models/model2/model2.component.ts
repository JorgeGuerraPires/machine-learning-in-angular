import { Component, OnInit } from '@angular/core';

import *as tf from "@tensorflow/tfjs";


@Component({
  selector: 'app-model2',
  templateUrl: './model2.component.html',
  styleUrls: ['./model2.component.sass']
})
export class Model2Component implements OnInit {

  ngOnInit(): void {
    this.classify();
  }

  classify() {

    tf.ready().then(() => {
      const modelPath = './assets/model/model.json'

      tf.tidy(() => {
        tf.loadLayersModel(modelPath).then((model) => {
          const petImage: any = document.getElementById('pet')
          const myTensor = tf.browser.fromPixels(petImage)
          // Model expects 256x256 0-1 value 3D tensor
          const readyfied = tf.image
            .resizeNearestNeighbor(myTensor, [256, 256], true)
            .div(255)
            .reshape([1, 256, 256, 3])

          const result: any = model.predict(readyfied)
          // Model returns top left and bottom right
          result.print()

          // Draw box on canvas
          const detection: any = document.getElementById('detection')
          const imgWidth = petImage.width
          const imgHeight = petImage.height
          detection.width = imgWidth
          detection.height = imgHeight
          const box = result.dataSync()
          const startX = box[0] * imgWidth
          const startY = box[1] * imgHeight
          const width = (box[2] - box[0]) * imgWidth
          const height = (box[3] - box[1]) * imgHeight
          const ctx = detection.getContext('2d')
          ctx.strokeStyle = '#0F0'
          ctx.lineWidth = 4
          ctx.strokeRect(startX, startY, width, height)
        })
      })
    })
  }

}
