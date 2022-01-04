import { render, screen } from '@testing-library/react';

// text node를 찾는다.
describe('Text로 Element를 찾는 방법', () => {
  test('글자가 정확히 일치해야 한다.', () => {
    render(
      <div>
        <p>hello</p>
      </div>
    );

    const element = screen.getByText('hello');
    expect(element).toBeInTheDocument();
  });

  test('글자가 부분만 일치해도 된다.', () => {
    render(
      <div>
        <p>hello</p>
      </div>
    );

    const element = screen.getByText('ll', { exact: false });
    expect(element).toBeInTheDocument();
  });
});
