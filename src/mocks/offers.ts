import { Offers } from '../types/offers';

export const offers: Offers = [
  {
    id: '6c78ef29-5920-4416-8212-3692a57b0b21',
    title: 'The Pondhouse - A Magical Place',
    type: 'house',
    price: 234,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.6
  },
  {
    id: '0a4a8329-519e-4553-b463-d00a35f24a46',
    title: 'Wood and stone place',
    type: 'house',
    price: 196,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.5
  },
  {
    id: '8c2e7fe7-73bc-4444-8e1a-9abcc2c025ff',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'room',
    price: 215,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.8
  },
  {
    id: 'add865ee-2d16-46b5-a1e4-9b5823ee58b9',
    title: 'Loft Studio in the Central Area',
    type: 'hotel',
    price: 239,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.2
  },
  {
    id: '94b5ced7-8a54-49c2-b6d2-d9cf31f79698',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'house',
    price: 854,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.932361,
      longitude: 6.937974,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.3
  },
];
