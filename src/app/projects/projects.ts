import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../project';
import { ProjectCard } from "../project-card/project-card";
import { ProjectService } from "../projects.service";

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectCard],
  standalone: true,
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
  projects: Project[] = [];
  projectService: ProjectService = Inject(ProjectService);

  constructor(private projectsService: ProjectService) {
    this.projects = this.projectsService.getAllProjects();
  }
}