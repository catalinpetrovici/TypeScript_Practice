// ProjectList Class
import { projectState } from '../contextState/projectState';
import { Project, ProjectStatus } from '../contextState/projectState';
import { Component } from '../components/baseClass';
import { ProjectItem } from './';

interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}

export class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget
{
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

  dragOverHandler(event: DragEvent) {
    console.log(`dragOverHandler`, event);
  }
  dropHandler(event: DragEvent) {
    console.log(`dropHandler`, event);
  }
  dragLeaveHandler(event: DragEvent) {
    console.log(`dragLeaveHandler`, event);
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
