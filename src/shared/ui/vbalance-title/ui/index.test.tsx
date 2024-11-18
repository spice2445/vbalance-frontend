import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { VbalanceTitle } from '.';

const { expect, describe, it } = require('@jest/globals');

describe('VbalanceTitle Component', () => {
  const testTitle = 'Brinkmann';
  const testSize = 'm';

  it('renders the component with given title', () => {
    render(<VbalanceTitle title={testTitle} size={testSize} />);
    expect(screen.getByText('BALANCE')).toBeInTheDocument();
  });

  it('correctly applies the size to the Typography components', () => {
    render(<VbalanceTitle title={testTitle} size={testSize} />);
    const typographyElements = screen.getAllByText(/BALANCE|Brinkmann/);
    typographyElements.forEach((element) => {
      expect(element).toHaveClass(testSize);
    });
  });
});
