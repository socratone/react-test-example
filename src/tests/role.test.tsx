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

  test('radio를 찾는다.', () => {
    render(
      <div>
        <input type="radio" />
      </div>
    );

    const element = screen.getByRole('radio');
    expect(element).toBeInTheDocument();
  });

  test('checkbox를 찾는다.', () => {
    render(
      <div>
        <input type="checkbox" />
      </div>
    );

    const element = screen.getByRole('checkbox');
    expect(element).toBeInTheDocument();
  });

  test('img를 찾는다.', () => {
    render(
      <div>
        <img alt="" />
      </div>
    );

    const element = screen.getByRole('img');
    expect(element).toBeInTheDocument();
  });

  test('article을 찾는다.', () => {
    render(
      <div>
        <article />
      </div>
    );

    const element = screen.getByRole('article');
    expect(element).toBeInTheDocument();
  });
});
