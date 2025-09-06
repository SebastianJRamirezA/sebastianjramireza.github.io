import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  protected projectList: Project[] = [
    {
      "id": 6,
      "title": "Pitch Prediction using Deep Learning",
      "description": "A deep learning system designed to predict the type and location of the next pitch in a baseball game using a multi-class classification approach. The project leverages sequential data from the Major League Baseball (MLB) Statcast database to develop a machine learning model that provides valuable insights for pitchers and batters.",
      "imageUrl": "/projects/pitch-prediction.png",
      "projectUrl": "https://github.com/SebastianJRamirezA/pitch_prediction_using_ML",
      "tags": [
        "Deep Learning",
        "Machine Learning",
        "Data Science",
        "Baseball Analytics",
        "Recurrent Neural Networks"
      ],
      "date": "September 2024 - March 2025",
      "tools": [
        "Python",
        "Pandas",
        "NumPy",
        "TensorFlow",
        "Keras",
        "Keras Tuner"
      ],
      "background": "For decades, baseball analytics relied on traditional statistics like batting average and earned run average. However, with the rise of data science and machine learning, teams have shown greater interest in using complex techniques to gain a competitive edge. This is highlighted by historical shifts, such as the Oakland Athletics' 'Moneyball' success and the Boston Red Sox's use of similar data-driven strategies. The project was motivated by the immense value of pitch prediction in modern baseball for both pitchers and batters, as it can inform pitch sequencing and batting strategies. This system also has potential applications for television analysts to provide deeper insights for fans.",
      "development": "The project employed an ensemble of recurrent neural networks (RNNs) to process sequential data from the Statcast database, with the goal of predicting both pitch type and location. The data was preprocessed using the Pandas library to remove irrelevant columns. A custom `Sequencer` class was implemented to transform the data into a sequence format suitable for RNNs. Different architectures, including LSTMs, GRUs, and Attention-based LSTMs, were explored. The project required the development of a custom `FreezeOutputCallback` to handle early stopping for the multi-label ensemble model, as a standard approach was inadequate. Hyperparameter tuning was performed using Bayesian Optimization with the Keras Tuner library.",
      "results": "The evaluation focused on comparing the performance of different model architectures: LSTMs, GRUs, Attention-based LSTMs, and Transformers. The Transformer model consistently demonstrated the strongest performance across all three prediction tasks (Pitch Type, Vertical Location, and Horizontal Location), achieving state-of-the-art accuracy. For pitch type prediction, the Transformer model reached an average test accuracy of 70.8%, outperforming both LSTMs (69.25%) and GRUs (63.75%). For vertical and horizontal location prediction, the Transformer model again excelled with average test accuracies of 70.5% and 74.1%, respectively, surpassing all other models. While LSTMs showed strong results for pitch type and horizontal location, they struggled with vertical location, indicating an issue with overfitting. GRUs provided more consistent, though slightly lower, accuracy across tasks and offered faster training times due to their simpler architecture. Attention-based LSTMs did not show a significant performance increase over the other recurrent models. The superior performance of the Transformer model suggests that its ability to capture long-range dependencies in sequential data is highly effective for this task. The results also show that the models developed for this project compare favorably to or outperform a number of existing studies in the field, with the Transformer model achieving higher accuracy in multiple categories."
    },
    {
      "id": 5,
      "title": "Route Master Simulation Game",
      "description": "Route Master is a simulation game where you manage a bus company. Players aim to grow their earnings by testing different routes, upgrading their fleet, or taking risks by signing contracts. The goal is to become a tycoon in the urban transport sector! In this project, our team focused on creating an engaging experience. I contributed to developing the core simulation engine, building a realistic game world using probabilities, and worked on the UI and Achievements page. This collaborative effort resulted in a strategic and immersive simulation.",
      "imageUrl": "/projects/route-master.png",
      "projectUrl": "https://github.com/3nity-studios/route-master",
      "tags": [
        "Game Development",
        "Simulation"
      ],
      "date": "September 2024 - December 2024",
      "tools": [
        "C++",
        "SFML",
        "DeSIGNAR"
      ],
      "background": "The project originated from a desire to create a strategic and engaging simulation game. Our team wanted to build a game that combined business management with dynamic gameplay, allowing players to feel the impact of their decisions on a simulated urban transport network.",
      "development": "My primary role was developing the **core simulation engine**, which handled the game's economic and probabilistic systems. I also worked on the **UI components** and the **Achievements page**. The team used an Agile workflow, with regular sprints and collaborative coding via Git. We focused on creating a balanced and realistic game world using statistical models for passenger flow and traffic."
    },
    {
      "id": 4,
      "title": "Computer Vision System for Urban Traffic Monitoring in Laramie",
      "description": "An automated traffic monitoring system using computer vision techniques to detect, track, and count vehicles for urban planning.",
      "imageUrl": "/projects/traffic-monitoring.png",
      "projectUrl": "",
      "tags": [
        "Computer Vision",
        "Data Science",
        "Smart Cities"
      ],
      "date": "September 2024",
      "tools": [
        "Python",
        "OpenCV",
        "Jupyter Notebooks"
      ],
      "background": "This project was developed as a key component of a simulated city planning initiative for Laramie, Wyoming. The primary motivation was to create an automated system that could provide quantitative traffic data to support urban planning decisions. Manually collecting and analyzing traffic data is labor-intensive and inefficient, so there was a need for an automated solution to provide valuable insights into traffic volume, prevent traffic jams, and optimize public transportation routes. This project addresses that need by applying computer vision principles to real-world urban challenges.",
      "development": "The development involved designing and implementing two core applications. The first was a **Real-time Vehicle Detection and Tracking** application built in Python using the OpenCV library within a Jupyter Notebook environment. This system used fundamental computer vision techniques like **frame differencing** and **background subtraction** to effectively detect and track moving vehicles from traffic camera recordings. The second application was **Automated Vehicle Counting for Traffic Flow Analysis**. This was a specialized application designed to count vehicles traveling between specific city zones during peak hours. The key technical challenge was to ensure accuracy in varied lighting conditions and traffic densities, which was addressed through careful tuning of the detection algorithms and background subtraction parameters.",
      "results": "The project provided hands-on experience in applying computer vision principles to practical urban challenges. It successfully demonstrated proficiency in Python, OpenCV, and data analysis for smart city initiatives. The system's ability to count vehicles and provide insights into traffic flow is a significant outcome that can support data-driven decisions for traffic management and urban planning. The project served as a proof of concept, highlighting the potential for computer vision solutions to enhance the efficiency and planning of urban infrastructure."
    },
    {
      "id": 3,
      "title": "Evolving Creatures with Genetic Algorithms",
      "description": "A project focused on using genetic algorithms to evolve virtual creatures capable of climbing a mountain, inspired by the work of Karl Sims.",
      "imageUrl": "/projects/evolving-creatures.png",
      "projectUrl": "",
      "tags": [
        "Genetic Algorithms",
        "Machine Learning",
        "Evolutionary Computing",
        "Python",
        "Simulations"
      ],
      "date": "June 2024",
      "tools": [
        "Python",
        "PyBullet"
      ],
      "background": "The project's goal was to evolve virtual creatures to climb a mountain using genetic algorithms, drawing inspiration from Karl Sims' work in the 1990s where he used genetic algorithms to evolve creatures for various tasks. The problem was defined by the creature reaching the mountain's peak, with the distance to the peak serving as the foundation for the fitness function. Early experiments with simple distance and squared distance metrics resulted in creatures attempting to climb the mountain, while a fitness function with a displacement penalty led to 'lazy' creatures that wouldn't move, suggesting the penalty was too heavily weighted. This led to the development of a final fitness function that balanced the distance to the peak with a small penalty for distance traveled.",
      "development": "The project involved several stages of development and experimentation. Initially, different fitness functions were tested, leading to the final equation: $f = (distance~to~peak)^{2} + 0.01 \\times (distance~traveled)$. Hyperparameter tuning was then performed using Random Search, which was chosen over Grid Search due to its lower computational cost. Initial experiments revealed 'cheating' behaviors, where creatures would evolve bulky bodies to reduce their distance to the peak or use prismatic joints to push themselves up the mountain wall. To fix this, the fitness calculation was updated to use the average position of all the creature's links instead of the single position provided by PyBullet, ensuring the entire creature needed to get closer to the peak to be rewarded. The encoding scheme was also expanded to include prismatic joints and new body shapes like boxes and spheres, alongside the existing revolute joints and cylinders, to widen the search space.",
      "results": "Despite extensive experimentation, the creatures were ultimately unable to successfully climb the mountain. The fittest individuals were able to move towards the mountain's base but failed to start climbing. This outcome persisted across different environments and with various hyperparameters, leading to the conclusion that the issue might be related to the PyBullet simulation settings, such as insufficient friction or creature strength, rather than the genetic algorithm itself. Qualitative analysis showed that while the creatures consistently demonstrated the intention to climb, they would get stuck at the base, and some tests even produced 'lazy' creatures or ones that would roll to the base and fail to get up. The final conclusion was that the project, while not achieving its ultimate goal, provided valuable insights into the complexities of applying genetic algorithms to physical simulations."
    },
    {
      "id": 2,
      "title": "Predicting Major League Baseball (MLB) Hall of Fame Inductees using Neural Networks",
      "description": "A neural network was developed to predict whether a Major League Baseball player will be inducted into the Hall of Fame based on their career statistics.",
      "imageUrl": "/projects/hof-prediction.png",
      "projectUrl": "",
      "tags": [
        "Machine Learning",
        "Deep Learning",
        "Data Science",
        "Sports Analytics"
      ],
      "date": "March 2024",
      "tools": [
        "TensorFlow",
        "Keras"
      ],
      "background": "The goal of this project was to leverage machine learning to predict a highly subjective and data-rich outcome: induction into the Major League Baseball (MLB) Hall of Fame. The motivation was to develop a predictive model that could determine a player's Hall of Fame potential by analyzing their pitching and batting statistics. This required using data from the Lahman Baseball Database, which contains extensive information on player careers and Hall of Fame election results, to train a neural network model.",
      "development": "The development process involved creating and optimizing a neural network using TensorFlow and Keras. Extensive experimentation was conducted to fine-tune various hyperparameters, including the network architecture, with layers ranging from 2 to 5 and units from 32 to 128 per layer. Different activation functions (ReLU, GELU, ELU, SELU) and optimizers (RMSProp, Adam, Nadam, Adamax) were also tested. To ensure the model's robustness, 4-fold cross-validation was employed. The primary evaluation metric was the F1 score, chosen for its effectiveness in handling imbalanced datasets, with accuracy as a secondary consideration.",
      "results": "The initial neural network models successfully surpassed the baseline, achieving an F1 score of 0.63 with a 2-layer architecture and the RMSProp optimizer. Further hyperparameter tuning led to significant improvements, with the best-performing model reaching an F1 score of 0.67. This optimal model utilized a 5-layer network with 32 units per layer, GELU activation, and the Adam optimizer, demonstrating a clear improvement and the effectiveness of a neural network approach for this predictive task."
    },
    {
      "id": 1,
      "title": "OpticalHockey: Webcam-Controlled Air Hockey",
      "description": "An interactive computer game of air hockey controlled by real-time player movement detected via a webcam using Optical Flow.",
      "imageUrl": "/projects/opticalhockey.png",
      "projectUrl": "",
      "tags": [
        "Computer Vision",
        "Interactive Program Design",
        "Game Development"
      ],
      "date": "March 2024",
      "tools": [
        "JavaScript",
        "p5.js",
        "oflow.js"
      ],
      "background": "This project was developed to explore the intersection of computer vision and interactive program design. The primary motivation was to create a novel way for users to interact with a computer game, moving beyond traditional input methods like a mouse and keyboard. The goal was to build a game that could be controlled by subtle, real-time player movements detected by a webcam, offering a more immersive and intuitive user experience.",
      "development": "I developed a functional air hockey game where the in-game paddles are controlled by a webcam. The core technology utilized was Optical Flow, specifically implemented using the oflow.js library. This allowed the game to accurately capture subtle player movements and translate them into precise control of the paddles. A significant technical challenge arose from a compatibility issue between the oflow.js library and the more recent version of p5.js that I was using. To solve this, I devised a strategic solution rather than downgrading my codebase. I isolated the OpticalHockey game module into a separate directory with its own index.html and sketch.js files. This approach allowed both modules to operate independently, leveraging their respective compatible p5.js versions without conflicts, thus ensuring a robust and modular code architecture.",
      "results": "This project not only solidified my understanding of computer vision principles and their application in interactive media but also sharpened my problem-solving skills and ability to implement modular, robust code architectures in web development. The outcome was a successful demonstration of how innovative uses of technology, such as webcam-based control, can redefine user interaction and create engaging, rewarding experiences."
    },
    {
      "id": 0,
      "title": "Predicting Major League Baseball Player Salary Using Machine Learning",
      "description": "A project that investigates the ability of five machine learning algorithms to predict Major League Baseball player salaries using solely performance statistics.",
      "imageUrl": "/projects/salary-prediction.png",
      "projectUrl": "",
      "tags": [
        "Machine Learning",
        "Sports Analytics",
        "Baseball",
        "Major League Baseball",
        "Data Science"
      ],
      "date": "September 2025",
      "tools": [
        "scikit-learn",
        "NumPy",
        "SciPy"
      ],
      "background": "Player salary is a significant topic in Major League Baseball (MLB), important to both fans and professionals like team general managers and player agents. Machine learning models that can accurately predict player salaries are valuable tools, helping general managers with budget planning and contract offers, and enabling agents to set realistic expectations and secure good deals for their clients. This project's goal was to identify the most effective machine learning model for predicting MLB player salaries using traditional performance statistics. The dataset used for this project was the baseball dataset from StatLib, which contains player performance statistics from the 1986 season and their salaries from 1987. Acknowledging that the data is over 30 years old and lacks modern sabermetrics, its open availability and lack of usage restrictions made it a suitable choice for this investigation.",
      "development": "The project's methodology involved several key steps, beginning with data preprocessing. The baseball dataset was cleaned by dropping player names to ensure anonymity and removing categorical features such as team and league. Null values were deleted, and outliers were adjusted. The data was then scaled using the StandardScaler class and a feature selection process was applied using the SelectKBest class with r_regression as the scoring function. Features with a weak relationship to the target variable (salary) were removed, and the data was split into training and test sets. Five machine learning algorithms were then applied: linear regression, polynomial regression, k-nearest neighbors, regression trees, and random forests. All algorithms, except for a custom-built regression tree implementation, were applied using the scikit-learn library. Nested cross-validation was used to fine-tune the hyperparameters for models that required it, such as k-nearest neighbors and random forests. The same data splits were used across all algorithms to ensure the consistency of the results.",
      "results": "The models were evaluated using two metrics: mean squared error (MSE) and the R² score (coefficient of determination). Results from the cross-validation showed that k-nearest neighbors and random forests significantly outperformed the other models. K-nearest neighbors achieved an average MSE of 78,933.63 and an R² score of 0.5374, while random forests had an average MSE of 71,834.00 and an R² score of 0.6026. Both models demonstrated a strong ability to predict salaries, as indicated by their R² scores above 0.5. In contrast, polynomial regression performed poorly with a negative average R² score, and linear regression and regression trees also had a high average MSE and low R² scores. The project successfully determined that ensemble methods and distance-based algorithms are more effective for this prediction task than simpler linear models or a single regression tree. Future work could involve exploring other powerful algorithms like XGBoost and refining the custom regression tree implementation with more hyperparameters."
    }
  ];

  getAllProjects(): Project[] {
    return this.projectList;
  }

  getProjectById(id: number): Project | undefined {
    return this.projectList.find(project => project.id === id);
  }
}
