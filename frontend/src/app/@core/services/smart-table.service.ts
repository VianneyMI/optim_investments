import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';
import { Operation } from "../../../../../backend";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";


@Injectable()
export class SmartTableService  {
 
  constructor(private http: HttpClient) {}

  private operation: Operation;

  
  getOperations(): Observable<Operation[]> {
    return this.http.get<Operation[]>(`${environment.apiUrl}/operations`);
  }

  createOperation(operation: Operation): Observable<number> {
    return this.http.post<number>(`${environment.apiUrl}/operations`, operation);
  }

  updateOperation(operation: Operation): Observable<Operation> {
    return this.http.put<Operation>(`${environment.apiUrl}/operations`, operation);
  }

  deleteOperation(id:number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/operations/${id}`);
  }
 
}
