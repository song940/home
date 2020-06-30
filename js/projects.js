import { repos } from './github.js';

export const getProjects = async () => {
  const projects = await repos('song940');
  return projects;
};

export const sortByStar = (a, b) => 
  a.stargazers_count > b.stargazers_count;

export const render = async element => {
  if(typeof element === 'string')
    element = document.querySelector(element);
  const projects = await getProjects();
  for(const project of projects.sort(sortByStar)) {
    const li = document.createElement('li');
    const nm = document.createElement('a');
    nm.href = project.html_url;
    nm.textContent = project.name;
    li.append(nm);
    li.append(' ' + (project.description || project.html_url));
    element.append(li);
  }
};