import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { BlogSection } from '../components/BlogSection';

describe('BlogSection Stripe-Grade Interactive Accordion Cards', () => {
  it('renders section title, subtitle, and original Clyptus perspectives', () => {
    render(
      <BrowserRouter>
        <BlogSection />
      </BrowserRouter>
    );

    // Section title & subtitle
    expect(screen.getByRole('heading', { name: /what's happening/i })).toBeInTheDocument();
    expect(screen.getByText(/latest perspectives from our/i)).toBeInTheDocument();
    expect(screen.getByText(/enterprise centers of excellence/i)).toBeInTheDocument();

    // Initial active card (SAP FICA Architecture)
    expect(screen.getByText('SAP FICA Architecture')).toBeInTheDocument();
    expect(screen.getByText(/decoupling high-volume enterprise ledgers with sap fi-ca\./i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /read publication/i })).toBeInTheDocument();
  });

  it('cycles to the next and previous card when arrow buttons are clicked', async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <BlogSection />
      </BrowserRouter>
    );

    const nextBtn = screen.getByRole('button', { name: /next perspective/i });
    const prevBtn = screen.getByRole('button', { name: /previous perspective/i });

    // Click Next -> Should advance to SAP BRIM Blueprint
    await user.click(nextBtn);
    expect(screen.getByText('SAP BRIM Blueprint')).toBeInTheDocument();
    expect(screen.getByText(/architecting 10m\+ events\/hr billing engines/i)).toBeInTheDocument();

    // Click Prev -> Should return to SAP FICA Architecture
    await user.click(prevBtn);
    expect(screen.getByText('SAP FICA Architecture')).toBeInTheDocument();
  });

  it('expands a card when its collapsed sliver is clicked', () => {
    render(
      <BrowserRouter>
        <BlogSection />
      </BrowserRouter>
    );

    // Click on 4th card (Enterprise IT Advisory)
    const card4 = screen.getByRole('button', { name: /perspective 4: enterprise it advisory/i });
    fireEvent.click(card4);

    expect(screen.getByText('Enterprise IT Advisory')).toBeInTheDocument();
    expect(screen.getByText(/5 costly enterprise erp mistakes/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /read strategy paper/i })).toBeInTheDocument();
  });
});
