import faker from 'faker';
import { Mappable } from './CustomMap';
//Faker does not come with a type definition file so we need to install it manually

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `<h1>User Name: ${this.name}</h1>`;
  }
}
