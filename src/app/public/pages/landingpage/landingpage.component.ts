import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./styles.css']
})
export class LandingpageComponent implements OnInit, AfterViewInit {
  emailForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.addEventListeners();
  }

  addEventListeners(): void {
    this.toggleContent('about-button', 'about-content');
    this.toggleContent('about-us-button', 'about-us-content');
    this.smoothScrolling();
  }

  toggleContent(buttonId: string, contentId: string): void {
    const button = document.getElementById(buttonId);
    const content = document.getElementById(contentId);

    if (button && content) {
      button.addEventListener('click', () => {
        if (content.style.display === 'none') {
          content.style.display = 'block';
          setTimeout(() => content.classList.add('show'), 50);
        } else {
          content.classList.remove('show');
          setTimeout(() => content.style.display = 'none', 500);
        }
      });
    }
  }

  smoothScrolling(): void {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  onSubmit(): void {
    if (this.emailForm.valid) {
      // Handle form submission
    }
  }
}
