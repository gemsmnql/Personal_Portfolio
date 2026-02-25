import { DatePipe } from '@angular/common';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, DatePipe, FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit, OnDestroy {
  Todaydate: Date = new Date();
  private timer: any;

  // Replace these with your actual IDs
  private SERVICE_ID = 'service_e8urb4n';
  private TEMPLATE_ID = 'template_w0n5lgp';
  private PUBLIC_KEY = 'qrQ3AhwoWZ7Wt8N47';

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.timer = setInterval(() => {
      this.Todaydate = new Date();
      this.cdr.detectChanges();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }

  // 3. Email Submission Logic
  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm(this.SERVICE_ID, this.TEMPLATE_ID, e.target as HTMLFormElement, this.PUBLIC_KEY)
      .then(
        () => {
          alert('Request Sent Successfully!');
          (e.target as HTMLFormElement).reset();
        },
        (error) => {
          console.error('FAILED...', (error as EmailJSResponseStatus).text);
          alert('Failed to send request.');
        }
      );
  }
}