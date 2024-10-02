import { Injectable } from '@angular/core';
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root'
})
export class GsapService {

  constructor() { }

  fadeIn(element: HTMLElement, duration = 0.5): void {
    gsap.fromTo(element, { opacity: 0 }, { opacity: 1, duration });
  }

  fadeOut(element: HTMLElement, duration = 0.5): void {
    gsap.to(element, { opacity: 0, duration });
  }

  // Add more animation methods as needed
}