import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/jest';

import { ToggleTheme } from '.';

const { expect, describe, test } = require('@jest/globals');

describe('Toggle-theme', () => {
  test('test render', () => {
    renderWithTranslation(<ToggleTheme />);
    expect(screen.getByTestId('toggle-theme')).toBeInTheDocument();
  });
});
