import { IsPositive, Min, IsInt, IsString, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsPositive()
  @Min(1)
  @IsInt()
  no: number;

  @IsString()
  @MinLength(1)
  name: string;
}
