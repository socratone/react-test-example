import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Basic from './index';

describe('<Basic />', () => {
  test('hello라는 글자가 포함 되어야 한다.', () => {
    render(<Basic />);
    const textElement = screen.getByText('hello', { exact: false }); // 못찾으면 에러
    expect(textElement).toBeInTheDocument();
  });

  test('bye라는 글자는 없어야 한다.', () => {
    render(<Basic />);
    const textElement = screen.queryByText('bye', { exact: false }); // 못찾아도 에러 x
    expect(textElement).not.toBeInTheDocument();
  });

  test('버튼을 클릭하지 않았을 때에는 0이어야 한다.', () => {
    render(<Basic />); // arrange
    const textElement = screen.getByText('0'); // assert
    expect(textElement).toBeInTheDocument();
  });

  test('버튼을 클릭하면 1이어야 한다.', () => {
    // arrange
    render(<Basic />);
    // act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    // assert
    const textElement = screen.getByText('1');
    expect(textElement).toBeInTheDocument();
  });
});
