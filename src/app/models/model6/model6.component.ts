import { Component, OnInit } from '@angular/core';

import *as tf from "@tensorflow/tfjs";
import { CLASSES } from './labels'


@Component({
  selector: 'app-model6',
  templateUrl: './model6.component.html',
  styleUrls: ['./model6.component.sass']
})
export class Model6Component implements OnInit {

  ngOnInit(): void {

    this.performDetections();

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
    // Prep Canvas
    const detection: any = document.getElementById('detection')
    const ctx = detection.getContext('2d')
    const imgWidth = mysteryImage.width
    const imgHeight = mysteryImage.height
    detection.width = imgWidth
    detection.height = imgHeight

    // Get a clean tensor of indices
    const maxBoxes = 20
    const threshold = 0.3
    const prominentDetection = tf.topk(results[0])
    prominentDetection.indices.print()
    prominentDetection.values.print()
    const topvals = prominentDetection.values.squeeze()
    const topDetections = tf.topk(topvals, maxBoxes)

    // Move results back to JavaScript in parallel
    const [
      maxDetections,
      maxIndices,
      maxValues,
      boxes,
    ] = await Promise.all([
      topDetections.indices.array(),
      prominentDetection.indices.data(),
      prominentDetection.values.data(),
      results[1].squeeze().array(),
    ])

    maxDetections.forEach((detection: any, idx: any) => {
      ctx.strokeStyle = '#0F0'
      ctx.lineWidth = 5

      const detectedIndex = maxIndices[detection]
      const detectedClass = CLASSES[detectedIndex]
      const detectedScore = maxValues[detection]
      const dBox = boxes[detection]

      if (detectedScore > threshold) {
        console.log(detectedClass, detectedScore)
        const startY = dBox[0] * imgHeight
        const startX = dBox[1] * imgWidth
        const height = (dBox[2] - dBox[0]) * imgHeight
        const width = (dBox[3] - dBox[1]) * imgWidth
        ctx.strokeRect(startX, startY, width, height)
      }
    })
  }




}
