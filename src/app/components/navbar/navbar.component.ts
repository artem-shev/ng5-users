import { Router, Routes, Route } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  routes: Routes;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    const regex = /\:/i;
    this.routes = this.router.config.filter(route => !regex.test(route.path) && route.path);
  }

}
