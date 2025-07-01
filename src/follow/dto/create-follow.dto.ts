import { IsNotEmpty } from 'class-validator';

export class CreateFollowDto {
  @IsNotEmpty()
  fanId: string;

  @IsNotEmpty()
  celebrityId: string;
}
