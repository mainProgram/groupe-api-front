import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISujet } from '../interfaces/Sujet';

@Injectable({
  providedIn: 'root'
})
export class SujetService {

  constructor(private http:HttpClient) { }

  public getSujets(){  return this.http.get<ISujet>(environment.SUJET_URL).pipe( catchError(this.handleError))  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
