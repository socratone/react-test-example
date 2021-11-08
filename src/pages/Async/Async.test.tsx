import { render, screen } from '@testing-library/react';
import Async from './index';

describe('<Async />', () => {
  test('데이터를 불러와야 한다.', async () => {
    render(<Async />);
    const listItemElements = await screen.findAllByRole('listitem'); // 찾을 때까지 기다렸다가 실행된다. 기본값 1초
    expect(listItemElements).not.toHaveLength(0);
  });
});
