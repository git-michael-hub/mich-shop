import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product: unknown) { 
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products').snapshotChanges();
  }
  
  get(productId: string) { 
    return this.db.object('/products/' + productId).valueChanges();
  }

  update(productId: string, product: Partial<unknown>) { 
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId: string | null) { 
    return this.db.object('/products/' + productId).remove();
  }
}
