// Project Type

export enum ProjectStatus {
  Active,
  Finished,
}

export class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}

// Projects State Management

export type Listener = (items: Project[]) => void;

export class ProjectState {
  private listeners: Listener[] = [];
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addListener(listenerFn: Listener) {
    this.listeners.push(listenerFn);
  }

  addProject(title: string, description: string, numberOfPeople: number) {
    const newProject = new Project(
      (Math.random() * 1000).toString(),
      title,
      description,
      numberOfPeople,
      ProjectStatus.Active
    );
    this.projects.push(newProject);
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
}
