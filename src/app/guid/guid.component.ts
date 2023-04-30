import { Component } from '@angular/core';
import * as wasm from '../../assets/pkg/utils';

@Component({
  selector: 'app-guid',
  templateUrl: './guid.component.html',
  styleUrls: ['./guid.component.css']
})
export class GuidComponent {
  UUiD: string = ''

  onBttonClick() {
    // call WASM and get the UUID
    // console.log(wasm.gen_uuid())
    this.UUiD = wasm.gen_custom_uuid()
  }
}
