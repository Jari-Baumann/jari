import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuHovered: boolean = false;
  menuOpened: boolean = false;
  tabLinksOpened: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.listen('document', 'click', (event: Event) => {
      const target = event.target as HTMLElement;
      const clickedInside = this.elRef.nativeElement.contains(target);
      if (!clickedInside && this.menuOpened) {
        this.closeMenu();
      }
    });
  }

  togglemenu() {
    this.menuOpened = !this.menuOpened;

    const icon = document.querySelector('.menuIcon')!;
    const bars = document.querySelectorAll('.menubar');
    const iconClassList = Array.from(icon.classList);

    iconClassList.includes('translate')
      ? icon.classList.toggle('rotate')
      : icon.classList.toggle('translate');

    bars.forEach((bar) => {
      bar.classList.toggle('transitioning');
    });

    setTimeout(() => {
      iconClassList.includes('translate')
        ? icon.classList.toggle('translate')
        : icon.classList.toggle('rotate');

      bars.forEach((bar) => {
        bar.classList.toggle('transitioning');
      });
    }, 1300);
  }

  closeMenu() {
    this.menuOpened = false;
    const icon = document.querySelector('.menuIcon');
    if (icon?.classList.contains('translate')) icon.classList.remove('translate');
    if (icon?.classList.contains('rotate')) icon.classList.remove('rotate');

    document.querySelectorAll('.menubar').forEach(bar => {
      bar.classList.remove('transitioning');
    });

    const openedElements = Array.from(document.getElementsByClassName('opened'));
    openedElements.forEach((element) => {
      element.classList.remove('opened');
    });
  }
}
