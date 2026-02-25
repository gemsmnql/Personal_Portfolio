import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Required for ngModel
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private SERVICE_ID = 'service_e8urb4n';
  private TEMPLATE_ID = 'template_w0n5lgp';
  private PUBLIC_KEY = 'qrQ3AhwoWZ7Wt8N47';

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm(this.SERVICE_ID, this.TEMPLATE_ID, e.target as HTMLFormElement, this.PUBLIC_KEY)
      .then(
        () => {
          alert('Message Sent Successfully!');
          (e.target as HTMLFormElement).reset();
        },
        (error) => {
          console.error('FAILED...', (error as EmailJSResponseStatus).text);
          alert('Failed to send message. Check console for details.');
        },
      );
  }
}