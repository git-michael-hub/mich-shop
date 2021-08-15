import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService {

  constructor(
    private auth: AuthService, 
    private userService: UserService
  ) { }

  canActivate(): Observable<boolean> { 
    return this.auth.appUser$
      .pipe(map((appUser: any) => appUser.isAdmin));
  }
}
