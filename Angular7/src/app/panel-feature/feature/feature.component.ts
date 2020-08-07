import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Feature } from 'src/app/shared/model/feature.model';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styles: [
  ]
})
export class FeatureComponent implements OnInit {

  image: string;
  datosFeature: Feature = new Feature();

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.image = "../../assets/img/Umea-No-Image.png";
  }

  viewer(data: any) {
    if (Object.entries(data).length === 0) {
      this.toastr.error('You must select an option in all boxes', 'Error');
    } else if (data.Body == undefined) {
      this.toastr.error('You must select a Body', 'Error');
    } else if (data.ColorBody == undefined) {
      this.toastr.error('You must select a Body Color', 'Error');
    } else if (data.Hood == undefined) {
      this.toastr.error('You must select a Hood option', 'Error');
    } else if (data.ColorHood == undefined) {
      this.toastr.error('You must select a Hood Color option', 'Error');
    } else if (data.ColorHood == undefined || data.ColorHood == 'NN') {
      this.toastr.error('You must select a Hood Color option different from None', 'Error');
    } else {
      this.image = "../../assets/img/Umea-" + data.Body + data.Hood + "-" + data.ColorBody + "-" + data.ColorHood + ".png";
      this.datosFeature = {
        Body: data.Body,
        Hood: data.Hood,
        ColorBody: data.ColorBody,
        ColorHood: data.ColorHood
      }
    }
    this.toastr.info('Feature Paint', 'Data');
  }

}
