import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';

import { Button } from '.';

const { expect, describe, it } = require('@jest/globals');

describe('Button Component', () => {
  it('should render Button with text(children)', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('should apply the className prop', () => {
    const className = 'test-class';
    render(<Button className={className}>Click Me</Button>);
    expect(screen.getByText('Click Me')).toHaveClass(className);
  });

  it('should render the correct default theme is primary', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toHaveClass('primary');
  });

  it('should render the correct theme is white', () => {
    const theme = 'white';
    render(<Button theme={theme}>Click Me</Button>);
    expect(screen.getByText('Click Me')).toHaveClass('white');
  });

  it('should call onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('button without icon', () => {
    const { container } = render(
      <Button>
        Wihout Icon
      </Button>
    );
    const svg = container.querySelector('svg');
    expect(svg).not.toBeInTheDocument();

    const button = screen.getByText('Wihout Icon');
    expect(button.childNodes).toHaveLength(1);
  });
});
