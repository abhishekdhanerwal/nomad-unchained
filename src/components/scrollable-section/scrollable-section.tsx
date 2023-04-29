import { PlaceData } from '@/pages/types';
import { Button, Paper, Tooltip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

import style from './scrollable-section.module.css';

interface Props {
  heading: string;
  subHeading: string;
  data: PlaceData[];
  viewMoreLink: string;
}

export function ScrollableSection({ heading, subHeading, data, viewMoreLink }: Props) {
  const router = useRouter();

  return (
    <div className={style.scrollSection}>
      <div className={style.headingContainer}>
        <div className={style.headingSection}>
          <span className={style.heading}>{heading}</span>
          <span className={style.subHeading}>{subHeading}</span>
        </div>
        <div className={style.btn}>
          <Button
            variant='outlined'
            size='large'
            endIcon={<ArrowForwardIcon />}
            onClick={() => router.push(viewMoreLink)}
            sx={{
              color: '#FA6E02',
              borderRadius: 15,
              borderColor: '#FA6E02',
              ':hover': {
                borderColor: 'rgb(251,139,52)',
                background: 'rgba(251,139,52, 0.1)',
              },
            }}
          >
            View All
          </Button>
        </div>
      </div>
      <div className={style.scrollContainer}>
        {data.map((item) => (
          <Paper
            key={item.id}
            sx={{
              '&:hover': {
                backgroundColor: 'white',
              },
            }}
            className={style.paper}
            onClick={() => router.push(`/city-tours/${item.id}`)}
          >
            <Image
              alt={item.image}
              src={`/images/${item.image}`}
              className={style.image}
              width={249}
              height={170}
              style={{width: '100%'}}
            />
            <div className={style.imageDetails}>
              <span className={style.imageHeading}>{item.name}</span>
              <Tooltip title={item.description} followCursor>
                <p style={{ marginTop: 8, fontSize: 12, wordBreak: 'break-all' }}>
                  {item.description.trim().length > 84
                    ? `${item.description.substring(0, 90)}...`
                    : item.description}
                </p>
              </Tooltip>
            </div>
          </Paper>
        ))}
      </div>
    </div>
  );
}
