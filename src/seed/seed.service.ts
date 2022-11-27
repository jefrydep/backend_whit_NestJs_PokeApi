import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke_response.interface';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;
    constructor(
      @InjectModel(Pokemon.name)
      private readonly pokemonModel:Model<Pokemon>
    ){}

  async executedSeed() {
    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=600';
    const { data } = await axios.get<PokeResponse>(URL);
    data.results.forEach(({ name, url }) => {
      console.log(name, url);
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
    });
    return data.results;
  }
}
