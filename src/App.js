import "./App.css";
import "./index.css";
import { Fragment, useState } from "react";
import MovieList from "./component/MovieList";

import Navbar from "./component/Navbar";
import Search from "./component/Search";

import AddMovie from "./component/AddMovie";
import { Container } from "react-bootstrap";
const moviesData = [
  {
    id: 1,
    title: "Frozen",
    description:
      " A young girl as daring as she is optimistic, embarks in the company of Kristoff, an experienced mountaineer, and her faithful reindeer Sven, in search of her sister, Elsa plunged the kingdom of Arendelle in an eternal winter... ",
    posterURL:
      "https://www.geox.com/on/demandware.static/-/Library-Sites-geoxSharedLibrary/default/dw3dddd44c/landing-editoriali/Frozen_Refresh/M-editorial-focus.jpg",
    //
    rating: 5,
  },

  {
    id: 2,
    title: "Tangled",
    description:
      "The most wanted bandit in the kingdom, takes refuge in a mysterious tower, he finds himself taken hostage by Rapunzel with impressive hair 20 meters long, kept prisoner by Mother Gothel.Flynn's amazing jailer is looking for a way out of this tower where she's been locked up for years.she comes to an arrangement with the seductive bandit. ",
    posterURL: "https://m.media-amazon.com/images/I/51sPEaO-5cL._AC_.jpg",

    rating: 4,
  },

  {
    id: 3,
    title: "Aladdin",
    description:
      "When a charming street boy named Aladdin seeks to conquer the heart of the beautiful Princess Jasmine, he calls on the all-powerful Genie, the only one who can grant him three wishes, including that of becoming Prince Ali in order to gain better access to the palace.",
    posterURL: "https://media.s-bol.com/x7zxzqvwEPLE/gZGqzVr/550x722.jpg",

    rating: 4,
  },
  {
    id: 4,
    title: "Encanto",
    description:
      "The Madrigals are an extraordinary family lives in the Encanto. The magic of the Encanto blessed each child in the family with a unique gift. Every child except Mirabel.she may soon be the Madrigals' last hope, when she discovers that the magic surrounding the Encanto is now in danger.",
    posterURL:
      " https://www.cartonionline.com/wordpress/wp-content/uploads/2021/10/7ea88dd3-e603-9040-7580-6c2560a580ca1.jpg",

    rating: 5,
  },
  {
    id: 5,
    title: "Luca",
    description:
      "The film was directed by Enrico Casarosa.Even though his mother has strictly forbidden him, Luca, a young sea monster, ventures out of the water. He then discovers that once dry, his scales disappear, allowing him to take on a human appearance",
    posterURL:
      "https://images.moviesanywhere.com/f95f804467439ccffaddb406e9bd7e33/9cc6a3c0-0bba-4637-82b7-90fc1f6b1fa1.jpg",

    rating: 4,
  },
  {
    id: 6,
    title: "Cinderella",
    description:
      " About a girl lived with her stepmother and two stepsisters,she had to work hard all day long The King and Queen were going to have a ball!  It was time for the Prince to find a bride. All of the young ladies in the land were invited to come...",
    posterURL:
      "https://lumiere-a.akamaihd.net/v1/images/p_cinderella_20490_a7c83808.jpeg?region=0%2C0%2C540%2C810",

    rating: 3,
  },
  {
    id: 7,
    title: "Sleeping Beauty",
    description:
      "Princess Aurora is gifted by three good fairies endless beauty and a superb voice. Everything seems to be going well, but Maleficent, the wicked fairy, not having been invited to discover the baby, casts a terrible spell on her.",
    posterURL: "https://imgsrc.cineserie.com/2020/09/1615761.jpg?ver=1",

    rating: 3,
  },
  {
    id: 8,
    title: "Beauty and the Beast",
    description:
      "Belle loves reading. Only Maurice, her father, a wacky inventor, counts in her life. One day when the latter gets lost in the forest, he takes refuge in a castle to escape a pack of wolves. Angered by his intrusion, the master of the place, the Beast, throws him into a dungeon. To save her father, Belle agrees to be held prisoner in his place.",
    posterURL:
      "https://i.scdn.co/image/ab67616d0000b27380267288bf73e6258b6d6db1",

    rating: 5,
  },
];

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(1);
  const addNewMovie = (newMovie) => moviesData.push(newMovie);
  console.log(moviesData);
  return (
    <Fragment>
      <Navbar />
      <div className="d-flex bd-highlight">
        <div className="p-2 w-100 bd-highlight">
          <Search
            ratingSearch={ratingSearch}
            setRatingSearch={setRatingSearch}
            setSearch={setNameSearch}
          />
        </div>
        <div className="p-2 flex-shrink-1 bd-highlight">
          <AddMovie addNewMovie={addNewMovie} />
        </div>
      </div>
      <MovieList
        moviesData={moviesData}
        moviesList={moviesData.filter(
          (el) =>
            el.title.toLowerCase().includes(nameSearch.toLowerCase().trim()) &&
            el.rating === ratingSearch
        )}
      />
    </Fragment>
  );
}

export default App;
/*posterURL :https://static.pointculture.be/media/b3/8c/60/cover_ys4898_scale_345x750.jpg
description:Snow White, pursued by the jealousy of the evil queen, takes refuge with the dwarves of the forest. But the queen, transformed into a witch, discovers her and succeeds in making her eat a poisoned apple. The dwarves believe their friend dead and keep her in a glass coffin */
