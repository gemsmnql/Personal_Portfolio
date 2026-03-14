import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ElementRef } from '@angular/core'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit { 
  activeSkill: string | null = "designing";
  activeProject: string | null = 'arts';

  projects = [
    { id: 'campo', title: 'Campo Noble Website', type: 'UI/UX Design', image: 'assets/images/campo-noble.png', desc: 'A modern restaurant website showcasing Campo Noble’s ambiance, menu, and services with an elegant and user-friendly design.', link: "https://www.figma.com/design/hkAXdCKYQZHDzeRv2r3cUE/Group-campo-noble?node-id=9-172&t=I0eZvH1lCjCEdZNs-1" },
    { id: 'arts', title: 'ArtsRising Website', type: 'Wordpress', image: 'assets/images/Artsrising.png', desc :"A creative blog platform dedicated to promoting local art, artists, and inspiring stories through visually engaging content.", link: "https://artsrising.wordpress.com/" },
    { id: 'time', title: 'Time Collection Website', type: 'UI/UX Design', image: 'assets/images/Timecollection.png', desc: "An e-commerce website for a watch brand, focused on product presentation, smooth navigation, and a refined shopping experience.", link: "https://www.figma.com/design/wlLPQXjNNaYsSePVEHpOQ1/Time-Collection?node-id=0-1&t=IqrLHuaH1PgkslfW-1" },
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });


    const cards = this.el.nativeElement.querySelectorAll('.info-container');
    cards.forEach((card: HTMLElement) => observer.observe(card));
  }

  toggleSkill(skillName: string) {
    this.activeSkill = skillName;
  }

  selectProject(id: string) {
    this.activeProject = (this.activeProject === id) ? null : id;
  }
}