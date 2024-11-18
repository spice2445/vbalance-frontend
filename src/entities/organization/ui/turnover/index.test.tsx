import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/jest';

import { Turnover } from '.';

const { expect, describe, it } = require('@jest/globals');

describe('UrnoverOrganization Component', () => {
  beforeEach(() => {
    renderWithTranslation(<Turnover />);
  });

  it('renders correctly', () => {
    expect(screen.getByText(/Товарооборот организации/)).toBeInTheDocument();
  });
});
