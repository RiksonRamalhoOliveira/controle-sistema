import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SistemasServiceService {

  api = 'https://node-todo-dev.herokuapp.com/api/todos';

  constructor(private http: HttpClient) {

  }

  createSistema(DescSistema) {
    const todo = {
      description: DescSistema
    };
    this.http.post(`${this.api}`, todo).subscribe(res => console.log('Created'));
  }

  findAllSistema() {
    return this.http.get(`${this.api}`);
  }

  findSistema(id) {
    return this.http.get(`${this.api}/${id}`)
  }

  updateSistema(DescSistema,  id) {
    const sistema = {
      description: DescSistema,
    };
    this.http.put(`${this.api}/${id}`, sistema).subscribe(res => console.log('Updated!'));
  }

  deleteSistema(id) {
    return this.http.delete(`${this.api}/${id}`);
  }
}