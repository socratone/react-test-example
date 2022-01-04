import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ButtonClickEvent from './ButtonClickEvent';

describe('click event를 넣는 방법', () => {
  test('button click event', () => {
    render(<ButtonClickEvent />);

    const button = screen.getByRole('button');
    userEvent.click(button);
    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();
  });
});
