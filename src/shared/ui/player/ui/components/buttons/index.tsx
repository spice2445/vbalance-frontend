import {
  CaptionButton,
  FullscreenButton,
  isTrackCaptionKind,
  MuteButton,
  PIPButton,
  PlayButton,
  Tooltip,
  useMediaState,
  type TooltipPlacement
} from '@vidstack/react';
import { Icon } from 'shared/ui/icon';

import buttonStyles from '../button.module.scss';
import tooltipStyles from '../tooltip.module.scss';


export interface MediaButtonProps {
  tooltipPlacement: TooltipPlacement;
}

export function Play({ tooltipPlacement }: MediaButtonProps) {
  const isPaused = useMediaState('paused');
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <PlayButton className={`play-button ${buttonStyles.button}`}>
          {isPaused ? <Icon variant='play' size='xl' /> : <Icon variant='pause' size='xl' />}
        </PlayButton>
      </Tooltip.Trigger>
      <Tooltip.Content className={tooltipStyles.tooltip} placement={tooltipPlacement}>
        {isPaused ? 'Play' : 'Pause'}
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

export function Mute({ tooltipPlacement }: MediaButtonProps) {
  const volume = useMediaState('volume'),
    isMuted = useMediaState('muted');
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <MuteButton className={`mute-button ${buttonStyles.button}`}>
          {isMuted || volume == 0 ? (
            <Icon variant='MuteVideo' size='xl' /> 
          ) : volume < 0.5 ? (
            <Icon variant='VolumeLowVideo' size='xl' /> 
          ) : (
            <Icon variant='VolumeHighVideo' size='xl' /> 
          )}
        </MuteButton>
      </Tooltip.Trigger>
      <Tooltip.Content className={tooltipStyles.tooltip} placement={tooltipPlacement}>
        {isMuted ? 'Unmute' : 'Mute'}
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

export function Caption({ tooltipPlacement }: MediaButtonProps) {
  const track = useMediaState('textTrack'),
    isOn = track && isTrackCaptionKind(track);
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <CaptionButton className={`caption-button ${buttonStyles.button}`}>
          {isOn ? <Icon variant='ClosedCaptionsOnVideo' size='xl' /> : <Icon variant='ClosedCaptionsVideo' size='xl' /> }
        </CaptionButton>
      </Tooltip.Trigger>
      <Tooltip.Content className={tooltipStyles.tooltip} placement={tooltipPlacement}>
        {isOn ? 'Closed-Captions Off' : 'Closed-Captions On'}
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

export function PIP({ tooltipPlacement }: MediaButtonProps) {
  const isActive = useMediaState('pictureInPicture');
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <PIPButton className={`pip-button ${buttonStyles.button}`}>
          {isActive ? <Icon variant='PictureInPictureExitVideo' size='xl' /> : <Icon variant='PictureInPictureVideo' size='xl' />}
        </PIPButton>
      </Tooltip.Trigger>
      <Tooltip.Content className={tooltipStyles.tooltip} placement={tooltipPlacement}>
        {isActive ? 'Exit PIP' : 'Enter PIP'}
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

export function Fullscreen({ tooltipPlacement }: MediaButtonProps) {
  const isActive = useMediaState('fullscreen');
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <FullscreenButton className={`fullscreen-button ${buttonStyles.button}`}>
          {isActive ? <Icon variant='FullscreenExitVideo' size='xl' /> : <Icon variant='FullscreenVideo' size='xl' />}
        </FullscreenButton>
      </Tooltip.Trigger>
      <Tooltip.Content className={tooltipStyles.tooltip} placement={tooltipPlacement}>
        {isActive ? 'Exit Fullscreen' : 'Enter Fullscreen'}
      </Tooltip.Content>
    </Tooltip.Root>
  );
}
