export class CreateCelebrityDto {
  userId: string;
  name: string;
  genre: string;
  country: string;
  instagramUrl: string;
  youtubeUrl?: string;
  spotifyUrl?: string;
  fanbase: number;
  setlist?: string;
}
