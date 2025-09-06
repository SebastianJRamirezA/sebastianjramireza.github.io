import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../project';
import { ProjectCard } from "../project-card/project-card";

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectCard],
  standalone: true,
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Pitch Prediction using Deep Learning',
      description: `Applying AI to the sport of baseball. This project implements an ensemble of neural networks (LSTMs, GRUs, Attention-based LSTMs) to predict pitch type and location. Leveraging the Statcast dataset, the system processes sequential pitch data to forecast key characteristics of the next pitch, including its type (e.g., fastball, curveball) and location within the strike zone. The core innovation lies in its comprehensive approach to pitch prediction. By employing a multi-task learning framework, the model is trained to optimize for both pitch type and location, enhancing its predictive accuracy and utility for coaches, players, and analysts.`,
      imageUrl: 'projects/pitch-prediction.png',
      projectUrl: 'https://github.com/SebastianJRamirezA/pitch_prediction_using_ML'
    },
    {
      title: 'Route Master Simulation Game',
      description: `Route Master is a simulation game where you manage a bus company. Players aim to grow their earnings by testing different routes, upgrading their fleet, or taking risks by signing contracts. The goal is to become a tycoon in the urban transport sector! In this project, our team focused on creating an engaging experience. I contributed to developing the core simulation engine, building a realistic game world using probabilities, and worked on the UI and Achievements page. This collaborative effort resulted in a strategic and immersive simulation.`,
      imageUrl: 'projects/route-master.png',
      projectUrl: 'https://github.com/3nity-studios/route-master'
    },
    {
      title: 'Computer Vision System for Urban Traffic Monitoring in Laramie',
      description: `This project involved the development of an automated traffic monitoring system using computer vision techniques, a key component of a simulated city planning initiative for Laramie, Wyoming. As part of this coursework, I designed and implemented two core applications: Real-time Vehicle Detection and Tracking and Automated Vehicle Counting for Traffic Flow Analysis`,
      imageUrl: 'projects/route-master.png',
      projectUrl: ''
    }
  ];
}