import { Component, Output, EventEmitter } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { BannerBttComponent } from '../banner-btt/banner-btt.component';
import { BannerCountdownComponent } from '../banner-countdown/banner-countdown.component';

@Component({
  selector: 'app-header-nav-black',
  standalone: true,
  imports: [RouterModule, BannerBttComponent, BannerCountdownComponent],
  templateUrl: './header-nav-black.component.html',
  styleUrl: './header-nav-black.component.css',
})
export class HeaderNavBlackComponent {
  @Output() selected = new EventEmitter<string>();
  @Output() selectedBanner = new EventEmitter<string>();

  constructor(private router: Router) {}

  selectBtt() {
    this.router.navigate(['btt-algars']);
    this.selected.emit('btt');
  }

  selectHome() {
    this.router.navigate(['']);
    this.selected.emit('home');
  }

  selectGaleria() {
    this.router.navigate(['']);
    this.selected.emit('about');
  }

  showSidebar() {
    const sidebar: HTMLElement | null = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  }

  hideSidebar() {
    const sidebar: HTMLElement | null = document.getElementById('sidebar');
    if (sidebar) {
      document.body.style.overflow = 'auto';
      sidebar.classList.add('sidebar-closed');
      setTimeout(function () {
        sidebar.classList.remove('sidebar-closed');
        sidebar.style.display = 'none';
      }, 500);
    }
  }

  getSelected(selected: string) {
    this.selectedBanner.emit(selected);
  }
}
