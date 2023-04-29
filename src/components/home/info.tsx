import { Avatar, Rating } from '@mui/material';
import Image from 'next/image';

import WalletIcon from './wallet.svg';
import PeopleIcon from './people.svg';
import HeartIcon from './heart.svg';
import style from './info.module.css';

export function Info() {
    return (
        <div className={style.mainContainer}>
            <div className={style.reviewContainer}>
                <div className={style.review}>
                    <Avatar src="/broken-image.jpg" sx={{width: 72, height: 72, position: 'absolute', top: -30, left: 40}} />
                    <div className={style.reviewDetails}>
                        <span>JOHN DOE</span>
                        <Rating name="size-large" defaultValue={4} size="large" />
                        <span>I must say I was delighted with the service you provided - it was just what I wanted. This is the second time I have used your services, and both times you provided a faultless experience. I will definitely recommend you to others, and will use you myself when I travel to India again. I don't have any immediate plans, but hope to visit India again within the next two years</span>
                    </div>
                </div>  
            </div>
            <div className={style.infoContainer}>
                <div className={style.info}>
                    <Image alt='wallet-icon' src={WalletIcon}  />
                    <div className={style.infoText}>
                        <span>Affordable prices</span>
                        <span>We provide some very affordable prices compared to others.</span>
                    </div>
                </div>
                <div className={style.info}>
                    <Image alt='people-icon' src={PeopleIcon}  />
                    <div className={style.infoText}>
                        <span>Unforgettable experience</span>
                        <span>We provide a vacation experience that will be unforgettable.</span>
                    </div>
                </div>
                <div className={style.info}>
                    <Image alt='heart-icon' src={HeartIcon}  />
                    <div className={style.infoText}>
                        <span>Very Friendly Service</span>
                        <span>We will provide excellent and friendly service for the sake of our customers.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}