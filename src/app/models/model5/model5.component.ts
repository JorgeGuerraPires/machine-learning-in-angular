import { Component, OnInit } from '@angular/core';

import *as tf from "@tensorflow/tfjs";
import { CLASSES } from './labels.js'

@Component({
  selector: 'app-model5',
  templateUrl: './model5.component.html',
  styleUrls: ['./model5.component.sass']
})
export class Model5Component implements OnInit {

  ngOnInit(): void {

    // this.performDetections();

  }

  async performDetections() {
    await tf.ready()
    const modelPath =
      'https://tfhub.dev/tensorflow/tfjs-model/ssd_mobilenet_v2/1/default/1'

    const model = await tf.loadGraphModel(modelPath, { fromTFHub: true })
    const mysteryImage: any = document.getElementById('mystery')
    const myTensor = tf.browser.fromPixels(mysteryImage)
    // SSD Mobilenet single batch
    const readyfied = tf.expandDims(myTensor, 0)
    const results: any = await model.executeAsync(readyfied)
    const boxes = await results[1].squeeze().array()

    // Prep Canvas
    const detection: any = document.getElementById('detection')
    const ctx = detection.getContext('2d')
    const imgWidth = mysteryImage.width
    const imgHeight = mysteryImage.height
    detection.width = imgWidth
    detection.height = imgHeight

    boxes.forEach((box: any, idx: any) => {
      ctx.strokeStyle = '#0F0'
      ctx.lineWidth = 1
      const startY = box[0] * imgHeight
      const startX = box[1] * imgWidth
      const height = (box[2] - box[0]) * imgHeight
      const width = (box[3] - box[1]) * imgWidth
      ctx.strokeRect(startX, startY, width, height)
    })
  }

}