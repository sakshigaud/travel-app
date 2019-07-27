import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';
import { PlaceService } from 'src/service/place.service';
import { Place } from 'src/model/Place';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit {

deletePlace: boolean;
  editPlace: boolean;
//places: Place[];
  places = [
    {id: "1", name: "Coorg",state: "KA", distance: 236},
    {id: "2",name: "Kodaikanal",state: "TN", distance: 456}
      ];
  constructor(private placeService: PlaceService) { }

  ngOnInit() {
   console.log("fsfsf");
   this.placeService.findAll().subscribe((place: Place[]) =>
      this.places = place
    // JSON.stringify(this.places);
    //);
   );
  }

  delete(place){

   this.placeService.delete(place.id).subscribe(() =>this.placeService.findAll());
    this.deletePlace = true;
    setTimeout(() => this.deletePlace = false, 2000);
     }

   updatePlace(place){
     this.placeService.updatePlace(place).subscribe();
        this.editPlace = true;
       setTimeout(() => this.editPlace = false, 2000);

   }
   displayList(){
    this.placeService.displayList();

  }


}
