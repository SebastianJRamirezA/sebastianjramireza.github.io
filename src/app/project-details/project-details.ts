import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../project';
import { ProjectService } from '../projects.service';

@Component({
  selector: 'app-project-details',
  imports: [CommonModule],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css'
})
export class ProjectDetails {
  route: ActivatedRoute = inject(ActivatedRoute);
  projectService = inject(ProjectService);
  project: Project | undefined;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projectService.getProjectById(id);
  }
}
