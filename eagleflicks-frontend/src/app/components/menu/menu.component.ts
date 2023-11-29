import { Component, OnInit } from '@angular/core';
import { MenuAdminService } from '../../services/menu-admin.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  movieCount: number;
  actorCount: number;
  countryCount: number;
  userCount: number;
  DirectorCount: number;
  GenreCount: number;
  AdminCount: number;

  constructor(private serviMenu: MenuAdminService) { }

  ngOnInit(): void {
    this.showCounts();
  }

  showCounts() {
    this.serviMenu.getMenuData().subscribe(data => {
      console.log('Counts: ', data);
      this.movieCount = data.Movies;
      this.actorCount = data.Actors;
      this.countryCount = data.Countries;
      this.userCount = data.Users;
      this.DirectorCount = data.Directors;
      this.GenreCount = data.Genres;
      this.AdminCount = data.Admins;
    });
  }
}

