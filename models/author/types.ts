import { TId } from '../types';

export type APIAuthor = {
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
    street: string;
    suite: string;
    zipcode: string;
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  email: string;
  id: TId;
  name: string;
  phone: string;
  username: string;
  website: string;
};
