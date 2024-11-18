import { useUnit } from 'effector-react';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import { CloseButtonProps } from 'react-toastify/dist/components';
import { $theme } from 'shared/lib/theme';
import { Button } from 'shared/ui/button';

const CloseButton = ({ closeToast }: CloseButtonProps) => (
  <Button
    data-testid='close-button'
    theme='mini_icon'
    className='toast_close'
    icon={{ variant: 'close', size: 'xs2' }}
    onClick={closeToast}
  />
);

export const withToast = (component: () => ReactNode) => () => {
  const theme = useUnit($theme);

  return (
    <>
      <ToastContainer
        closeButton={CloseButton}
        icon={false}
        stacked
        draggable
        className={theme}
      />

      {component()}
    </>
  );
};
