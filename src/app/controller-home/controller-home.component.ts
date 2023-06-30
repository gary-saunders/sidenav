import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-controller-home',
  templateUrl: './controller-home.component.html',
  styleUrls: ['./controller-home.component.scss']
})
export class ControllerHomeComponent implements OnInit {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(private router:Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

  goBackToControllerList(){
    this.router.navigate(['/']);
  }

}
