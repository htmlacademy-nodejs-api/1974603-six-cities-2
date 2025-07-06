import { RentalOfferType } from '../types/index.js';

export const createOffer = (offerData: string): RentalOfferType => {
  const [
    title,
    description,
    createdDate,
    city,
    previewImage,
    images,
    isPremiumOffer,
    isFavoritesOffer,
    rating,
    houseType,
    roomsCount,
    guestsCount,
    price,
    facilities,
    name,
    email,
    avatar,
    status,
    coordinates,
  ] = offerData.replace('\n', '').split('\t');

  const author = {
    name,
    email,
    avatar,
    status,
  };

  return {
    title,
    description,
    createdDate: new Date(createdDate),
    city,
    previewImage,
    images: images.split(' '),
    isPremiumOffer,
    isFavoritesOffer,
    rating: Number(rating),
    houseType,
    roomsCount: Number(roomsCount),
    guestsCount: Number(guestsCount),
    price: Number.parseInt(price, 10),
    facilities: facilities.split(','),
    author,
    coordinates: coordinates.split(',').map((coordinate) => Number(coordinate)),
  };
};


