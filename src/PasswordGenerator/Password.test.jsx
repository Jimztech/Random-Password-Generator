import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PasswordGenerator from './PasswordGenerator';

test('generated password has the correct length', () => {
  const setPassword = jest.fn();
  const { getByText } = render(<PasswordGenerator length={8} strength="medium" setPassword={setPassword} />);
  
  fireEvent.click(getByText('Generate Password'));
  
  expect(setPassword).toHaveBeenCalledTimes(1);
  expect(setPassword.mock.calls[0][0]).toHaveLength(8);
});

test('generated password has uppercase letters for strong strength', () => {
  const setPassword = jest.fn();
  const { getByText } = render(<PasswordGenerator length={10} strength="strong" setPassword={setPassword} />);
  
  fireEvent.click(getByText('Generate Password'));
  
  expect(setPassword).toHaveBeenCalledTimes(1);
  expect(setPassword.mock.calls[0][0]).toMatch(/[A-Z]/);
});

test('generated password has lowercase letters for medium strength', () => {
  const setPassword = jest.fn();
  const { getByText } = render(<PasswordGenerator length={10} strength="medium" setPassword={setPassword} />);
  
  fireEvent.click(getByText('Generate Password'));
  
  expect(setPassword).toHaveBeenCalledTimes(1);
  expect(setPassword.mock.calls[0][0]).toMatch(/[a-z]/);
});

test('generated password has numbers for weak strength', () => {
  const setPassword = jest.fn();
  const { getByText } = render(<PasswordGenerator length={10} strength="weak" setPassword={setPassword} />);
  
  fireEvent.click(getByText('Generate Password'));
  
  expect(setPassword).toHaveBeenCalledTimes(1);
  expect(setPassword.mock.calls[0][0]).toMatch(/[0-9]/);
});

test('generated password has special characters for strong strength', () => {
  const setPassword = jest.fn();
  const { getByText } = render(<PasswordGenerator length={10} strength="strong" setPassword={setPassword} />);
  
  fireEvent.click(getByText('Generate Password'));
  
  expect(setPassword).toHaveBeenCalledTimes(1);
  expect(setPassword.mock.calls[0][0]).toMatch(/[^A-Za-z0-9]/);
});

test('generated password has a mix of characters for medium strength', () => {
  const setPassword = jest.fn();
  const { getByText } = render(<PasswordGenerator length={10} strength="medium" setPassword={setPassword} />);
  
  fireEvent.click(getByText('Generate Password'));
  
  expect(setPassword).toHaveBeenCalledTimes(1);
  expect(setPassword.mock.calls[0][0]).toMatch(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/);
});
