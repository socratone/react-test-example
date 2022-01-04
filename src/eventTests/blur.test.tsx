import { fireEvent, render, screen } from '@testing-library/react';
import ButtonBlurEvent from './ButtonBlurEvent';
import InputBlurEvent from './InputBlurEvent';

describe('blur event를 넣는 방법', () => {
  test('button blur event', () => {
    render(<ButtonBlurEvent />);

    const button = screen.getByRole('button');
    fireEvent.blur(button);
    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();
  });

  test('input blur event', () => {
    render(<InputBlurEvent />);

    const textbox = screen.getByRole('textbox');
    fireEvent.blur(textbox);
    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();
  });
});
