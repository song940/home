import { render as renderNavbar } from './navbar.js';
import { render as renderPosts } from './posts.js';
import { render as renderProjects } from './projects.js';

renderNavbar('#navbar');
renderPosts('#posts ul');
renderProjects('#projects ul');

