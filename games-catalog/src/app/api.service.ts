import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Game } from './types/games';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getGames() {
    const { apiUrl } = environment;

    let url = `${apiUrl}/games`

    return this.http.get<Game[]>(url);
  }

  getSingleGame(id:string) {
    const { apiUrl } = environment;

    return this.http.get<Game>(`${apiUrl}/games/${id}`)
  }

  createGame(
    name: string,
    image: string,
    price: number,
    description: string,
    genre: string
  ) {
    const { apiUrl } = environment;
    const payload = { name, image, price, description, genre };

    return this.http.post<Game>(`${apiUrl}/games`, payload);
  }

  updateGame(
    id: string,
    updates: Partial<{ name: string; image: string; price: number; description: string; genre: string }>
  ) {
    const { apiUrl } = environment;

    return this.http.put<Game>(`${apiUrl}/games/${id}`, updates);
  }

  deleteGame(id: string) {
    const { apiUrl } = environment;

    return this.http.delete<{ message: string }>(`${apiUrl}/games/${id}`);
  }

  buyGame(id: string) {
    const { apiUrl } = environment;

    return this.http.put<Game>(`${apiUrl}/games/${id}/buy`, {});
  }
}
