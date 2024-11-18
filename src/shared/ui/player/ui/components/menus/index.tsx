import {
  Menu,
  Tooltip,
  useCaptionOptions,
  type MenuPlacement,
  type TooltipPlacement
} from '@vidstack/react';
import { useTranslation } from 'react-i18next';
import { Icon } from 'shared/ui/icon';

import buttonStyles from '../button.module.scss';
import tooltipStyles from '../tooltip.module.scss';

import styles from './menu.module.scss';

export interface SettingsProps {
  placement: MenuPlacement;
  tooltipPlacement: TooltipPlacement;
}

export function Settings({ placement, tooltipPlacement }: SettingsProps) {
  const { t } = useTranslation('');
  return (
    <Menu.Root className='menu'>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Menu.Button className={`${styles.menuButton} ${buttonStyles.button}`}>
            <Icon variant='settings' size='xl' className={styles.rotateIcon} />
          </Menu.Button>
        </Tooltip.Trigger>
        <Tooltip.Content className={tooltipStyles.tooltip} placement={tooltipPlacement}>
          {t('Settings')}
        </Tooltip.Content>
      </Tooltip.Root>
      <Menu.Content className={styles.menu} placement={placement}>
        <CaptionSubmenu />
      </Menu.Content>
    </Menu.Root>
  );
}

function CaptionSubmenu() {
  const options = useCaptionOptions();
  const hint = options.selectedTrack?.label ?? 'Off';
  return (
    <Menu.Root>
      <SubmenuButton
        label='Captions'
        hint={hint}
        disabled={options.disabled}
      />
      <Menu.Content className={styles.submenu}>
        <Menu.RadioGroup className={styles.radioGroup} value={options.selectedValue}>
          {options.map(({ label, value, select }) => (
            <Menu.Radio className={styles.radio} value={value} onSelect={select} key={value}>
              <div className={styles.radioCheck} />
              <span>{label}</span>
            </Menu.Radio>
          ))}
        </Menu.RadioGroup>
      </Menu.Content>
    </Menu.Root>
  );
}

export interface SubmenuButtonProps {
  label: string;
  hint: string;
  disabled?: boolean;
}

function SubmenuButton({ label, hint, disabled }: SubmenuButtonProps) {
  return (
    <Menu.Button className={styles.submenuButton} disabled={disabled}>
      <Icon variant='ChevronLeftVideo' size='xl2' />
      {/* <ChevronLeftIcon className={styles.submenuCloseIcon} /> */}
      <Icon variant='ClosedCaptionsVideo' size='xl2' className={styles.submenuIcon} />
      <span className={styles.submenuLabel}>{label}</span>
      <span className={styles.submenuHint}>{hint}</span>
      <Icon variant='ChevronRightVideo' size='xl2' />
      {/* <ChevronRightIcon className={styles.submenuOpenIcon} /> */}
    </Menu.Button>
  );
}
