import { invoke } from '@withease/factories';
import { api } from 'shared/api';
import { copyFactory } from 'shared/lib/factories';

const $personalInfo = api.queries.user.personalLink.queryApi.$data;

export const {
  copyClicked,
  $isCopied
} = invoke(copyFactory, {
  $sourceText: $personalInfo.map((personalInfo: any) => personalInfo?.referral_code ?? '')
});