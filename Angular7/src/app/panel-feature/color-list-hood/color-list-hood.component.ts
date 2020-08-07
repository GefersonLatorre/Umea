import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ColorService } from 'src/app/shared/service/color.service';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/shared/model/color.model';

@Component({
  selector: 'app-color-list-hood',
  templateUrl: './color-list-hood.component.html',
  styles: [
  ]
})
export class ColorListHoodComponent implements OnInit {

  @Output() public viewFeature: EventEmitter<boolean> = new EventEmitter();
  @Output() public viewColorForm: EventEmitter<Color> = new EventEmitter();
  public colors: any;
  constructor(private servicioColor: ColorService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.servicioColor.getColors(0,0,1).subscribe((data: any) => {
      this.colors = data;
    });    
  }

  addColor(color) {
    color.ShowHood = 1;
    this.servicioColor.putColor(color).subscribe(
      res => {
        this.toastr.success('Successfully added', 'Colors Hood Modified');
      },
      err => {
        this.toastr.error('Error', err);
      }
    )
  }

  deleteColor(color) {
    color.ShowHood = 0;
    this.servicioColor.putColor(color).subscribe(
      res => {
        this.toastr.error('Successfully removed', 'Colors Hood Modified');
      },
      err => {
        this.toastr.error('Error', err);
      }
    )
  }

}
