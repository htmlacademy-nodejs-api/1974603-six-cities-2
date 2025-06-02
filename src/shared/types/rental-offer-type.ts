import { AuthorDataType } from './author-data-type.js';

export type RentalOfferType = {
  title: string,
  description: string,
  postDate: Date,
  city: string,
  previewImage: string,
  images: string[],
  isPremium: boolean,
  isFavorites: boolean,
  rating: number,
  type: string,
  roomsCount: number,
  guestsCount: number,
  price: number,
  facilities: string[],
  author: AuthorDataType,
  commentsCount: number,
  coordinates: [number, number],
}
