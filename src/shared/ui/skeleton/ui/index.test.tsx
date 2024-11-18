import { act, render, screen } from '@testing-library/react';
import { useLoadingMock } from 'shared/lib/lazy';

import { Skeleton } from '.';

const { expect, it } = require('@jest/globals');

it('renders real loading', async () => {
  jest.useFakeTimers();
  const TestSkeletonWrapper = () => {
    const isLoading = useLoadingMock(1000);

    return <Skeleton isLoading={isLoading}><div>Test Content</div></Skeleton>;
  };
  const { container } = render(<TestSkeletonWrapper />);

  expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
  expect(container.querySelector('.skeleton_loading')).toBeInTheDocument();

  await act(() => Promise.resolve(jest.advanceTimersByTime(1000)));

  expect(screen.queryByText('Test Content')).toBeInTheDocument();
  expect(container.querySelector('.skeleton_loading')).not.toBeInTheDocument();

  jest.useRealTimers();
});
