import { Component } from '@angular/core';

import * as wasm from '../assets/pkg/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'utils_ex';


  UUiD: string = ''

  onBttonClick() {
    // call WASM and get the UUID
    console.log(wasm.gen_uuid())
    this.UUiD = wasm.gen_uuid()
  }

}
