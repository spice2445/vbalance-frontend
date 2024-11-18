
import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { useTranslation } from 'react-i18next';
import { modalsStore } from 'shared/lib/modal';
import { Button } from 'shared/ui/button';
import { ModalDefault } from 'shared/ui/modal';
import { Typography } from 'shared/ui/typography';

import s from './style.module.scss';

export const CONDITIONS_KEY = 'CONDITIONS_KEY';

interface textPerCheckpointsI {
  title: string;
  text: string;
}

export const textPerCheckpoints: textPerCheckpointsI[] = [
  {
    title: 'Первый раздел',
    text: 'Повседневная практика показывает, что новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности играет важную роль в формировании соответствующий условий активизации. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности играет важную роль в формировании новых предложений. Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации модели развития. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации направлений прогрессивного развития. Равным образом начало повседневной работы по формированию позиции требуют определения и уточнения систем массового участия.'
  },
  {
    title: 'Второй раздел',
    text: 'Повседневная практика показывает, что новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности играет важную роль в формировании соответствующий условий активизации. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности играет важную роль в формировании новых предложений. Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации модели развития. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации направлений прогрессивного развития. Равным образом начало повседневной работы по формированию позиции требуют определения и уточнения систем массового участия.'
  },
  {
    title: 'Третий раздел',
    text: 'Повседневная практика показывает, что новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности играет важную роль в формировании соответствующий условий активизации. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности играет важную роль в формировании новых предложений. Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации модели развития. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации направлений прогрессивного развития. Равным образом начало повседневной работы по формированию позиции требуют определения и уточнения систем массового участия.'
  },
  {
    title: 'Четвёртый раздел',
    text: 'Повседневная практика показывает, что новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности играет важную роль в формировании соответствующий условий активизации. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности играет важную роль в формировании новых предложений. Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации модели развития. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации направлений прогрессивного развития. Равным образом начало повседневной работы по формированию позиции требуют определения и уточнения систем массового участия.'
  },
  {
    title: 'Пятый раздел',
    text: 'Повседневная практика показывает, что новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности играет важную роль в формировании соответствующий условий активизации. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности играет важную роль в формировании новых предложений. Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации модели развития. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации направлений прогрессивного развития. Равным образом начало повседневной работы по формированию позиции требуют определения и уточнения систем массового участия.'
  },
  {
    title: 'Шестой раздел',
    text: 'Повседневная практика показывает, что новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности играет важную роль в формировании соответствующий условий активизации. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности играет важную роль в формировании новых предложений. Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации модели развития. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации направлений прогрессивного развития. Равным образом начало повседневной работы по формированию позиции требуют определения и уточнения систем массового участия.'
  },
  {
    title: 'Седьмой раздел',
    text: 'Повседневная практика показывает, что новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности играет важную роль в формировании соответствующий условий активизации. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности играет важную роль в формировании новых предложений. Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации модели развития. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации направлений прогрессивного развития. Равным образом начало повседневной работы по формированию позиции требуют определения и уточнения систем массового участия.'
  }
];

export const ModalConditions = () => {
  const { t } = useTranslation('');
  const [ onCloseModal ] = useUnit([modalsStore.closeModal]);

  return (
    <ModalDefault
      className={s.modal}
      title={{
        text: 'ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ',
        align: 'left'
      }}
      keyModal={CONDITIONS_KEY}
    >
      <div className={s.text_box}>
        <div
          className={clsx(s.contaiter_texts)}
          // className={clsx(s.contaiter_texts, {['shadow_y']: isShowShadow, [s.shadow_y_bottom]: !isShowShadow})}
        >
          {textPerCheckpoints.map(({ title, text }, index) => (
            <div
              className={clsx(s.checkpoint)}
              key={title}
            >
              <Typography
                color='acsent_dark'
              >
                {`${t(title)} #${index + 1}`}
              </Typography>
              <Typography
                font='additional'
                color='main'
              >
                {t(text)}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <div className={s.actions}>
        <Button
          icon={{
            variant: 'close',
            size: 'xs'
          }}
          onClick={() => onCloseModal({ keyModal: CONDITIONS_KEY })}
        >
          {t('Закрыть окно')}
        </Button>
      </div>
    </ModalDefault>
  );
};
