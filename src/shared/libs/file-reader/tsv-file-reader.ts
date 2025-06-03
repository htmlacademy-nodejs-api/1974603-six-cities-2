import { readFileSync } from 'node:fs';
import { FileReader } from './file-reader.interface.js';
import { RentalOfferType } from '../../types/rental-offer-type.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ){}

  public read(): void {
    this.rawData = readFileSync(this.filename, {encoding: 'utf-8'});
  }

  public toArray(): RentalOfferType[] {
    if(!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([title, description, createdDate, city, previewImage, images, isPremium, isFavorites, rating, houseType, roomsCount, guestsCount, price, facilities, name, email, avatar, status, coordinates]) => ({
        title,
        description,
        createdDate: new Date(createdDate),
        city,
        previewImage,
        images: images.split(' '),
        isPremium,
        isFavorites,
        rating: Number(rating),
        houseType,
        roomsCount: Number(roomsCount),
        guestsCount: Number(guestsCount),
        price: Number.parseInt(price, 10),
        facilities: facilities.split(','),
        author: {name, email,avatar, status},
        coordinates: coordinates.split(',').map((coordinate) => Number(coordinate)),
      }));
  }
}
