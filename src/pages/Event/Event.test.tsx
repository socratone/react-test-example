import { render, screen } from '@testing-library/react';
// https://testing-library.com/docs/ecosystem-user-event
import userEvent from '@testing-library/user-event';
import Event from '.';

describe('<Event />', () => {
  // click event
  test('버튼을 클릭하면 1이 입력돼야 한다.', () => {
    render(<Event />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const textElement = screen.getByText('1');
    expect(textElement).toBeInTheDocument();
  });

  // type event
  test('input에 123456789를 입력하더라도 12345가 나와야 한다.', () => {
    render(<Event />);

    const inputElement = screen.getByRole('textbox') as HTMLInputElement;
    userEvent.type(inputElement, '123456789');

    expect(inputElement.value).toBe('12345');
  });
});
