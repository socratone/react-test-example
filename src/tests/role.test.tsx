import { render, screen } from '@testing-library/react';

describe('Role로 Element를 찾는 방법', () => {
  test('textbox를 찾는다.', () => {
    render(
      <div>
        <input type="text" />
      </div>
    );

    const element = screen.getByRole('textbox');
    expect(element).toBeInTheDocument();
  });

  test('button을 찾는다.', () => {
    render(
      <div>
        <button />
      </div>
    );

    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
  });
});
