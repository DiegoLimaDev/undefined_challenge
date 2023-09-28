import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from '@mui/material';
import { PokemonEntity } from '../../domain/entities/Pokemon';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { theme } from '../../../styles/theme';

type props = {
  isOpen: boolean;
  pokemon: PokemonEntity;
  onClick: () => void;
};

type FormValues = {
  name: string;
  description: string;
  type: string;
};

export const MyDialog = ({ isOpen, pokemon, onClick }: props) => {
  const { register, handleSubmit, getValues } = useForm<FormValues>();
  const { name, description, type } = getValues();

  const onSubmit = async (data: FormValues) => {
    const url = await `http://localhost:5228/api/pokemons/${pokemon.id}`;
    axios.put(url, {
      name: data.name,
      description: data.description,
      type: data.type,
    });
    setTimeout(() => {
      window.location.reload();
    }, 300);
    onClick();
  };

  return (
    <Dialog open={isOpen}>
      <DialogTitle fontSize={theme.sizes.medium2}>Info</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack flexDirection={'column'}>
            <TextField
              margin="normal"
              type="text"
              id="name"
              defaultValue={pokemon.name}
              {...register('name', { required: true })}
            />
            <TextField
              margin="normal"
              type="text"
              id="description"
              defaultValue={pokemon.description}
              {...register('description')}
            />
            <TextField
              margin="normal"
              type="text"
              id="type"
              defaultValue={pokemon.type}
              {...register('type')}
            />
          </Stack>
          <DialogActions>
            <Button
              variant="contained"
              onClick={handleSubmit(onSubmit)}
              type="submit"
              disabled={
                name === '' || description === '' || type === '' ? true : false
              }
            >
              Salvar
            </Button>
            <Button variant="contained" onClick={onClick}>
              Fechar
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};
