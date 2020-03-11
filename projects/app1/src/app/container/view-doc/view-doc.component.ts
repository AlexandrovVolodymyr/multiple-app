import { Component, OnDestroy, OnInit } from '@angular/core';
import { HelloService } from 'projects/lib-tools/src/lib/hello.service';
import { LibToolsService } from 'projects/lib-tools/src/lib/lib-tools.service';
import { IUsers } from 'projects/app1/src/app/interfaces/iusers';
import { SwUpdate } from '@angular/service-worker';
import { LogUpdateService } from 'projects/app1/src/app/services/log-update.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-view-doc',
  templateUrl: './view-doc.component.html',
  styleUrls: ['./view-doc.component.scss']
})
export class ViewDocComponent implements OnInit, OnDestroy {
  public title: string;
  public users: IUsers[];
  public joke: any;

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private _helloService: HelloService,
    private _userService: LibToolsService,
    private _updates: SwUpdate,
    private _logUpdate: LogUpdateService
  ) {
    this.title = _helloService.message;
    _updates.available.subscribe(event => {
      _updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit(): void {
    this._logUpdate.gimmeJokes()
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(res => this.joke = res);
  }

  getUsers() {
    this._userService.getUsers()
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(users => this.users = users);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.unsubscribe$.unsubscribe();
  }

}
