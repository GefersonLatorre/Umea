import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Color } from 'src/app/shared/model/color.model';
import { ColorService } from 'src/app/shared/service/color.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styles: [
  ]
})
export class ColorFormComponent implements OnInit {

  @Input("color") datosColor: Color = new Color();
  @Output() public viewColorForm: EventEmitter<boolean> = new EventEmitter();
  constructor(private servicioColor: ColorService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  update(data: Color) {
    this.servicioColor.putColor(data).subscribe(
      res => {
        this.toastr.info('Successfully Modified', 'Name Color Modified');
      },
      err => {
        this.toastr.error('Error', err);
      }
    )
  }
}
