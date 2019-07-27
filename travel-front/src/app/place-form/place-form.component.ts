import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceService } from 'src/service/place.service';
import { Place } from 'src/model/Place';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-place-form',
  templateUrl: './place-form.component.html',
  styleUrls: ['./place-form.component.scss']
})
export class PlaceFormComponent implements OnInit {
  placeForm = new FormGroup({
    city: new FormControl(''),
    state: new FormControl(''),
    distance: new FormControl(''),
  });
  place : Place;
  addPlace: boolean;
  submitted = false;
 
  constructor(private route: ActivatedRoute, private router: Router, private placeService:PlaceService, private formBuilder: FormBuilder) {
    this.place = new Place();
  
}

   onSubmit(){
     this.placeService.save(this.place).subscribe(result =>this.displayList());
     this.placeForm.reset();
     this.addPlace = true;
     setTimeout(() => this.addPlace = false,2000);
    
   }
   
   displayList(){
     this.placeService.displayList();

   }

  ngOnInit() {
  }

}
