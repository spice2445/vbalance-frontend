import { render, screen } from '@testing-library/react';

import { Image } from '.';

const { expect, describe, it } = require('@jest/globals');

describe('Image', () => {
  it('renders the image with provided src and alt text', () => {
    render(<Image src='test-image.jpg' alt='Test Image' />);

    const image = screen.getByAltText('Test Image') as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toContain('test-image.jpg');
  });

  it('applies custom class names along with base class', () => {
    render(<Image src='test-image.jpg' alt='Test Image' className='custom-class' />);

    const image = screen.getByAltText('Test Image');
    expect(image).toHaveClass('imageContainerBase');
    expect(image).toHaveClass('custom-class');
  });

  it('defaults to lazy loading when not specified', () => {
    render(<Image src='test-image.jpg' alt='Test Image' />);

    const image = screen.getByAltText('Test Image');
    expect(image).toHaveAttribute('loading', 'lazy');
  });

  it('sets loading to eager when lazyLoad is false', () => {
    render(<Image src='test-image.jpg' alt='Test Image' lazyLoad={false} />);

    const image = screen.getByAltText('Test Image');
    expect(image).toHaveAttribute('loading', 'eager');
  });
});
