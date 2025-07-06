import dayjs from 'dayjs';

import { generateRandomValue, getRandomItem } from '../../helpers/index.js';
import { MockServerData } from '../../types/index.js';
import { OfferGenerator } from './offer-generator.interface.js';

const MIN_PRICE = 100;
const MAX_PRICE = 100000;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string | string[] {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const city = getRandomItem<string>(this.mockData.cities);
    const previewImage = getRandomItem<string>(this.mockData.previewImages);
    const images = getRandomItem<string[]>(this.mockData.images);
    const isPremiumOffer = getRandomItem<string>(this.mockData.isPremiumOffers);
    const isFavoritesOffer = getRandomItem<string>(this.mockData.isPremiumOffers);
    const rating = getRandomItem<string>(this.mockData.ratings);
    const houseType = getRandomItem<string>(this.mockData.houseTypes);
    const roomsCount = getRandomItem<string>(this.mockData.roomsCount);
    const guestsCount = getRandomItem<string>(this.mockData.guestsCount);
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const facilities = getRandomItem<string[]>(this.mockData.facilities);
    const author = getRandomItem<string>(this.mockData.authors);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatar = getRandomItem<string>(this.mockData.avatars);
    const userType = getRandomItem<string>(this.mockData.usersTypes);
    const coordinates = getRandomItem<string[]>(this.mockData.coordinates);

    const createdDate = dayjs()
      .subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day')
      .toISOString();


    return [
      title, description, createdDate,
      city, previewImage, images,
      isPremiumOffer, isFavoritesOffer,
      rating, houseType, roomsCount,
      guestsCount, price, facilities,
      author, email, avatar, userType, coordinates
    ].join('\t');
  }

}
