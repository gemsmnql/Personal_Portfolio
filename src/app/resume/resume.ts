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
      name: 'La Hermosa – Flower Shop Website',
      type: 'Tools Used: HTML, Tailwind CSS, AngularJS',
      description: 'UI/UX Designer & Front-End Developer. A responsive flower shop website with organized product and service displays, built for a clean user experience.',
      link: '#'
    },
    {
      id: 2,
      number: '02',
      name: 'Pinatubo Museum – Interactive Kiosk',
      type: 'Tools Used: HTML, Tailwind CSS, AngularJS',
      description: 'UI/UX Designer & Front-End Developer. Helped develop an interactive museum kiosk with educational content about the 1991 Mount Pinatubo eruption, and created the welcome page and interactive button pages.',
      link: '#'
    },
    {
      id: 3,
      number: '03',
      name: 'Campo Noble – Coffee Shop Website',
      type: 'Tools Used: Figma',
      description: 'UI/UX Designer. A UI/UX design concept for a restaurant with strong branding and a structured layout, designed to enhance engagement and deliver a seamless user experience.',
      link: '#'
    },
    {
      id: 4,
      number: '04',
      name: 'Dre Photography – Portfolio Website',
      type: 'Tools Used: Figma, HTML, Tailwind CSS, AngularJS',
      description: 'UI/UX Designer & Web Developer. A responsive photography portfolio showcasing curated images in a clean and elegant layout.',
      link: '#'
    }
  ];
}