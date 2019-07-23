package SpringTravel.TravelPlaces;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Place {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
    private String name;
    private String state;
    private long distance;

    public Integer getId() {
        return id;
    }
    public Place(){}
    public void setId(Integer id) {
        this.id = id;
    }
    public void setName(String name) {
        this.name = name;
    }

    public void setState(String state) {
        this.state = state;
    }

    public void setDistance(long distance) {
        this.distance = distance;
    }

    public String getName() {
        return name;
    }

    public Place(String name, String state, long distance) {
        this.name = name;
        this.state = state;
        this.distance = distance;
    }

    public String getState() {
        return state;
    }

    public long getDistance() {
        return distance;
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "Place{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", state='" + state + '\'' +
                ", distance=" + distance +
                '}';
    }
}
