import { SocialAuthService } from '@abacritt/angularx-social-login';
import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ["login.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private socialAuth: SocialAuthService, private router: Router, @Inject(DOCUMENT) public document: Document) { }
  private destroy$ = new Subject()
  private observer: MutationObserver = null

  @HostBinding('class.has-credential-container')
  public googleContainerShowing = false

  public ngOnDestroy() {
    this.destroy$.next(false)
    this.destroy$.complete()
    this.observer.disconnect()
  }

  public async ngOnInit() {
    this.socialAuth.authState.pipe(takeUntil(this.destroy$)).subscribe(user => {
      if (user) {
        this.router.navigate(['/'])
        return
      }
    })

    this.googleContainerShowing = !!this.document.querySelector('#credential_picker_container')
    this.observer = new MutationObserver(mutations => {
      this.googleContainerShowing = !!this.document.querySelector('#credential_picker_container');
    });

    this.observer.observe(this.document.documentElement, {
      childList: true,
      subtree: true,
    })
  }
}
