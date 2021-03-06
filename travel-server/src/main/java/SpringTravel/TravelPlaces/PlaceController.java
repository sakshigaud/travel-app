package SpringTravel.TravelPlaces;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/rest")
public class PlaceController {

    @Autowired
    private TravelRepo travelRepo;

    @GetMapping(path = "/places")
    public @ResponseBody
    Iterable<Place> getPlaces() {
        return travelRepo.findAll();
    }

    @PostMapping(path = "/places")
    public String addPlace(@RequestBody Place place) {
        Place p = new Place(place.getName(), place.getState(), place.getDistance());
        travelRepo.save(p);
        return "Returned from database";
    }

    @DeleteMapping(path = "/places/{id}")
    public void deletePlace(@PathVariable Integer id) {
        travelRepo.deleteById(id);
    }

    @PutMapping(path = "/places/{id}")
    public String updatePlace(@RequestBody Place newPlace, @PathVariable Integer id) {
        System.out.print(newPlace);
        travelRepo.findById(id)
                .map(place -> {
                    place.setName(newPlace.getName());
                    place.setState(newPlace.getState());
                    place.setDistance(newPlace.getDistance());
                    return travelRepo.save(place);
                }).orElseGet(() -> {
            newPlace.setId(id);
            return travelRepo.save(newPlace);
        });
        return "place updated in database!";

    }
}


