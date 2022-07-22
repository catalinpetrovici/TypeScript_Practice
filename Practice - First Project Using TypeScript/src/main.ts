import { validate, Validatable } from './utils/validation';
import { autoBind } from './utils/autoBindUtils';
import {
  ProjectState,
  Project,
  ProjectStatus,
} from './contextState/projectState';

const projectState = ProjectState.getInstance();

// ProjectList Class
class ProjectList {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLElement;
  assignedProjects: Project[];

  constructor(private typeOfProject: 'active' | 'finished') {
    this.templateElement = <HTMLTemplateElement>(
      document.getElementById('project-list')
    );

    this.hostElement = <HTMLDivElement>document.getElementById('app');
    this.assignedProjects = [];

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLElement;
    this.element.id = `${this.typeOfProject}-projects`;

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

    this.attach();
    this.renderContent();
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.typeOfProject}-projects-list`
    )!;

    listEl.innerHTML = '';

    for (const prjItem of this.assignedProjects) {
      const listItem = document.createElement('li');
      listItem.textContent = prjItem.title;
      listEl.appendChild(listItem);
    }
  }

  private renderContent() {
    const listId = `${this.typeOfProject}-projects-list`;
    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector(
      'h2'
    )!.textContent = `${this.typeOfProject.toUpperCase()} PROJECTS`;
  }

  private attach() {
    this.hostElement.insertAdjacentElement('beforeend', this.element);
  }
}

// ProjectInput Class
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;
  assignedProjects: any[];

  constructor() {
    this.templateElement = <HTMLTemplateElement>(
      document.getElementById('project-input')
    );

    this.hostElement = <HTMLDivElement>document.getElementById('app');
    this.assignedProjects = [];

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input';

    this.titleInputElement = <HTMLInputElement>(
      this.element.querySelector('#title')
    );
    this.descriptionInputElement = <HTMLInputElement>(
      this.element.querySelector('#description')
    );
    this.peopleInputElement = <HTMLInputElement>(
      this.element.querySelector('#people')
    );

    this.configure();
    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    };
    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };
    const peopleValidatable: Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5,
    };

    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert(' Invalid input, please try again!');
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  private clearInputs() {
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = '';
    this.peopleInputElement.value = '';
  }

  @autoBind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      projectState.addProject(title, desc, people);
      this.clearInputs();
    }
  }

  private configure() {
    // this.element.addEventListener('submit', this.submitHandler.bind(this));
    this.element.addEventListener('submit', this.submitHandler);
  }
}

const projectInput = new ProjectInput();
const activeProjectList = new ProjectList('active');
const finishedProjectList = new ProjectList('finished');
