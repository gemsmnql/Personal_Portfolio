import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink, DatePipe, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  selectedCert = 'assets/images/cert1.JPG';
  SelectedCertTitle = 'freeCodeCamp Responsive Web Design Certification';
  SelectedCertDate = 'September 7, 2024';
  SelectedCertLink = "https://www.freecodecamp.org/certification/jamesmananquil/responsive-web-design";

  feedbacks = [
    {comment: 'James consistently delivers clean and visually appealing interfaces. He pays close attention to user experience and makes sure every design feels intuitive and polished. His creativity and understanding of UI principles truly elevate his work.', name: "Luis Aquino", position: "UI/UX Designer", image: "assets/images/luis.jpg"},
    {comment: 'Working with James is always smooth because he understands both design and functionality. His front-end code is well-structured, responsive, and easy to maintain. He brings concepts to life with precision and creativity.', name: "Kevin Galang", position: "Full Stack Developer", image: "assets/images/kevin.jpg"},
    {comment: 'James has a strong eye for layout, spacing, and responsiveness. He knows how to turn ideas into engaging web interfaces while keeping performance and usability in mind. His balance of creativity and technical skill makes him a valuable teammate.', name: "Justin Cabe", position: "Fron End Developer", image: "assets/images/cabe.jpg"},
  ]

  scroll(direction: 'left' | 'right', element: HTMLElement) {
    const scrollAmount = element.offsetWidth / 1.5; 

    if (direction === 'left') {
      element.scrollLeft -= scrollAmount;
    } else {
      element.scrollLeft += scrollAmount;
    }
  }
}
