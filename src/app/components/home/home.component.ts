 // import { MediaMatcher } from '@angular/cdk/layout';
// import {ChangeDetectorRef, Component} from '@angular/core';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {

    /*
    mobileQuery: MediaQueryList;

    fillerNav = Array(50).fill(0).map((_, i) => `Nav Item ${i + 1}`);

    fillerContent = Array(50).fill(0).map(() =>
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
         voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
         cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

    private _mobileQueryListener: () => void;

    constructor(changeDetectorRef: ChangeDetectorRef) {
         this.mobileQuery = media.matchMedia('(max-width: 600px)');
         this._mobileQueryListener = () => changeDetectorRef.detectChanges();
         this.mobileQuery.addListener(this._mobileQueryListener);
    }
    */

    ngOnDestroy(): void {
        // this.mobileQuery.removeListener(this._mobileQueryListener);
    }

}
