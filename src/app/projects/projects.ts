import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = [
    {id:1, images: ['assets/images/lahermosa.webp', 'assets/images/lh2.webp'],
      video: null, // add a path here like 'assets/videos/lahermosa.mp4' if you have one
      currentImageIndex: 0, number: "01", name:'La Hermosa Website', description: 'La Hermosa Website was developed to promote a flower shop’s products and services while strengthening its online presence. It features a responsive layout, organized product displays, service highlights for different occasions, and clear call-to-action buttons to encourage inquiries. The site focuses on clean design and user-friendly navigation to enhance the overall customer experience.', link: 'https://lahermosa.shop/home', type: "HTML | Tailwind CSS | Angular.js", alt: "Page of La Hermosa Website"},

    {id:2, images: ['assets/images/Artsrising.webp', 'assets/images/art2.webp'],
      video: null,
      currentImageIndex: 0, number: "04", name:'Artsrising Blog Website', description: 'Artsrising Blog Website was created as a platform to share art-related content and creative insights. It includes structured blog posts, categorized content, and an easy-to-navigate layout for better readability. Built with WordPress, the site emphasizes simplicity, accessibility, and an engaging reading experience.', link: 'https://artsrising.wordpress.com/', type: "WordPress", alt: "Page of Artsrising Blog Website"},

    {id:3, images: null,
      video: "assets/videos/dre.mp4",
      currentImageIndex: 0, number: "04", name:'Dre Photography Portfolio', description: 'Dre Photography Portfolio is a visual showcase of a photographer’s work, featuring a curated selection of images that highlight their artistic style and technical skills. The site is designed to provide an immersive experience, allowing visitors to explore the photographer’s body of work in a clean and elegant interface.', link: 'https://dre-portfolio-ten.vercel.app', type: "Photography / Web Design", alt: "Page of Dre Photography Portfolio"},

    {id:4, images: ['assets/images/campover2.png', 'assets/images/campover2menu.png'],
      video: null,
      currentImageIndex: 0, number: "02", name:'Campo Noble Website', description: 'Campo Noble Website is a UI/UX design concept focused on presenting a restaurant brand through strong visuals and structured layout. It includes a hero section, brand highlights, and organized content sections that enhance user engagement. The design prioritizes branding consistency and a seamless user experience.', link: 'https://www.figma.com/design/hkAXdCKYQZHDzeRv2r3cUE/Group-campo-noble?node-id=9-172&t=I0eZvH1lCjCEdZNs-1', type: "UI/UX Design / Figma", alt: "Page of Campo Noble Website"},

    {id:5, images: ['assets/images/Timecollection.webp', 'assets/images/tc2.webp'],
      video: null,
      currentImageIndex: 0, number: "03", name:'Time Collection Website', description: 'Time Collection Website is a luxury-inspired UI/UX project created to showcase premium watch collections. It features an elegant hero section, refined typography, and a sophisticated color scheme that reflects a high-end brand identity. The layout is designed to deliver a polished and immersive browsing experience.', link: 'https://www.figma.com/design/wlLPQXjNNaYsSePVEHpOQ1/Time-Collection?node-id=0-1&t=IqrLHuaH1PgkslfW-1', type: "UI/UX Design / Figma", alt: "Page of Time Collection Website"}, 
  ]

  activeProjectId: number | null = null;

  @ViewChildren('videoRef') videoRefs!: QueryList<ElementRef<HTMLVideoElement>>;

  toggleProject(id: number) {
    this.activeProjectId = this.activeProjectId === id ? null : id;
  }

  nextImage(event: Event, project: any) {
  event.stopPropagation();
  if (!project.images) return;
  project.currentImageIndex = (project.currentImageIndex + 1) % project.images.length;
}

  onCardHover(project: any, isHovering: boolean) {
    if (!project.video) return;

    const videoEl = this.videoRefs
      .toArray()
      .map(ref => ref.nativeElement)
      .find(el => el.src.includes(project.video));

    if (!videoEl) return;

    if (isHovering) {
      videoEl.play().catch(() => {}); // catch autoplay-block errors silently
    } else {
      videoEl.pause();
      videoEl.currentTime = 0;
    }
  }
}