import { FC, SVGProps } from 'react';

import Add from './assets/add.svg';
import ArrowReversed from './assets/arrow-reversed.svg';
import Arrow from './assets/arrow.svg';
import Balance from './assets/balance.svg';
import Calc from './assets/calc.svg';
import Check from './assets/check.svg';
import ChecboxChoose from './assets/checkboxChoose.svg';
import CheckboxEmpty from './assets/checkboxEmpty.svg';
import ChevronLeftVideo from './assets/ChevronLeftVideo.svg';
import ChevronRightVideo from './assets/ChevronRightVideo.svg';
import Close from './assets/close.svg';
import ClosedCaptionsOnVideo from './assets/ClosedCaptionsOnVideo.svg';
import ClosedCaptionsVideo from './assets/ClosedCaptionsVideo.svg';
import Confrim from './assets/confrim.svg';
import Connect from './assets/connect.svg';
import Copy from './assets/copy.svg';
import DarkTheme from './assets/dark-theme.svg';
import Date from './assets/date.svg';
import Deposit from './assets/deposit.svg';
import Dexnet from './assets/dexnet.svg';
import Directions from './assets/directions.svg';
import Docs from './assets/docs.svg';
import Dollar from './assets/Dollar.svg';
import Download from './assets/download.svg';
import Edit from './assets/edit.svg';
import Education from './assets/education.svg';
import Email from './assets/email.svg';
import Enter from './assets/enter.svg';
import Exit from './assets/exit.svg';
import Frame from './assets/Frame.svg';
import FullscreenExitVideo from './assets/FullscreenExitVideo.svg';
import FullscreenVideo from './assets/FullscreenVideo.svg';
import Google from './assets/google.svg';
import Graphic from './assets/graphic.svg';
import Hamburger from './assets/hamburger.svg';
import Hide from './assets/hide.svg';
import Hierarchy from './assets/hierarchy.svg';
import Info from './assets/info.svg';
import Investment from './assets/investment.svg';
import LightTheme from './assets/light-theme.svg';
import Link from './assets/link.svg';
import Metamask from './assets/metamask.svg';
import Minus from './assets/minus.svg';
import Money from './assets/money.svg';
import MuteVideo from './assets/MuteVideo.svg';
import Notification from './assets/notification.svg';
import Panel from './assets/panel.svg';
import Part from './assets/part.svg';
import Partner from './assets/partner.svg';
import Password from './assets/password.svg';
import Pause from './assets/pause.svg';
import PictureInPictureExitVideo from './assets/PictureInPictureExitVideo.svg';
import PictureInPictureVideo from './assets/PictureInPictureVideo.svg';
import Play from './assets/play.svg';
import Plus from './assets/plus.svg';
import Proportion1 from './assets/proportion1.svg';
import Proportion2 from './assets/proportion2.svg';
import Proportion3 from './assets/proportion3.svg';
import Proportion4 from './assets/proportion4.svg';
import Proportion5 from './assets/proportion5.svg';
import Proportion6 from './assets/proportion6.svg';
import Proportion7 from './assets/proportion7.svg';
import Proportion8 from './assets/proportion8.svg';
import Refresh from './assets/refresh.svg';
import Save from './assets/save.svg';
import Search from './assets/search.svg';
import Settings from './assets/settings.svg';
import Share from './assets/share.svg';
import Show from './assets/show.svg';
import Sort from './assets/sort.svg';
import Status from './assets/status.svg';
import Telegram from './assets/telegram.svg';
import TelegramTheme from './assets/telegram_theme.svg';
import Ticket from './assets/ticket.svg';
import Time from './assets/time.svg';
import Token from './assets/token.svg';
import User from './assets/user.svg';
import Video from './assets/video.svg';
import VolumeHighVideo from './assets/VolumeHighVideo.svg';
import VolumeLowVideo from './assets/VolumeLowVideo.svg';
import Withdraw from './assets/withdraw.svg';
import s from './style.module.scss';

export type IconSize = 'xs3' | 'xs2' | 'xs' | 's' | 'm' | 'l' | 'xl' |'xl2';
export type IconVariant = 'arrow' | 'balance' | 'refresh' |
'check' | 'close' | 'connect' | 'copy' |
'date' | 'deposit' | 'directions' | 'docs' |
'dollar' | 'education' | 'enter' | 'exit' | 'frame' |
'graphic' | 'dexnet' | 'status' | 'user' | 'proportion-1' |
'proportion-2' | 'proportion-3' | 'proportion-4' | 'proportion-5' | 'proportion-6' |
'proportion-7' | 'proportion-8' | 'metamask' | 'plus' | 'link' | 'money' | 'share' |
'sort' | 'hierarchy' | 'investment' | 'panel' | 'part' | 'token' | 'light-theme' |
'dark-theme' | 'notification' | 'arrow-reversed' | 'withdraw' | 'ticket' | 'minus' |
'time' | 'email' | 'password' | 'show' | 'hide' | 'confirm' | 'google' | 'telegram' |
'telegram_theme' | 'search' | 'info' | 'partner' | 'calc' | 'play' | 'checkboxEmpty' |
'checkboxChoose' | 'video' | 'ClosedCaptionsVideo' | 'ClosedCaptionsOnVideo' | 'FullscreenExitVideo' |
'FullscreenVideo' | 'MuteVideo' | 'PictureInPictureExitVideo' | 'PictureInPictureVideo' |
'VolumeHighVideo' | 'VolumeLowVideo' | 'ChevronLeftVideo' | 'ChevronRightVideo' | 'pause' |
'settings' | 'add' | 'download' | 'hamburger' | 'edit' | 'save';

export type IconFill = 'light' | 'green' | 'green-dark';

export interface IconSettings {
  size:IconSize;
  variant:IconVariant;
  isAnimated?:boolean;
}
export type IconSettingsOther = Omit<IconSettings, 'isAnimated'>;

export type IconProps = IconSettings & {
  className?: string;
  fill?: IconFill;
  onClick?: () => void;
}

export const icons: Record<IconVariant, FC<SVGProps<SVGSVGElement>>> = {
  'arrow-reversed': ArrowReversed,
  'light-theme': LightTheme,
  'dark-theme': DarkTheme,
  notification: Notification,
  arrow: Arrow,
  balance: Balance,
  check: Check,
  close: Close,
  connect: Connect,
  copy: Copy,
  date: Date,
  deposit: Deposit,
  dexnet: Dexnet,
  directions: Directions,
  docs: Docs,
  dollar: Dollar,
  education: Education,
  enter: Enter,
  exit: Exit,
  frame: Frame,
  graphic: Graphic,
  status: Status,
  user: User,
  metamask: Metamask,
  'proportion-1': Proportion1,
  'proportion-2': Proportion2,
  'proportion-3': Proportion3,
  'proportion-4': Proportion4,
  'proportion-5': Proportion5,
  'proportion-6': Proportion6,
  'proportion-7': Proportion7,
  'proportion-8': Proportion8,
  link: Link,
  money: Money,
  plus: Plus,
  share: Share,
  sort: Sort,
  refresh: Refresh,
  hierarchy: Hierarchy,
  investment: Investment,
  minus: Minus,
  panel: Panel,
  part: Part,
  token: Token,
  withdraw: Withdraw,
  ticket: Ticket,
  time: Time,
  email: Email,
  password: Password,
  hide: Hide,
  show: Show,
  confirm: Confrim,
  google: Google,
  telegram: Telegram,
  telegram_theme: TelegramTheme,
  search: Search,
  info: Info,
  partner: Partner,
  calc: Calc,
  play: Play,
  checkboxChoose: ChecboxChoose,
  checkboxEmpty: CheckboxEmpty,
  video: Video,
  ClosedCaptionsVideo, 
  ClosedCaptionsOnVideo, 
  FullscreenExitVideo, 
  FullscreenVideo, 
  MuteVideo,
  PictureInPictureExitVideo,
  PictureInPictureVideo,
  VolumeHighVideo, 
  VolumeLowVideo,
  ChevronLeftVideo, 
  ChevronRightVideo,
  pause: Pause,
  settings: Settings,
  add: Add,
  download: Download,
  hamburger: Hamburger,
  edit: Edit,
  save: Save
};

export const SIZES_CLASSES:Record<IconSize, string> = {
  xs3: s.sizeXS3,
  xs2: s.sizeXS2,
  xs: s.sizeXS,
  s: s.sizeS,
  m: s.sizeM,
  l: s.sizeL,
  xl: s.sizeXL,
  xl2: s.sizeXL2
};

export const SIZES_ANIMATION_CLASSES:Record<IconSize, string> = {
  xs3: s.sizeXS3Animation,
  xs2: s.sizeXS2Animation,
  xs: s.sizeXSAnimation,
  s: s.sizeSAnimation,
  m: s.sizeMAnimation,
  l: s.sizeLAnimation,
  xl: s.sizeXL,
  xl2: s.sizeXL2
};

export const VariantsIcon: IconVariant[] = [
  'arrow', 'balance', 'check', 'close', 'connect', 'copy',
  'date', 'deposit', 'directions', 'docs',
  'dollar', 'education', 'enter', 'exit', 'frame', 'graphic', 'dexnet', 'status',
  'user', 'proportion-1', 'proportion-2', 'proportion-3', 'proportion-4', 'proportion-5',
  'link', 'money', 'notification', 'metamask', 'plus', 'share', 'sort', 'hierarchy',
  'arrow-reversed', 'token', 'panel', 'investment', 'refresh', 'part', 'withdraw',
  'ticket', 'minus', 'time', 'email', 'password', 'show', 'hide', 'confirm', 'google',
  'telegram', 'telegram_theme', 'info', 'partner', 'calc', 'play', 'checkboxEmpty',
  'checkboxChoose', 'video',  'ClosedCaptionsVideo', 'ClosedCaptionsOnVideo', 'FullscreenExitVideo',
  'FullscreenVideo', 'MuteVideo', 'PictureInPictureExitVideo', 'PictureInPictureVideo',
  'VolumeHighVideo', 'VolumeLowVideo', 'ChevronLeftVideo', 'ChevronRightVideo',
  'pause', 'settings', 'add', 'download', 'hamburger', 'edit', 'save'
];

export const sizes = {
  xs3: 8,
  xs2: 10,
  xs: 12,
  s: 14,
  m: 16,
  l: 18,
  xl: 20,
  xl2: 22
};
