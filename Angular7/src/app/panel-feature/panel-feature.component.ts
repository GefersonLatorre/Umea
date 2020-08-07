import { Component, OnInit, ViewChild } from '@angular/core';
import { FeatureComponent } from './feature/feature.component';
import { ColorFormComponent } from './color-form/color-form.component';
import { Color } from '../shared/model/color.model';

@Component({
  selector: 'app-panel-feature',
  templateUrl: './panel-feature.component.html',
  styles: [
  ]
})
export class PanelFeatureComponent implements OnInit {

  @ViewChild(FeatureComponent) featureComponent: FeatureComponent;
  @ViewChild(ColorFormComponent) colorFormComponent: ColorFormComponent;
  constructor() { }
  panelsHood: boolean = false;
  panelsBody: boolean = false;
  panelsForm: boolean = false;
  datosC: Color = new Color();

  ngOnInit(): void {
  }

  parentHood(v: any) {
    if (v) {
      this.panelsHood = v;
    } else {
      this.panelsHood = false;
      this.panelsForm = false;
    }
  }

  parentBody(v: any) {
    if (v) {
      this.panelsBody = v;
    } else {
      this.panelsBody = false;
      this.panelsForm = false;
    }
  }

  parentForm(vc: Color) {
    if (vc.Id > 0) {
      this.panelsForm = true;
      this.datosC = vc;
    } else {
      this.panelsForm = false;
    }
  }

  featurePaint(data: any) {
    this.featureComponent.viewer(data);
  }
}
