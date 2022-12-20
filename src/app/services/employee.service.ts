import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

// @ts-ignore

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<EmployeeModel[]>('https://dummy.restapiexample.com/api/v1/employees').pipe(
      map((response: any) => response.data)
    )
  }

  getOne(id: string): Observable<EmployeeModel> {
    return this._httpClient.get<EmployeeModel>(`https://dummy.restapiexample.com/api/v1/employee/${id}`).pipe(
      map((response: any) => response.data)
    )
  }
}
