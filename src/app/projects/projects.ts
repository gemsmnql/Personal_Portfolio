import { CommonModule } from '@angular/common';
import { Component, linkedSignal } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = [
    {id:1, images: ['assets/images/lahermosa.png', 'assets/images/lh2.png'],
      currentImageIndex: 0, number: "01", name:'La Hermosa Website', description: 'La Hermosa Website was developed to promote a flower shop’s products and services while strengthening its online presence. It features a responsive layout, organized product displays, service highlights for different occasions, and clear call-to-action buttons to encourage inquiries. The site focuses on clean design and user-friendly navigation to enhance the overall customer experience.', link: 'https://lahermosa.shop/home', type: "HTML | Tailwind CSS | Angular.js"},

    {id:2, images: ['assets/images/Artsrising.png', 'assets/images/art2.png'], currentImageIndex: 0, number: "04", name:'Artsrising Blog Website', description: 'Artsrising Blog Website was created as a platform to share art-related content and creative insights. It includes structured blog posts, categorized content, and an easy-to-navigate layout for better readability. Built with WordPress, the site emphasizes simplicity, accessibility, and an engaging reading experience.', link: 'https://artsrising.wordpress.com/', type: "WordPress"},

    {id:3, images:[ 'assets/images/gems1.png', 'assets/images/gems2.png'], currentImageIndex: 0, number: "04", name:'Gems Vinyl Website', description: 'Gems Vinyl Website is designed to showcase vinyl records and audio products in a modern and visually appealing way. It features a product grid layout, highlighted collections, and a clean interface that balances aesthetics and functionality. The responsive design ensures smooth browsing across different devices.', link: 'https://gemsmnql.github.io/gems-IWEB-Project/index.html', type: "HTML | CSS | JavaScript"},

    {id:4, images: ['assets/images/campo-noble.png', 'assets/images/campo2.png'], currentImageIndex: 0, number: "02", name:'Campo Noble Website', description: 'Campo Noble Website is a UI/UX design concept focused on presenting a restaurant brand through strong visuals and structured layout. It includes a hero section, brand highlights, and organized content sections that enhance user engagement. The design prioritizes branding consistency and a seamless user experience.', link: 'https://www.figma.com/design/hkAXdCKYQZHDzeRv2r3cUE/Group-campo-noble?node-id=9-172&t=I0eZvH1lCjCEdZNs-1', type: "UI/UX Design / Figma"},

    {id:5, images: ['assets/images/Timecollection.png', 'assets/images/tc2.png'], currentImageIndex: 0, number: "03", name:'Time Collection Website', description: 'Time Collection Website is a luxury-inspired UI/UX project created to showcase premium watch collections. It features an elegant hero section, refined typography, and a sophisticated color scheme that reflects a high-end brand identity. The layout is designed to deliver a polished and immersive browsing experience.', link: 'https://www.figma.com/design/wlLPQXjNNaYsSePVEHpOQ1/Time-Collection?node-id=0-1&t=IqrLHuaH1PgkslfW-1', type: "UI/UX Design / Figma"}, 
  ]

  activeProjectId: number | null = null;

  toggleProject(id: number) {
    this.activeProjectId = this.activeProjectId === id ? null : id;
  }

  nextImage(event: Event, project: any) {
    event.stopPropagation();
    project.currentImageIndex = (project.currentImageIndex + 1) % project.images.length;
  }
}
