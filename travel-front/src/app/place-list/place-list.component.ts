import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/service/place.service';
import { Place } from 'src/model/Place';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit {

  editPlace= false;
  places: Place[];

  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    this.placeService.findAll().subscribe(data => {
      this.places = data;
    });
  }

  delete(place){
    this.placeService.delete(place).subscribe(result =>this.placeService.displayList());
    window.alert(`${place.name} deleted!`);
   }

   updatePlace(place){
         this.placeService.updatePlace(place).subscribe(result =>console.log("Place"));

   }

}
