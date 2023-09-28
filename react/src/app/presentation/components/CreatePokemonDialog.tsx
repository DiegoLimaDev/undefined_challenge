import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { theme } from '../../../styles/theme';

type props = {
  isOpen: boolean;
  onClick: () => void;
};

type FormValues = {
  name: string;
  description: string;
  type: string;
};

export const CreatePokemonDialog = ({ isOpen, onClick }: props) => {
  const { register, handleSubmit, getValues } = useForm<FormValues>();
  const { name, description, type } = getValues();

  const onSubmit = async (data: FormValues) => {
    const url = await `http://localhost:5228/api/pokemons/`;
    axios.post(url, {
      name: data.name,
      description: data.description,
      type: data.type,
    });
    window.location.reload();
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
              defaultValue={''}
              placeholder="Pokemon name"
              {...register('name')}
            />
            <TextField
              margin="normal"
              type="text"
              id="description"
              defaultValue={''}
              placeholder="Pokemon description"
              {...register('description')}
            />
            <TextField
              margin="normal"
              type="text"
              id="type"
              defaultValue={''}
              placeholder="Pokemon type"
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
              Criar
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
