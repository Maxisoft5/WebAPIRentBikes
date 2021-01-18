import { Component, OnInit } from '@angular/core';
import { RentBikesDetailsService } from 'src/app/shared/rent-bikes-details.service';
import { NgForm } from '@angular/forms';
import { Bike } from '../shared/rent-bikes-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rent-bikes-details',
  templateUrl: './rent-bikes-details.component.html',
  styleUrls: ['./rent-bikes-details.component.css'],
  providers: [RentBikesDetailsService]
})
export class RentBikesDetailsComponent implements OnInit {

  editedBike: Bike = new Bike();
  bikes: Array<Bike>;
  availableBikes: Array<Bike>;
  rentBikes: Array<Bike>;
  totalCost: number;
  statusMessage: string;

  constructor(public service: RentBikesDetailsService, private toastr: ToastrService) 
   {
     this.totalCost = 0;
     this.availableBikes = new Array<Bike>();
     this.rentBikes = new Array<Bike>();
   }

  ngOnInit(): void {
    this.loadAvailableBikes();
    this.loadRentBikes();
    console.log(this.availableBikes);
    console.log(this.bikes);
  }

  private loadAvailableBikes() {
    this.service.getAvailableBikes().subscribe(
      data => {
            this.availableBikes = data as Bike[]; 
        });
  }

  private loadRentBikes() {
    this.totalCost = 0;
    this.service.getRentBikes().subscribe(
      data => {
            this.rentBikes = data as Bike[]; 
            for (let i = 0; i < this.rentBikes.length; i++) {
                this.totalCost += this.rentBikes[i].rentCost;
            }
        });
  }

  addAvailableBike(form: NgForm) {
    this.service.getBikes().subscribe(
      data => {
          this.bikes = data as Bike[];
          this.service.createAvailableBike(this.bikes[this.bikes.length - 1].id, this.editedBike);
          this.toastr.success('Submitted successfully', 'The new available bike was registered')
          this.bikes.push(this.editedBike);
          this.availableBikes.push(this.editedBike);
          this.resetForm(form);
          this.loadAvailableBikes();
          this.loadRentBikes();
      }
    )
  }

  deleteBike(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteBike(id)
        .subscribe(
          res => {
            this.loadAvailableBikes();
            this.loadRentBikes();
            this.toastr.success('Deleted successfully', 'The bike was deleted')
          },
          err => { console.log(err) }
        )
    }
  }

  setRentBike(id: number) {
    this.service.setRent(id).subscribe(
      res => {
        this.loadRentBikes();
        this.loadAvailableBikes();
        this.toastr.success('Updated successfully', 'The bike was rented')
      },
      err => { console.log(err); }
    );
  }

  cancelRentBike(id: number) {
    this.service.cancelRent(id).subscribe(
      res => {
        this.loadRentBikes();
        this.loadAvailableBikes();
        this.toastr.success('Updated successfully', "The bike's was cancled")
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Bike();
  }

}
