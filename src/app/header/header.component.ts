import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuHovered: boolean = false;
  menuOpened: boolean = false;

  ngOnInit() {
    const menu = document.getElementById('menu')!
    let menuItems: HTMLCollectionOf<Element> = document.getElementsByClassName('menuItem')!
    document.addEventListener('click', function(event) {
      const target = event.target as HTMLElement
      if (!menu.contains(target)) {
        for (let i = 0; i < menuItems.length; i++) {
          menuItems.item(i)!.classList.toggle('opened')
        }
      }
    })
  }

  togglemenu() {
    this.menuOpened = !this.menuOpened
    const icon = document.querySelector('.menuIcon')!
    const bars = document.querySelectorAll('.menubar')
    const iconClassList = Array.from(icon.classList)

    iconClassList.includes('translate') ? icon.classList.toggle('rotate') : icon.classList.toggle('translate')
    bars.forEach((bar) => {
      bar.classList.toggle('transitioning')
    })
    setTimeout(() => {
      iconClassList.includes('translate') ? icon.classList.toggle('translate') : icon.classList.toggle('rotate')
      bars.forEach((bar) => {
        bar.classList.toggle('transitioning')
      })
    }, 1000)
  }


}
