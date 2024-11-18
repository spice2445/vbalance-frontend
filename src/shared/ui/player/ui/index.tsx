import './vidstack-global.scss';

import {
  isHLSProvider,
  MediaPlayer,
  MediaProvider,
  Poster,
  Track,
  type MediaPlayerInstance,
  type MediaProviderAdapter
} from '@vidstack/react';
import clsx from 'clsx';
import { useRef } from 'react';
import { Skeleton } from 'shared/ui/skeleton';

import { VideoLayout } from './components/layouts';
import { PlayerProps } from './index.type';
import styles from './style.module.scss';

export const Player = ({
  videoRef,
  videoSrc,
  tracks,
  posterSrc,
  thumbnailsSrc,
  isLoading
}: PlayerProps) => {
  const player = videoRef ?? useRef<MediaPlayerInstance>(null);

  function onProviderChange(
    provider: MediaProviderAdapter | null
  ) {
    if (isHLSProvider(provider)) {
      provider.config = {};
    }
  }

  const playerClass = clsx(styles.player, 'player');
  if(isLoading) {
    return(
      <Skeleton
        skeletonClass={clsx(playerClass, styles.player_skeleton)}
        isLoading
      />
    );
  }

  return (
    <MediaPlayer
      className={playerClass}
      src={videoSrc}
      crossOrigin
      playsInline
      onProviderChange={onProviderChange}
      ref={player}
    >
      <MediaProvider>
        {posterSrc &&
          <Poster
            className={styles.poster}
            src={posterSrc}
          />
        }
        
        {tracks && tracks.map((track) => (
          <Track {...track} key={track.src} />
        ))}
      </MediaProvider>

      <VideoLayout thumbnails={thumbnailsSrc} />
    </MediaPlayer>
  );
};
