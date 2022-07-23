// ProjectList Class
import { projectState } from '../contextState/projectState';
import { Project, ProjectStatus } from '../contextState/projectState';
import { Component } from '../components/baseClass';
import { ProjectItem } from './';

export class ProjectList extends Component<HTMLDivElement, HTMLElement> {
  assignedProjects: Project[];

  constructor(private typeOfProject: 'active' | 'finished') {
    super('project-list', 'app', false, `${typeOfProject}-projects`);

    this.assignedProjects = [];

    this.configure();
    this.renderContent();
  }

  configure(): void {
    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((prj) => {
        {
          if (this.typeOfProject === 'active') {
            return prj.status === ProjectStatus.Active;
          }
          return prj.status === ProjectStatus.Finished;
        }
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  renderContent() {
    const listId = `${this.typeOfProject}-projects-list`;
    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector(
      'h2'
    )!.textContent = `${this.typeOfProject.toUpperCase()} PROJECTS`;
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.typeOfProject}-projects-list`
    )!;

    listEl.innerHTML = '';

    for (const prjItem of this.assignedProjects) {
      new ProjectItem(this.element.querySelector('ul')!.id, prjItem);
    }
  }
}
