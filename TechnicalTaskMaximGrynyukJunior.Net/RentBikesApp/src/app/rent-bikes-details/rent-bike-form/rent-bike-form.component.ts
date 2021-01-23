import { Component, OnInit } from '@angular/core';
import { RentBikesDetailsService } from 'src/app/shared/rent-bikes-details.service';
import { NgForm } from '@angular/forms';
import { Bike } from 'src/app/shared/rent-bikes-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rent-bike-form',
  templateUrl: './rent-bike-form.component.html',
  styleUrls: ['./rent-bike-form.component.css'],
  providers: [RentBikesDetailsService]
})
export class RentBikeFormComponent implements OnInit {

    constructor(public service: RentBikesDetailsService, private toastr: ToastrService) {
    }

    ngOnInit(): void {}

    resetForm(form: NgForm) {
        form.form.reset();
        this.service.formData = new Bike();
    }

    addRentBike(form: NgForm) {
        this.service.createRentBike().subscribe(
            data => {
                this.toastr.success('Submitted successfully', 'The new rent bike was registered');
                this.service.getRentBikes();
                this.resetForm(form);
            }
        );
    }

}
