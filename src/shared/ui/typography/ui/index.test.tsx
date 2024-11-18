import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import {
  TypographyColor, TypographyFont, TypographySizes
} from './index.type';

import {
  Typography
} from '.';

const { expect, describe, it } = require('@jest/globals');

describe('Typography Component', () => {
  it('applies correct classes based on props', () => {
    const { container } = render(<Typography size='xl' font='additional' color='positive'>Test Text</Typography>);
    expect(container.firstChild).toHaveClass('xl');
    expect(container.firstChild).toHaveClass('font_additional');
    expect(container.firstChild).toHaveClass('color_positive');
  });

  it('renders correct HTML tag based on size prop', () => {
    render(<Typography size='xl'>Test Text</Typography>);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders correct HTML tag based on as prop', () => {
    render(<Typography as='span'>Test Text</Typography>);
    expect(screen.getByText('Test Text').tagName).toBe('SPAN');
  });

  it('renders children correctly', () => {
    render(<Typography>Child Text</Typography>);
    expect(screen.getByText('Child Text')).toBeInTheDocument();
  });

  const sizes: TypographySizes[] = ['xl', 'l', 'm', 's', 'xs'];
  const fonts: TypographyFont[] = ['main', 'additional', 'additional_bold'];
  const colors: TypographyColor[] = ['main', 'acsent', 'acsent_dark', 'positive', 'negative'];

  const { container } = render(<Typography size={sizes[0]} font={fonts[0]} color={colors[0]}>Test Text</Typography>);
  expect(container.firstChild).toHaveClass('xl');
  expect(container.firstChild).toHaveClass(`font_${fonts[0]}`);
  expect(container.firstChild).toHaveClass(`color_${colors[0]}`);

  it('passes additional props to the component', () => {
    const { container } = render(<Typography id='test-id' className='test-class'>Test Text</Typography>);
    expect(container.firstChild).toHaveAttribute('id', 'test-id');
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('does not render an icon when variantIcon is not provided', () => {
    const { container } = render(<Typography>Test Text</Typography>);
    const element = container.querySelector('.sizeM');
    expect(element).not.toBeInTheDocument();
  });

  it('applies custom class name correctly', () => {
    const { container } = render(<Typography className='custom-class'>Test Text</Typography>);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
