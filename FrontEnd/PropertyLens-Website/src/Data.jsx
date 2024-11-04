// import house images
import House1 from "./assets/img/houses/house1.png";
import House2 from "./assets/img/houses/house2.png";
import House3 from "./assets/img/houses/house3.png";
import House4 from "./assets/img/houses/house4.png";
import House5 from "./assets/img/houses/house5.png";
import House6 from "./assets/img/houses/house6.png";
import House7 from "./assets/img/houses/house7.png";
import House8 from "./assets/img/houses/house8.png";
import House9 from "./assets/img/houses/house9.png";
import House10 from "./assets/img/houses/house10.png";
import House11 from "./assets/img/houses/house11.png";
import House12 from "./assets/img/houses/house12.png";

// Create an array of images
const houseImages = [
  House1, House2, House3, House4, House5,
  House6, House7, House8, House9, House10,
  House11, House12
];

// Assign a random image from the houseImages array
const randomImage = houseImages[Math.floor(Math.random() * houseImages.length)];

// Function to get a random large image
const getRandomImage = () => {
  return houseImages[Math.floor(Math.random() * houseImages.length)];
};

export const housesData = [
  {
    id: 1,
    Suburb: "South Yarra",
    Address: "61 Main St",
    Rooms: 3,
    Type: "Apartment",
    Distance: 16.9,
    Postcode: 3067,
    Bedroom2: 2,
    Bathroom: 1,
    Car: 0,
    CouncilArea: "Yarra City Council",
    Regionname: "Eastern Metropolitan",
    Schools_nearby: 5,
    image: getRandomImage (),
    imageLg: getRandomImage (),
    price: 318923
  },
  {
    id: 2,
    Suburb: "Abbotsford",
    Address: "60 Main St",
    Rooms: 5,
    Type: "House",
    Distance: 1.3,
    Postcode: 3121,
    Bedroom2: 3,
    Bathroom: 2,
    Car: 4,
    CouncilArea: "Stonnington City Council",
    Regionname: "Northern Metropolitan",
    Schools_nearby: 3,
    image: getRandomImage (),
    imageLg: getRandomImage (),
    price: 259297
  },
  {
    id: 3,
    Suburb: "Abbotsford",
    Address: "11 High St",
    Rooms: 3,
    Type: "House",
    Distance: 9.3,
    Postcode: 3068,
    Bedroom2: 2,
    Bathroom: 1,
    Car: 2,
    CouncilArea: "Boroondara City Council",
    Regionname: "Northern Metropolitan",
    Schools_nearby: 0,
    image: getRandomImage (),
    imageLg: getRandomImage (),
    price: 236378
  },
  {
    id: 4,
    Suburb: "Collingwood",
    Address: "53 Park Rd",
    Rooms: 3,
    Type: "Townhouse",
    Distance: 17.0,
    Postcode: 3141,
    Bedroom2: 2,
    Bathroom: 1,
    Car: 2,
    CouncilArea: "Stonnington City Council",
    Regionname: "Eastern Metropolitan",
    Schools_nearby: 1,
    image: getRandomImage (),
    imageLg: getRandomImage (),
    price: 310942
  },
  {
    id: 5,
    Suburb: "Fitzroy",
    Address: "8 Park Rd",
    Rooms: 4,
    Type: "Apartment",
    Distance: 2.8,
    Postcode: 3141,
    Bedroom2: 2,
    Bathroom: 2,
    Car: 2,
    CouncilArea: "Yarra City Council",
    Regionname: "Eastern Metropolitan",
    Schools_nearby: 3,
    image: getRandomImage (),
    imageLg: getRandomImage (),
    price: 229628
  },
  {
    id: 6,
    Suburb: "Richmond",
    Address: "78 Bloom St",
    Rooms: 2,
    Type: "Apartment",
    Distance: 14.8,
    Postcode: 3067,
    Bedroom2: 1,
    Bathroom: 1,
    Car: 1,
    CouncilArea: "Darebin City Council",
    Regionname: "Northern Metropolitan",
    Schools_nearby: 2,
    image: getRandomImage (),
    imageLg: getRandomImage (),
    price: 244559
  },
  {
    id: 7,
    Suburb: "Collingwood",
    Address: "89 Park Rd",
    Rooms: 5,
    Type: "House",
    Distance: 16.9,
    Postcode: 3121,
    Bedroom2: 3,
    Bathroom: 2,
    Car: 1,
    CouncilArea: "Stonnington City Council",
    Regionname: "Eastern Metropolitan",
    Schools_nearby: 5,
    image: getRandomImage (),
    imageLg: getRandomImage (),
    price: 409054
  },
  {
    id: 8,
    Suburb: "Richmond",
    Address: "8 High St",
    Rooms: 3,
    Type: "Townhouse",
    Distance: 17.3,
    Postcode: 3141,
    Bedroom2: 2,
    Bathroom: 1,
    Car: 1,
    CouncilArea: "Boroondara City Council",
    Regionname: "Northern Metropolitan",
    Schools_nearby: 5,
    image: getRandomImage (),
    imageLg: getRandomImage (),
    price: 325465
  },
  {
    id: 9,
    Suburb: "Abbotsford",
    Address: "74 Bloom St",
    Rooms: 3,
    Type: "House",
    Distance: 9.2,
    Postcode: 3066,
    Bedroom2: 2,
    Bathroom: 1,
    Car: 3,
    CouncilArea: "Boroondara City Council",
    Regionname: "Northern Metropolitan",
    Schools_nearby: 2,
    image: getRandomImage (),
    imageLg: getRandomImage (),
    price: 233080
  },
  {
    id: 10,
    Suburb: "Fitzroy",
    Address: "98 Main St",
    Rooms: 3,
    Type: "House",
    Distance: 16.8,
    Postcode: 3066,
    Bedroom2: 2,
    Bathroom: 1,
    Car: 3,
    CouncilArea: "Melbourne City Council",
    Regionname: "Eastern Metropolitan",
    Schools_nearby: 2,
    image: getRandomImage (),
    imageLg: getRandomImage (),
    price: 317484
  },
  {
    id: 11,
    Suburb: "Collingwood",
    Address: "35 High St",
    Rooms: 3,
    Type: "Townhouse",
    Distance: 3.9,
    Postcode: 3066,
    Bedroom2: 2,
    Bathroom: 1,
    Car: 3,
    CouncilArea: "Boroondara City Council",
    Regionname: "Eastern Metropolitan",
    Schools_nearby: 1,
    image: getRandomImage (),
    imageLg:getRandomImage (),
    price: 196491
  },
  {
    id: 12,
    Suburb: "Collingwood",
    Address: "53 Main St",
    Rooms: 5,
    Type: "House",
    Distance: 2.7,
    Postcode: 3141,
    Bedroom2: 3,
    Bathroom: 2,
    Car: 1,
    CouncilArea: "Stonnington City Council",
    Regionname: "Eastern Metropolitan",
    Schools_nearby: 5,
    image: getRandomImage (),
    imageLg: getRandomImage (),
    price: 278010
  },
  {
    id: 13,
    Suburb: "South Yarra",
    Address: "53 Park Rd",
    Rooms: 5,
    Type: "House",
    Distance: 5.1,
    Postcode: 3066,
    Bedroom2: 3,
    Bathroom: 2,
    Car: 1,
    CouncilArea: "Boroondara City Council",
    Regionname: "Eastern Metropolitan",
    Schools_nearby: 2,
    image: getRandomImage (),
    imageLg: getRandomImage (),
    price: 295522
  },
  {
    id: 14,
    Suburb: "South Yarra",
    Address: "24 Main St",
    Rooms: 2,
    Type: "Townhouse",
    Distance: 4.1,
    Postcode: 3067,
    Bedroom2: 1,
    Bathroom: 1,
    Car: 3,
    CouncilArea: "Stonnington City Council",
    Regionname: "Eastern Metropolitan",
    Schools_nearby: 5,
    image: getRandomImage (),
    imageLg: getRandomImage (),
    price: 135723
  },
  {
    id: 15,
    Suburb: "Collingwood",
    Address: "54 Bloom St",
    Rooms: 3,
    Type: "House",
    Distance: 10.6,
    Postcode: 3068,
    Bedroom2: 2,
    Bathroom: 1,
    Car: 1,
    CouncilArea: "Yarra City Council",
    Regionname: "Eastern Metropolitan",
    Schools_nearby: 1,
    image: getRandomImage (),
    imageLg: getRandomImage (),
    price: 256151
  },
  {
    id: 16,
    Suburb: "Abbotsford",
    Address: "75 King St",
    Rooms: 5,
    Type: "Townhouse",
    Distance: 16.2,
    Postcode: 3067,
    Bedroom2: 3,
    Bathroom: 2,
    Car: 1,
    CouncilArea: "Yarra City Council",
    Regionname: "Northern Metropolitan",
    Schools_nearby: 0,
    image: getRandomImage (),
    imageLg: getRandomImage (),
    price: 414266
  },
  {
    id: 17,
    Suburb: "Richmond",
    Address: "36 Main St",
    Rooms: 3,
    Type: "Apartment",
    Distance: 7.8,
    Postcode: 3067,
    Bedroom2: 2,
    Bathroom: 1,
    Car: 3,
    CouncilArea: "Boroondara City Council",
    Regionname: "Northern Metropolitan",
    Schools_nearby: 3,
    image: getRandomImage (),
    imageLg: getRandomImage (),
    price: 225547
  },
  {
    id: 18,
    Suburb: "Abbotsford",
    Address: "48 Bloom St",
    Rooms: 5,
    Type: "House",
    Distance: 3.5,
    Postcode: 3068,
    Bedroom2: 3,
    Bathroom: 2,
    Car: 1,
    CouncilArea: "Yarra City Council",
    Regionname: "Northern Metropolitan",
    Schools_nearby: 5,
    image: getRandomImage (),
    imageLg: getRandomImage (),
    price: 287241
  },
  {
    id: 19,
    Suburb: "Abbotsford",
    Address: "31 Main St",
    Rooms: 3,
    Type: "Apartment",
    Distance: 12.5,
    Postcode: 3066,
    Bedroom2: 1,
    Bathroom: 2,
    Car: 3,
    CouncilArea: "Boroondara City Council",
    Regionname: "Northern Metropolitan",
    Schools_nearby: 5,
    image: getRandomImage (),
    imageLg: getRandomImage (),
    price: 270948
  },
  {
    id: 20,
    Suburb: "Richmond",
    Address: "75 King St",
    Rooms: 3,
    Type: "Apartment",
    Distance: 15.6,
    Postcode: 3066,
    Bedroom2: 2,
    Bathroom: 1,
    Car: 3,
    CouncilArea: "Darebin City Council",
    Regionname: "Northern Metropolitan",
    Schools_nearby: 1,
    image: getRandomImage (),
    imageLg: getRandomImage (),
    price: 303700
  },
  {
    id: 21,
    Suburb: "Abbotsford",
    Address: "91 King St",
    Rooms: 3,
    Type: "Townhouse",
    Distance: 5.6,
    Postcode: 3068,
    Bedroom2: 2,
    Bathroom: 1,
    Car: 3,
    CouncilArea: "Boroondara City Council",
    Regionname: "Northern Metropolitan",
    Schools_nearby: 1,
    image: getRandomImage (),
    imageLg: getRandomImage (),
    price: 196899
  },
  {
    id: 22,
    Suburb: "Abbotsford",
    Address: "26 High St",
    Rooms: 5,
    Type: "Apartment",
    Distance: 10.6,
    Postcode: 3066,
    Bedroom2: 3,
    Bathroom: 2,
    Car: 2,
    CouncilArea: "Melbourne City Council",
    Regionname: "Northern Metropolitan",
    Schools_nearby: 5,
    image: getRandomImage (),
    imageLg: getRandomImage (),
    price: 355748
  },
  {
    id: 23,
    Suburb: "Fitzroy",
    Address: "55 Park Rd",
    Rooms: 4,
    Type: "House",
    Distance: 1.1,
    Postcode: 3066,
    Bedroom2: 2,
    Bathroom: 2,
    Car: 3,
    CouncilArea: "Boroondara City Council",
    Regionname: "Eastern Metropolitan",
    Schools_nearby: 0,
    image: getRandomImage (),
    imageLg: getRandomImage (),
    price: 215582
  },
  {
    id: 24,
    Suburb: "Fitzroy",
    Address: "67 Bloom St",
    Rooms: 3,
    Type: "Apartment",
    Distance: 4.2,
    Postcode: 3067,
    Bedroom2: 2,
    Bathroom: 1,
    Car: 2,
    CouncilArea: "Darebin City Council",
    Regionname: "Eastern Metropolitan",
    Schools_nearby: 5,
    image: getRandomImage (),
    imageLg: getRandomImage (),
    price: 193985
  },
  {
    id: 25,
    Suburb: "Fitzroy",
    Address: "86 Park Rd",
    Rooms: 3,
    Type: "Apartment",
    Distance: 8.6,
    Postcode: 3066,
    Bedroom2: 2,
    Bathroom: 1,
    Car: 2,
    CouncilArea: "Darebin City Council",
    Regionname: "Eastern Metropolitan",
    Schools_nearby: 0,
    image: getRandomImage (),
    imageLg: getRandomImage (),
    price: 242755
  },
];