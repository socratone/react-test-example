import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from './TextInput';

describe('text input에 글자를 입력하는 방법', () => {
  test("'hello'를 입력하면 'hello'가 input의 value로 들어가야 한다.", () => {
    render(<TextInput />);

    const textInput = screen.getByRole('textbox') as HTMLInputElement;
    // userEvent.keyboard와는 다르게 단순히 키보드 입력만 하는 게 아닌 input을 클릭하는 것까지도 포함한다.
    userEvent.type(textInput, 'hello');
    expect(textInput).toHaveValue('hello');
  });

  test('backspace 입력이 돼야 한다.', () => {
    render(<TextInput initialValue="hello" />);

    const textInput = screen.getByRole('textbox') as HTMLInputElement;
    userEvent.type(textInput, '{backspace}');
    expect(textInput).toHaveValue('hell');
  });

  test('특정 위치를 focus해서 입력할 수 있어야 한다.', () => {
    render(<TextInput initialValue="hello" />);

    const textInput = screen.getByRole('textbox') as HTMLInputElement;
    textInput.setSelectionRange(2, 2);
    userEvent.type(textInput, '{backspace}');
    expect(textInput).toHaveValue('hllo');
  });

  test('특정 구간을 선택해서 입력할 수 있어야 한다.', () => {
    render(<TextInput initialValue="hello" />);

    const textInput = screen.getByRole('textbox') as HTMLInputElement;
    textInput.setSelectionRange(1, 4);
    userEvent.type(textInput, 'y');
    expect(textInput).toHaveValue('hyo');
  });
});
