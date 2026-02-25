import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class Resume {
  projects = [
  {
    id: 1,
    number: '01',
    name: 'Personal Portfolio Website',
    type: 'Tools Used: HTML, CSS, Tailwind, JavaScript, Figma',
    description: 'A personal portfolio website built to showcase my expertise, featured projects, and technical skills in a clear and structured layout.',
    link: '#'
  },
  {
    id: 2,
    number: '02',
    name: 'Campo Noble Website',
    type: 'Tools Used: HTML, CSS, Tailwind, JavaScript, Figma',
    description: 'A modern restaurant website showcasing Campo Noble’s ambiance, menu, and services with an elegant and user-friendly design.',
    link: '#'
  },
  {
    id: 3,
    number: '03',
    name: 'ArtsRising Blog Website',
    type: 'Tools Used: HTML, CSS, WordPress',
    description: 'A creative blog platform dedicated to promoting art, artists, and inspiring stories through visually engaging content.',
    link: '#'
  }
];
}
