import { render } from '@testing-library/react';

import { IconVariant, IconSize } from './index.type';

import { Icon } from '.';

const { expect, describe, it } = require('@jest/globals');

describe('Icon', () => {
  const variant: IconVariant = 'exit';
  const size: IconSize = 'm';
  const isAnimated = false;

  it('renders without crashing', () => {
    const { container } = render(<Icon variant={variant} size={size} isAnimated={isAnimated} />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
