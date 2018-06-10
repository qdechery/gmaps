import { Component } from '@angular/core';
import { SourceCodeService } from '../source-code.service';

@Component({
  template: `
    <h1>Bicycling Layer</h1>
    <ngui-map zoom="14" center="47.6062, 122.3321">
      <bicycling-layer></bicycling-layer>
    </ngui-map>
    <button (click)="sc.plnkr(code)">See in plunker</button>
    <pre class="prettyprint">{{code}}</pre>`
})
export class BicyclingLayerComponent {
  code: string;
  constructor(public sc: SourceCodeService) {
    sc.getText('BicyclingLayerComponent').subscribe(text => this.code = text);
  }
}
