import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../project';

@Component({
  selector: 'app-project-details',
  imports: [CommonModule],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css'
})
export class ProjectDetails {
  project: Project;

  constructor() {
    this.project = {
      id: 0,
      title: 'Pitch Prediction using Deep Learning',
      description: `This project implements an ensemble of neural networks (LSTMs, GRUs, Attention-based LSTMs) to predict pitch type and location. Leveraging the Statcast dataset, the system processes sequential pitch data to forecast key characteristics of the next pitch, including its type (e.g., fastball, curveball) and location within the strike zone. The core innovation lies in its comprehensive approach to pitch prediction. By employing a multi-task learning framework, the model is trained to optimize for both pitch type and location, enhancing its predictive accuracy and utility for coaches, players, and analysts.`,
      imageUrl: '/projects/pitch-prediction.png',
      projectUrl: 'https://github.com/SebastianJRamirezA/pitch_prediction_using_ML',
      tags: ['Machine Learning', 'Deep Learning', 'Baseball'],
      date: 'October 2024 - March 2025',
      tools: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
      background: 'This project was developed to apply advanced machine learning techniques to real-world sports data. The goal was to create a robust predictive model that could assist in strategic decision-making in baseball. The project leveraged publicly available Statcast data to build and train the models.',
      development: 'The development process involved several key stages: data cleaning and preprocessing of the Statcast dataset, designing and implementing various neural network architectures (LSTMs, GRUs, and Attention mechanisms), and creating a multi-task learning framework to predict both pitch type and location simultaneously. I focused on hyperparameter tuning and model optimization to achieve high predictive accuracy.'
    };
  }
}
