import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import firebase from 'firebase/app';
import { AppUser } from '../models/app-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User | null>;

  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth, 
    private route: ActivatedRoute
  ) { 
    this.user$ = afAuth.authState;    
  }

  login(): void {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(): void { 
    this.afAuth.signOut();
  }

  get appUser$(): Observable<AppUser | unknown> {
    return this.user$
      .pipe(
        switchMap((user: any) => {
          if (user) return this.userService.get(user.uid);

          return of(null);
        })
      );    
  }
}
