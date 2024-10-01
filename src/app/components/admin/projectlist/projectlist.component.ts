import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../TypeScriptClasses/Project';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrl: './projectlist.component.css'
})
export class ProjectlistComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }

  addProject(): void {
    const newProject: Project = { id: 0, name: 'New Project', description: 'Project Description', duration: 0 };
    this.projectService.createProject(newProject).subscribe((project) => {
      this.projects.push(project);
    });
  }

  editProject(id: number | undefined): void {
    const updatedProject: Project = { id, name: 'Updated Project', description: 'Updated Description', duration: 0 };
    this.projectService.updateProject(id, updatedProject).subscribe((project) => {
      const index = this.projects.findIndex(p => p.id === id);
      if (index !== -1) {
        this.projects[index] = project;
      }
    });
  }

  deleteProject(id: number | undefined): void {
    this.projectService.deleteProject(id).subscribe(() => {
      this.projects = this.projects.filter(project => project.id !== id);
    });
  }
}
