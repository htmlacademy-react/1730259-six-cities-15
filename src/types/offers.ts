export type ApartmentType = 'apartment' | 'room' | 'house' | 'hotel';

export type City = {
  name: string;
  location: Location;
};

export type Location = {
    latitude: number;
    longitude: number;
    zoom: number;
};

export type Offer = {
  id: string;
  title: string;
  type: ApartmentType;
  price: number;
  previewImage: string;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type Offers = Offer[];
