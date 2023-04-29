import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { PlaceData } from '@/components/types';
import { Button, Paper } from '@mui/material';
import { useRouter } from 'next/router';
import style from './cards.module.css';

export function Card(props: PlaceData & { basePath: string }) {
  const theme = useTheme();
  const router = useRouter();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className={style.card}>
      <div className={style.img}>
        Images
      </div>
      <div className={style.infoContainer}>
        <h3 className={style.label}>{props.name}</h3>
        <p className={style.description}>{props.description}</p>
        <div className={style.action}>
          <Button
            fullWidth
            variant='text'
            className={style.btn}
            sx={{
              '&:hover': {
                backgroundColor: 'black'
              }
            }}
            onClick={() => router.push(`/${props.basePath}/${props.id}`)}
            endIcon={<ArrowForwardIcon />}
          >
            View Details
          </Button>
          <Button fullWidth variant='text' className={style.btn} endIcon={<ArrowForwardIcon />} sx={{
              '&:hover': {
                backgroundColor: 'black'
              }
            }}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
