import { render, screen } from '@testing-library/react';
import Basic from './index';

test('hello world 글자가 있어야 한다.', () => {
  render(<Basic />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
