import { CharacterGender, CharacterStatus } from './api';

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  image: string;
  isFavorite?: boolean;
}
