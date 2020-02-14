import lineargradgen from '../assets/lineargradgen.png';
import project2 from '../assets/project2.png';
import robofriends from '../assets/robofriends.png';
import project3 from '../assets/project3.png';

const PROJECTS = [
  {
    id: 1,
    title: 'Linear Gradient Generator',
    description:
      'A linear color gradient app I built, using JS and core web dev concepts!',
    link: 'https://github.com/wptechprodigy/lineargradientgen',
    image: lineargradgen,
  },
  {
    id: 2,
    title: 'HackerPlace',
    description:
      'A place where coding nerds get together that I built with NodeJs, Express, Apollo-client, GraphQL (on the backend) and React (on the frontend)!',
    link: 'https://github.com/wptechprodigy/hackerplace',
    image: project2,
  },
  {
    id: 3,
    title: 'Smart Facetingator',
    description:
      'Smart FaceTingator is a face detector app. Hence the name Smart Face-Investigator. It detects the face in an uploaded file and tells you your rank in the number of users.',
    link: 'https://github.com/wptechprodigy/smart-facetingator',
    image: project3,
  },
  {
    id: 4,
    title: 'Robo Friends',
    description:
      'RoboFriends is built using Online REST API, JSON Placeholder, a Fake Online Rest API for Testing and Prototyping Serving ~200M requests per month Powered by JSON Server + LowDB!',
    link: 'https://github.com/wptechprodigy/robo-friends',
    image: robofriends,
  },
];

export default PROJECTS;
