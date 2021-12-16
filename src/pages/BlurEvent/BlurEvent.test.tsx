import { render, screen } from '@testing-library/react';
// https://testing-library.com/docs/ecosystem-user-event
import userEvent from '@testing-library/user-event';
import BlurEvent from '.';

describe('<Event />', () => {
  test('input에 아무것도 입력하지 않고 focus out 했을 경우 에러 메시지가 나와야 한다.', () => {
    render(<BlurEvent />);

    const inputElement = screen.getByRole('textbox') as HTMLInputElement;
    userEvent.type(inputElement, ''); // 빈 string 입력

    const buttonElement = screen.getByRole('button') as HTMLButtonElement;
    userEvent.click(buttonElement);

    const textElement = screen.getByText('값을 입력하세요.');
    expect(textElement).toBeInTheDocument();
  });
});
