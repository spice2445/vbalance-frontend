import { render } from '@testing-library/react';

import { Loader } from '.';

const { expect, describe, test } = require('@jest/globals');

describe('Loader', () => {
  test('display loader', () => {
    const { container } = render(<Loader size='s' isLoading />);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('dont display loader', () => {
    const { container } = render(<Loader size='s' isLoading={false} />);
    expect(container.firstChild).not.toBeInTheDocument();
  });
});
