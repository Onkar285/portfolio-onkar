import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('sidenav', { static: false }) sidenav!: MatSidenav;

  close(reason: string) {
    this.sidenav.close();
  }
}
