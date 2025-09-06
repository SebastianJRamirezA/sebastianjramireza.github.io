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
      id: 0,
      title: 'Pitch Prediction using Deep Learning',
      description: `Applying AI to the sport of baseball. This project implements an ensemble of neural networks (LSTMs, GRUs, Attention-based LSTMs) to predict pitch type and location. Leveraging the Statcast dataset, the system processes sequential pitch data to forecast key characteristics of the next pitch, including its type (e.g., fastball, curveball) and location within the strike zone. The core innovation lies in its comprehensive approach to pitch prediction. By employing a multi-task learning framework, the model is trained to optimize for both pitch type and location, enhancing its predictive accuracy and utility for coaches, players, and analysts.`,
      imageUrl: 'projects/pitch-prediction.png',
      projectUrl: 'https://github.com/SebastianJRamirezA/pitch_prediction_using_ML',
      tags: ['Machine Learning', 'Deep Learning', 'Baseball'],
      date: 'October 2024 - March 2025',
      tools: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
      background: 'This project was developed to apply advanced machine learning techniques to real-world sports data. The goal was to create a robust predictive model that could assist in strategic decision-making in baseball. The project leveraged publicly available Statcast data to build and train the models.',
      development: 'The development process involved several key stages: data cleaning and preprocessing of the Statcast dataset, designing and implementing various neural network architectures (LSTMs, GRUs, and Attention mechanisms), and creating a multi-task learning framework to predict both pitch type and location simultaneously. I focused on hyperparameter tuning and model optimization to achieve high predictive accuracy.'
    },
    {
      id: 1,
      title: 'Route Master Simulation Game',
      description: `Route Master is a simulation game where you manage a bus company. Players aim to grow their earnings by testing different routes, upgrading their fleet, or taking risks by signing contracts. The goal is to become a tycoon in the urban transport sector! In this project, our team focused on creating an engaging experience. I contributed to developing the core simulation engine, building a realistic game world using probabilities, and worked on the UI and Achievements page. This collaborative effort resulted in a strategic and immersive simulation.`,
      imageUrl: 'projects/route-master.png',
      projectUrl: 'https://github.com/3nity-studios/route-master',
      tags: ['Game Development', 'Simulation'],
      date: 'Fall 2023',
      tools: ['C++', 'SFML', 'DeSIGNAR'],
      background: 'The project originated from a desire to create a strategic and engaging simulation game. Our team wanted to build a game that combined business management with dynamic gameplay, allowing players to feel the impact of their decisions on a simulated urban transport network.',
      development: 'My primary role was developing the **core simulation engine**, which handled the game\'s economic and probabilistic systems. I also worked on the **UI components** and the **Achievements page**. The team used an Agile workflow, with regular sprints and collaborative coding via Git. We focused on creating a balanced and realistic game world using statistical models for passenger flow and traffic.'
    }
  ];
}