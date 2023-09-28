import { Grid, Box, Button, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../application/hooks';
import { MyCard } from '../components/MyCard';
import { PokemonEntity } from '../../domain/entities/Pokemon';
import { useEffect, useState } from 'react';
import { fetchPokemon } from '../../application/Pokemons/Pokemon.slice';
import { theme } from '../../../styles/theme';
import { CreatePokemonDialog } from '../components/CreatePokemonDialog';

export const Home = () => {
  const dispatch = useAppDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { pokemonData } = useAppSelector((state) => state.pokemonData);
  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);

  return (
    <Box>
      <Grid container>
        {pokemonData.map((pokemon: PokemonEntity) => {
          return (
            <Grid key={pokemon.id}>
              <MyCard pokemon={pokemon} />
            </Grid>
          );
        })}
      </Grid>
      <Box display={'block'} m={'0 auto'} width={'fit-content'}>
        <Button
          variant="contained"
          onClick={() => setIsDialogOpen(!isDialogOpen)}
        >
          <Typography fontWeight={'bold'} fontSize={theme.sizes.medium}>
            Adicionar Pokemon
          </Typography>
        </Button>
      </Box>
      <CreatePokemonDialog
        isOpen={isDialogOpen}
        onClick={() => setIsDialogOpen(!isDialogOpen)}
      />
    </Box>
  );
};
