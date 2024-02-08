import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

let initializeTimes = jest.fn;

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByTestId("bookingPage");
  expect(headingElement).toBeInTheDocument();
  
});

test('Tests the initializeTimes function', () => {
  
});

test('Tests the updateTimes function', () => {

});
