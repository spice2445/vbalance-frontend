import { MediaPlayerInstance, TrackProps } from '@vidstack/react';
import { RefObject } from 'react';

export interface PlayerProps {
    videoRef?: RefObject<MediaPlayerInstance>,
    videoSrc?: string,
    thumbnailsSrc?: string,
    posterSrc?: string,
    isLoading?: boolean,
    tracks?: TrackProps[],
}