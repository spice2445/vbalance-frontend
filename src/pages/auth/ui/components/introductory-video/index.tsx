import { MediaPlayerInstance } from '@vidstack/react';
import { useUnit } from 'effector-react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { modalsStore } from 'shared/lib/modal';
import { ModalDefault } from 'shared/ui/modal';
import { Player } from 'shared/ui/player';
import { Typography } from 'shared/ui/typography';

import PlayButtonIcon from '../../assets/play-button.svg';

import s from './style.module.scss';

export const INTRODUCTORY_VIDEO_KEY = 'INTRODUCTORY_VIDEO_KEY';

const IntroductoryVideo = () => {
    const playerRef = useRef<MediaPlayerInstance>(null);

    return(
        <ModalDefault
            keyModal={INTRODUCTORY_VIDEO_KEY}
            className={s.introductory_modal}
        >
            <Player
                videoRef={playerRef}
                videoSrc='vimeo/640499893'
            />
        </ModalDefault>
    );
};

// onSetModal({
//     ModalElement: IntroductoryVideo,
//     isOpen: true,
//     dataProps: {
//         keyModal: INTRODUCTORY_VIDEO_KEY
//     }
// })

// export const getBalanceAddressUsdcFx = attach({
//     source: statesWeb3.$userWeb3,
//     mapParams: (_, user) => ({
//         functionName: 'balanceOf',
//         args: [
//             user?.address
//         ]
//     }),
//     effect: USDC_CONTRACTS.read
// });

// interface transferUsdcFxProps {
//     to: string,
//     amount: string,
// }

// export const transferUsdcFx = attach({
//     mapParams: ({
//         to,
//         amount
//     }: transferUsdcFxProps) => ({
//         functionName: 'transfer',
//         args: [
//             to,
//             parseEther(amount)
//         ]
//     }),
//     effect: USDC_CONTRACTS.write
// });

export const PlayButton = () => {
    const { t } = useTranslation();
    const onSetModal = useUnit(modalsStore.setModal);
    // onGetBalanceAddressUsdc,
    // const [onGetBalanceAddressUsdc] = useUnit([getBalanceAddressUsdcFx, transferUsdcFx]);

    return (
        <button 
            className={s.play_video}
            onClick={() => onSetModal({
                ModalElement: IntroductoryVideo,
                isOpen: true,
                dataProps: {
                    keyModal: INTRODUCTORY_VIDEO_KEY
                }
            })}
        >
            <PlayButtonIcon
                className={s.play_video_icon}
            />

            <Typography color='white'>{t('смотреть ознакомительное видео')}</Typography>
        </button>
    );
};