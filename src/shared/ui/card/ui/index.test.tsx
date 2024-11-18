import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import i18n from 'shared/config/i18n/i18n-tests';
import { Button } from 'shared/ui/button';

import { Card } from '.';

const { expect, describe, it } = require('@jest/globals');

describe('Card Component', () => {
  beforeEach(() => {
    i18n.init();
  });
  it('renders correctly', () => {
    render(<Card>Test Content</Card>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    render(<Card><Button>Button</Button></Card>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('applies base variant class by default', () => {
    const { container } = render(<Card>Test Content</Card>);
    expect(container.firstChild).toHaveClass('base');
  });

  it('applies center variant class when variant is center', () => {
    const { container } = render(<Card variant='center'>Test Content</Card>);
    expect(container.firstChild).toHaveClass('center');
  });

  it('applies custom class name correctly', () => {
    const { container } = render(<Card className='custom-class'>Test Content</Card>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders title correctly when provided', () => {
    const { getByText, container } = render(
      <Card title={{ text: 'Test Title', variantIcon: 'balance' }}>
        Test Content
      </Card>
    );
    expect(getByText('Test Title')).toBeInTheDocument();
    expect(container.querySelector('.m')).toBeInTheDocument();
  });

  it('does not render title when not provided', () => {
    const { queryByText, container } = render(<Card>Test Content</Card>);
    expect(queryByText('Test Title')).toBeNull();
    expect(container.querySelector('.m')).toBeNull();
  });
});
