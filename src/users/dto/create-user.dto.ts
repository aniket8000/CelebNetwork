export class CreateUserDto {
  email: string;
  password: string;
  role: 'FAN' | 'CELEBRITY';
  name: string;
  country: string;
}
