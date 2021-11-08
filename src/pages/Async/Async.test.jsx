import axios from 'axios';
import { render, screen } from '@testing-library/react';
import Async from './index';

jest.mock('axios');

describe('<Async />', () => {
  test('데이터를 불러와야 한다.', async () => {
    const users = [{ id: 1, name: 'socratone' }];
    const res = { data: users };
    axios.get.mockResolvedValue(res);

    render(<Async />);
    const listItemElements = await screen.findAllByRole('listitem'); // 찾을 때까지 기다렸다가 실행된다. 기본값 1초
    expect(listItemElements).not.toHaveLength(0);
  });
});
