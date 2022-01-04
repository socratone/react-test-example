import { render, screen } from '@testing-library/react';

describe('3가지 Query를 쓰는 방법', () => {
  test('getBy', () => {
    render(
      <div>
        <button />
      </div>
    );

    const element = screen.getByRole('button'); // 못찾으면 에러 발생
    expect(element).toBeInTheDocument();
  });

  test('queryBy', () => {
    render(
      <div>
        <button />
      </div>
    );

    const element = screen.queryByRole('textbox'); // 몾찾으면 null return
    expect(element).toBe(null);
  });

  test('findBy', async () => {
    render(
      <div>
        <button />
      </div>
    );

    const element = await screen.findByRole('button'); // promise를 return
    expect(element).toBeInTheDocument();
  });
});
