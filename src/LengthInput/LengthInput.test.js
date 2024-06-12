import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LengthInput from './LengthInput';

test('length input changes value correctly', () => {
  const setLength = jest.fn();
  const { getByLabelText } = render(<LengthInput length={10} setLength={setLength} />);

  const input = getByLabelText('Password Length:');
  fireEvent.change(input, { target: { value: '15' } });

  expect(setLength).toHaveBeenCalledWith(15);
});
