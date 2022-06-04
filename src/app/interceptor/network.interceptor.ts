import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameService } from '../game/game.service';
import { finalize } from 'rxjs/operators'

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

  constructor(
    private gameService: GameService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // this.gameService.show();
    return next.handle(request).pipe(
      finalize(() => {
        // this.gameService.hide();
      })
    );
  }
}
