import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TaoluStepService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('/assets/taolu-step.json');
  }

}