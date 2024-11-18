import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import i18n from 'shared/config/i18n/i18n-tests';

import { Tabs } from '.';

const { expect, describe, it } = require('@jest/globals');


describe('Tabs Component', () => {
  beforeEach(() => {
    i18n.init();
  });
  const controllers = [
    { key: 'tab1', children: 'Tab 1' },
    { key: 'tab2', children: 'Tab 2' }
  ];
  const contents = [
    <div key='content1'>Content 1</div>,
    <div key='content2'>Content 2</div>
  ];

  it('renders the correct number of tabs', () => {
    render(<Tabs controllers={controllers} contents={contents} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(controllers.length);
  });

  it('the first tab is active by default', () => {
    render(<Tabs controllers={controllers} contents={contents} />);
    const firstTabButton = screen.getByText('Tab 1').closest('button');
    expect(firstTabButton).toHaveAttribute('aria-expanded', 'true');
  });

  it('clicking on a tab makes it active and displays its content', () => {
    render(<Tabs controllers={controllers} contents={contents} />);

    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  it('passes additional className props to the container', () => {
    const className = 'custom-class';
    const { container } = render(<Tabs controllers={controllers} contents={contents} className={className} />);
    const element = container.querySelector('.tabsContainer');
    expect(element).toHaveClass(className);
  });
});
