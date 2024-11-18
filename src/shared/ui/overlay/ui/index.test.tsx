import { fireEvent, render } from '@testing-library/react';

import { Overlay } from '.';

const { expect, describe } = require('@jest/globals');

describe('Overlay', () => {
  test('applies custom class to Overlay component', () => {
    const customClass = 'custom-class';
    const { container } = render(<Overlay className={customClass} />);
    expect(container.firstChild).toHaveClass(customClass);
  });
  test('calls onClick handler when Overlay is clicked', () => {
    const onClickMock = jest.fn();
    const { container } = render(<Overlay onClick={onClickMock} />);

    const overlayElement = container.firstChild;
    expect(overlayElement).toBeInTheDocument();

    if (overlayElement) {
      fireEvent.click(overlayElement);
      expect(onClickMock).toHaveBeenCalledTimes(1);
    }
  });
});
