import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { ICategories } from '../models/categories.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll(): Observable<ICategories[]> | undefined {
    const data: any = this.db.list('/categories', ref => ref.orderByChild('name')).valueChanges();
    
    return data || undefined;
  }
}
