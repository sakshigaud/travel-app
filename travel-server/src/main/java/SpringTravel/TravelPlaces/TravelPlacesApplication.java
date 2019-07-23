package SpringTravel.TravelPlaces;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication(scanBasePackages = {"SpringTravel.TravelPlaces"})
public class TravelPlacesApplication {

    public static void main(String[] args) {
        SpringApplication.run(TravelPlacesApplication.class, args);
        System.out.println("Application Running on port: 8080!");
    }
    @Bean
    CommandLineRunner init(TravelRepo travel) {
        return args -> {
             Place place = new Place("Chikmaglur", "KA", 250);
                travel.save(place);

            travel.findAll().forEach(System.out::println);
        };
    }
}

