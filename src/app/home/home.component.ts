import { Component, OnInit, ElementRef } from '@angular/core';
import { GsapService } from '../services/gsap.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private gsapService: GsapService, private el: ElementRef) { }

  ngOnInit(): void {
    this.gsapService.fadeIn(this.el.nativeElement.querySelector('.my-element'));
  }

  
}

