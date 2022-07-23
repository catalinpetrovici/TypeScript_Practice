import { ProjectState } from './contextState/projectState';
import { ProjectList } from './components/ProjectList';
import { ProjectInput } from './components/ProjectInput';

const activeProjectList = new ProjectList('active');
const finishedProjectList = new ProjectList('finished');
const projectInput = new ProjectInput();
