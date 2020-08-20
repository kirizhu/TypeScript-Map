import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();

const company = new Company();

//npm i @types/googlemaps then check the type definition files to work with the library.
const customMap = new CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);
