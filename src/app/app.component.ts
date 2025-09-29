import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiGoVanService } from './services/api-go-van.service';
import { User } from './models/user.model'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'go-van-project';
  posts: any[] = [];
  
  constructor(private apiGoVanService : ApiGoVanService){}

  ngOnInit(): void {
    this.carregarPosts();
  }

  carregarPosts(): void {
    this.apiGoVanService.getUsers().subscribe({
      next: (dados) => {
        this.posts = dados;
        console.log('Posts carregados com sucesso:', this.posts);
      },
      error: (erro) => {
        console.error('Ocorreu um erro ao buscar os posts:', erro);
      }
    });
  }
}
