package SpringTravel.TravelPlaces;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TravelRepo extends CrudRepository<Place, Integer> {

}
