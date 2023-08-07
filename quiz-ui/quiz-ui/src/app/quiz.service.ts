import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private baseUrl = 'http://localhost:3000/admin';

  constructor(private http: HttpClient) { }

  getQuiz(_id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${_id}`);
  }

  createQuiz(quiz: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, quiz);
  }

  updateQuiz(_id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${_id}`, value);
  }

  deleteQuiz(_id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${_id}`, { responseType: 'text' });
  }

  getQuizzesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}