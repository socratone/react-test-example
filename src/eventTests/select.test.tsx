import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('select를 다루는 방법', () => {
  test('select의 option을 선택할 수 있어야 한다.', () => {
    render(
      <select multiple>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </select>
    );

    const listbox = screen.getByRole('listbox');
    userEvent.selectOptions(listbox, ['1', '3']);

    const option1 = screen.getByRole('option', {
      name: 'A',
    }) as HTMLOptionElement;
    const option2 = screen.getByRole('option', {
      name: 'B',
    }) as HTMLOptionElement;
    const option3 = screen.getByRole('option', {
      name: 'C',
    }) as HTMLOptionElement;

    expect(option1.selected).toBe(true);
    expect(option2.selected).toBe(false);
    expect(option3.selected).toBe(true);
  });
});
