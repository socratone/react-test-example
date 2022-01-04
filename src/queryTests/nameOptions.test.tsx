import { render, screen } from '@testing-library/react';

// accessible name
// https://www.tpgi.com/what-is-an-accessible-name/
describe('name option', () => {
  test('name option을 이용해서 button을 하나만 찾을 수 있어야 한다.', () => {
    render(
      <div>
        <button>hello</button>
        <button>world</button>
      </div>
    );

    const element = screen.getByRole('button', { name: 'hello' });
    expect(element).toBeInTheDocument();
  });

  test('name option을 이용해서 option을 하나만 찾을 수 있어야 한다.', () => {
    render(
      <div>
        <select>
          <option>hello</option>
          <option>world</option>
        </select>
      </div>
    );

    const element = screen.getByRole('option', { name: 'hello' });
    expect(element).toBeInTheDocument();
  });
});
