import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { PokemonEntity } from '../../domain/entities/Pokemon';
import { theme } from '../../../styles/theme';
import { MyDialog } from './MyDialog';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type props = {
  pokemon: PokemonEntity;
};

export const MyCard = ({ pokemon }: props) => {
  const [isOpen, setisOpen] = useState(false);
  const navigate = useNavigate();

  const deletePokemon = async () => {
    const url = await `http://localhost:5228/api/pokemons/${pokemon.id}`;
    axios.delete(url);
    window.location.reload();
  };

  return (
    <Box my={'1rem'} width={'30rem'} p={'1rem'}>
      <Card>
        <CardContent>
          <Typography fontSize={theme.sizes.medium}>{pokemon.name}</Typography>
          <Typography fontSize={theme.sizes.small}>{pokemon.type}</Typography>
          <Typography fontSize={theme.sizes.small}>
            {pokemon.description}
          </Typography>
          <Box display={'flex'} mt={'0.5rem'} justifyContent={'space-around'}>
            <Button variant="contained" onClick={() => setisOpen(!isOpen)}>
              <Typography fontWeight={'bold'}>Editar</Typography>
            </Button>
            <Button variant="contained" color="error" onClick={deletePokemon}>
              <Typography fontWeight={'bold'}>Deletar</Typography>
            </Button>
          </Box>
        </CardContent>
      </Card>
      <MyDialog
        isOpen={isOpen}
        pokemon={pokemon}
        onClick={() => setisOpen(!isOpen)}
      />
    </Box>
  );
};
