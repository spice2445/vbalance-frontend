import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/jest';

import { DirectionCourseCard } from '.';

const { expect, describe, it } = require('@jest/globals');

describe('DirectionCourseCard Component', () => {
  beforeEach(() => {
    renderWithTranslation(<DirectionCourseCard isLoading />);
  });

  it('renders the card container', () => {
    expect(screen.getByTestId('card-container')).toBeInTheDocument();
  });
});
