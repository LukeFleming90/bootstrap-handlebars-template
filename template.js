window.onload = function() {
    $(function() {

        // function getAnimalData() {

        //     fetch('https://zoo-animal-api.herokuapp.com/animals/rand/8')
        //               .then(response => response.json())
        //               .then(data => console.log(data))
      
            
      
        //       }
      
        //     var obj = {
        //       array: getAnimalData()
        //     }

        var source = $("#template").html();
        var template = Handlebars.compile(source);
        var html = template(obj);
        $('#results').html(html);
      });

      
      
      var obj = {
          array: [
            {
            "name": "Black Howler Monkey",
            "latin_name": "Alouatta caraya",
            "animal_type": "Mammal",
            "active_time": "Diurnal",
            "length_min": "1.5",
            "length_max": "2",
            "weight_min": "9",
            "weight_max": "22",
            "lifespan": "18",
            "habitat": "Tropical forest",
            "diet": "Leaves, flowers and fruit",
            "geo_range": "South America",
            "image_link": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Black_Howler_Monkey_Portrait_1.jpg",
            "id": 31
            },
            {
            "name": "Screaming Hairy Armadillo",
            "latin_name": "Chaetophractus vellerosus",
            "animal_type": "Mammal",
            "active_time": "Diurnal",
            "length_min": "1",
            "length_max": "1.3",
            "weight_min": "1.75",
            "weight_max": "2",
            "lifespan": "16",
            "habitat": "Desert, grassland, scrubland, and forest",
            "diet": "Plants, insects, and other small animals",
            "geo_range": "Central South America",
            "image_link": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Chaetophractus_vellerosus3.jpg",
            "id": 160
            },
            {
            "name": "Burmese Python",
            "latin_name": "Python molurus",
            "animal_type": "Reptile",
            "active_time": "Nocturnal",
            "length_min": "16",
            "length_max": "25",
            "weight_min": "140",
            "weight_max": "200",
            "lifespan": "20",
            "habitat": "Tropical forest",
            "diet": "Birds, mammals, and reptiles",
            "geo_range": "Southern and Southeastern Asia",
            "image_link": "https://upload.wikimedia.org/wikipedia/commons/8/85/Burmese_python_%286887388927%29.jpg",
            "id": 49
            },
            {
            "name": "African Painted Dog",
            "latin_name": "Lycaon pictus",
            "animal_type": "Mammal",
            "active_time": "Diurnal",
            "length_min": "2.5",
            "length_max": "4",
            "weight_min": "44",
            "weight_max": "71",
            "lifespan": "10",
            "habitat": "Savannah, woodland and semi-desert",
            "diet": "Primarily antelope; some warthogs, hares and small animals",
            "geo_range": "Central and Southern Africa",
            "image_link": "https://upload.wikimedia.org/wikipedia/commons/b/ba/African_wild_dog_%28Lycaon_pictus_pictus%29.jpg",
            "id": 4
            },
            {
            "name": "Pigeon Guillemot",
            "latin_name": "Cepphus columba",
            "animal_type": "Bird",
            "active_time": "Diurnal",
            "length_min": "0.88",
            "length_max": "1.2",
            "weight_min": "1",
            "weight_max": "1.1",
            "lifespan": "15",
            "habitat": "Ocean and rocky coastal cliffs",
            "diet": "Fish and aquatic invertebrates",
            "geo_range": "Arctic and Pacific oceans and coasts of North America and Asia",
            "image_link": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Pigeon_guillemot.jpg",
            "id": 135
            },
            {
            "name": "Atlantic Puffin",
            "latin_name": "Fratercula",
            "animal_type": "Bird",
            "active_time": "Diurnal",
            "length_min": "0.8",
            "length_max": "0.83",
            "weight_min": "0.81",
            "weight_max": "0.75",
            "lifespan": "20",
            "habitat": "Ocean cliffs",
            "diet": "Fish, mollusks and crustaceans",
            "geo_range": "North Atlantic Ocean",
            "image_link": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Puffin_%28Fratercula_arctica%29.jpg",
            "id": 20
            },
            {
            "name": "Red Panda",
            "latin_name": "Ailurus fulgens",
            "animal_type": "Mammal",
            "active_time": "Nocturnal",
            "length_min": "1.5",
            "length_max": "2",
            "weight_min": "6.5",
            "weight_max": "14",
            "lifespan": "10",
            "habitat": "Mountain forest",
            "diet": "Primarily bamboo shoots and leaves; some roots, fruit, grasses, acorns, lichens, small animals",
            "geo_range": "South to Southeast Asia",
            "image_link": "https://upload.wikimedia.org/wikipedia/commons/5/50/RedPandaFullBody.JPG",
            "id": 145
            },
            {
            "name": "Thick-Billed Parrot",
            "latin_name": "Rhynchopsitta pachyrhyncha",
            "animal_type": "Bird",
            "active_time": "Diurnal",
            "length_min": "1.2",
            "length_max": "1.25",
            "weight_min": "0.69",
            "weight_max": "0.94",
            "lifespan": "10",
            "habitat": "Mountain forest",
            "diet": "Pine cones, acorns, and berries",
            "geo_range": "Western Mexico",
            "image_link": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Rhynchopsitta_pachyrhyncha_-Arizona-Sonora_Desert_Museum%2C_Tucson%2C_Arizona%2C_USA-8a.jpg",
            "id": 173
            }
            ]
      }
  }