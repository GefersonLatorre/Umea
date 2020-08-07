import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BodyService } from 'src/app/shared/service/body.service';
import { ColorService } from 'src/app/shared/service/color.service';
import { HoodService } from 'src/app/shared/service/hood.service';
import { Feature } from 'src/app/shared/model/feature.model';
import { ToastrService } from 'ngx-toastr';
import { Body } from 'src/app/shared/model/body.model';

@Component({
  selector: 'app-feature-form',
  templateUrl: './feature-form.component.html',
  styles: [
  ]
})
export class FeatureFormComponent implements OnInit {

  @Output() public viewColorHood: EventEmitter<boolean> = new EventEmitter();
  @Output() public viewColorBody: EventEmitter<boolean> = new EventEmitter();
  @Output() public sendObject: EventEmitter<Feature> = new EventEmitter();
  Object: Feature = new Feature();
  public bodyDatos: any;
  public colorsBody: any;
  public hoodDatos: any;
  public colorsHood: any;
  dataB: Body = new Body;
  dataH: any;
  dataCB: any;
  dataCH: any;
  constructor(private serviceBody: BodyService, private serviceColor: ColorService, private serviceHood: HoodService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.serviceBody.getBodies().subscribe((data: any) => {
      this.bodyDatos = data;
    });
    this.serviceColor.getColors(1, 0, 0).subscribe((data: any) => {
      this.colorsBody = data;
    });
    this.serviceHood.getHoods().subscribe((data: any) => {
      this.hoodDatos = data;
    });
    this.serviceColor.getColors(0, 1, 0).subscribe((data: any) => {
      this.colorsHood = data;
    });
  }

  update() {
    this.dataB = this.bodyDatos.filter(b => b.Number == this.Object.Body)[0];
    this.dataH = this.hoodDatos.filter(h => h.Number == this.Object.Hood)[0];
    this.dataCB = this.colorsBody.filter(cb => cb.Acronym == this.Object.ColorBody)[0];
    this.dataCH = this.colorsHood.filter(ch => ch.Acronym == this.Object.ColorHood)[0];
  }

  saveObject() {
    this.serviceBody.clearBody(this.dataB.Id).subscribe(
      res => { },
      err => {
        this.toastr.error('Error Clear Body', err);
      })
    this.serviceHood.clearHood(this.dataH.Id).subscribe(
      res => { },
      err => {
        this.toastr.error('Error Clear Hood', err);
      })
    this.serviceColor.clearColor(this.dataCB.Id, this.dataCH.Id).subscribe(
      res => { },
      err => {
        this.toastr.error('Error Clear Color', err);
      })
    this.dataB.State = 1;
    this.dataH.State = 1;
    if (this.dataCB.Id == this.dataCH.Id) {
      this.dataCB.Body = 1;
      this.dataCB.Hood = 1;
      this.serviceColor.putColor(this.dataCB).subscribe(
        res => { },
        err => {
          this.toastr.error('Error Color Hood Body', err);
        })
    } else {
      this.dataCB.Body = 1;
      this.serviceColor.putColor(this.dataCB).subscribe(
        res => { },
        err => {
          this.toastr.error('Error Color Body', err);
        })
      this.dataCH.Hood = 1;
      this.serviceColor.putColor(this.dataCH).subscribe(
        res => { },
        err => {
          this.toastr.error('Error Color Hood', err);
        })
    }
    this.serviceBody.putBody(this.dataB).subscribe(
      res => { },
      err => {
        this.toastr.error('Error Body', err);
      })
    this.serviceHood.putHood(this.dataH).subscribe(
      res => { },
      err => {
        this.toastr.error('Error Hood', err);
      })
    this.toastr.success('saved successfully', 'Modified Data');
  }

}
