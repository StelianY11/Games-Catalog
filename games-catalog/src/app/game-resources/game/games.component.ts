import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Game } from '../../types/games';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent implements OnInit {
  games: Game[] = [];
  isGames = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(){
    this.apiService.getGames().subscribe((games) => {
      this.games = games;
    });
  }
}
