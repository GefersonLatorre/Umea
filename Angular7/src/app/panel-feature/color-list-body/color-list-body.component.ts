import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ColorService } from 'src/app/shared/service/color.service';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/shared/model/color.model';

@Component({
  selector: 'app-color-list-body',
  templateUrl: './color-list-body.component.html',
  styles: [
  ]
})
export class ColorListBodyComponent implements OnInit {

  @Output() public viewFeature: EventEmitter<boolean> = new EventEmitter();
  @Output() public viewColorForm: EventEmitter<Color> = new EventEmitter();
  public colors: any;
  constructor(private serviceColor: ColorService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.serviceColor.getColors(0,0,1).subscribe((data: any) => {
      this.colors = data;
    });    
  }

  addColor(color) {
    color.ShowBody = 1;
    this.serviceColor.putColor(color).subscribe(
      res => {
        this.toastr.success('Successfully added', 'Colors Body Modified');
      },
      err => {
        this.toastr.error('Error', err);
      }
    )
  }

  deleteColor(color) {
    color.ShowBody = 0;
    this.serviceColor.putColor(color).subscribe(
      res => {
        this.toastr.error('Successfully removed', 'Colors Body Modified');
      },
      err => {
        this.toastr.error('Error', err);
      }
    )
  }

}
