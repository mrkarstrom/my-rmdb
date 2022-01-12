import React, { useState } from 'react'; //Always do this in every component!

//Config

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

//Components

//Hooks

//Image
import NoImage from '../images/no_image.jpg'; //The name NoImage is arbitrary

//**All React-components ALWAYS have a capital first letter in their names!
const Home = () => {
  //The name 'state' is arbitrary - then you add the set to the second parameter: setstate or whatever
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);

  return <div>Home Page</div>;
};
