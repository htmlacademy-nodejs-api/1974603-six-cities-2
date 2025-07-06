import { AuthorDataType } from './author-data-type.js';

export type RentalOfferType = {
  title: string,
  description: string,
  createdDate: Date,
  city: string,
  previewImage: string,
  images: string[],
  isPremiumOffer: string,
  isFavoritesOffer: string,
  rating: number,
  houseType: string,
  roomsCount: number,
  guestsCount: number,
  price: number,
  facilities: string[],
  author: AuthorDataType,
  coordinates: number[],
}
