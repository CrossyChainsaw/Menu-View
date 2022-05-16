import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

// test of dat © BitchesOfTheStreet in de pagina staat
test('renders learn react link', () => {
    render(<App/>);
    const linkElement = screen.getByText(/© BitchesOfTheStreet/);
    expect(linkElement).toBeInTheDocument();
  });