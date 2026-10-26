import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import GlassFolderCardsDemo from '../components/ui/demo';
import { EnterpriseArchitectureDossiers } from '../components/EnterpriseArchitectureDossiers';

describe('Clyptus Stripe-Grade Enterprise App', () => {

  it('renders official brand logo, main headline, and trust stats', () => {
    render(<App />);
    
    // Official Logo (found in Navbar and Footer)
    const logos = screen.getAllByAltText('Clyptus Official Logo');
    expect(logos.length).toBeGreaterThanOrEqual(1);
    
    // Main Headline
    expect(screen.getByRole('heading', { name: /enterprise infrastructure for/i })).toBeInTheDocument();
    
    // Pin-to-pin metrics
    expect(screen.getByText('10+')).toBeInTheDocument();
    expect(screen.getAllByText('120+').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('330+')).toBeInTheDocument();
  });

  it('switches Hero telemetry console tabs on user click', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Click on BRIM tab in Hero Console
    const brimTab = screen.getByRole('button', { name: 'BRIM' });
    await user.click(brimTab);

    // Should display BRIM-specific metrics
    expect(screen.getByText(/high-volume subscription billing/i)).toBeInTheDocument();
    expect(screen.getAllByText('4.8M / hr').length).toBeGreaterThanOrEqual(1);

    // Click on AI Ops tab
    const aiTab = screen.getByRole('button', { name: 'AI Ops' });
    fireEvent.click(aiTab);
    expect(screen.getByText('Ledger & Incident Telemetry')).toBeInTheDocument();
  });

  it('switches Architecture spec tabs and displays code', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Click on SAP_BRIM_Engine.ts tab
    const brimCodeTab = screen.getByRole('button', { name: 'SAP_BRIM_Engine.ts' });
    await user.click(brimCodeTab);

    expect(screen.getByText(/ConvergentCharging/i)).toBeInTheDocument();
    expect(screen.getByText(/10,000,000 events \/ hr/i)).toBeInTheDocument();
  });

  it('renders Global Offices hubs and addresses', () => {
    render(<App />);

    // Hubs rendered cleanly in high contrast grid
    expect(screen.getAllByText(/Hyderabad, India/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Level 4, Gumidelli Towers, Begumpet/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Dubai, UAE/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/In5 Tech, Dubai Internet City \/ DIFC/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Phoenix \/ Scottsdale, USA/i).length).toBeGreaterThanOrEqual(1);
  });

  it('has functional navigation links to all dedicated pages', () => {
    render(<App />);

    // All primary navigation tabs exist (may be present in Navbar and Footer)
    expect(screen.getAllByRole('link', { name: /solutions/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /architecture/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /industries/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /global nodes|offices/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /careers/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /insights|blog/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /policies/i }).length).toBeGreaterThanOrEqual(1);
  });

  it('renders interactive Enterprise ROI calculator and trust certifications', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Check ROI Estimator presence
    expect(screen.getByRole('heading', { name: /quantify your modernization roi/i })).toBeInTheDocument();
    expect(screen.getByText(/interactive tco & roi estimator/i)).toBeInTheDocument();

    // Check switching workload in calculator
    const s4hanaWorkloadBtn = screen.getByRole('button', { name: /s\/4hana clean core erp/i });
    await user.click(s4hanaWorkloadBtn);
    expect(screen.getByText('99.4%')).toBeInTheDocument();

    // Check Trust & Security Certifications
    expect(screen.getByText(/soc 2 type ii compliant/i)).toBeInTheDocument();
    expect(screen.getByText(/iso\/iec 27001 certified/i)).toBeInTheDocument();
    expect(screen.getByText(/sap clean core verified/i)).toBeInTheDocument();
  });

  it('renders GlassFolderCards in Architecture Dossiers vault and standalone demo', () => {
    // 1. Verify EnterpriseArchitectureDossiers
    const { unmount } = render(<EnterpriseArchitectureDossiers />);
    expect(screen.getByText('S/4HANA Clean Core')).toBeInTheDocument();
    expect(screen.getByText(/BRIM & FICA Vault/i)).toBeInTheDocument();
    expect(screen.getByText(/Enterprise AI Ops/i)).toBeInTheDocument();
    unmount();

    // 2. Verify GlassFolderCardsDemo
    render(<GlassFolderCardsDemo />);
    expect(screen.getAllByText('My Files').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('Archives')).toBeInTheDocument();
  });

  it('renders interactive TeamShowcase in Leadership section and supports mobile click/hover', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Check leadership heading
    expect(screen.getByText(/practice leadership & governance/i)).toBeInTheDocument();
    expect(screen.getByText('Vamsi Krishna')).toBeInTheDocument();
    expect(screen.getByText(/Founder & Managing Director/i)).toBeInTheDocument();

    // Verify clicking/tapping a team member row activates them (mobile/touch support)
    const vamsiRow = screen.getByRole('button', { name: /view details for vamsi krishna/i });
    await user.click(vamsiRow);

    // Social links become interactive
    const linkedinLinks = screen.getAllByTitle('LinkedIn');
    expect(linkedinLinks.length).toBeGreaterThanOrEqual(1);

    // Verify clicking a photo card activates member
    const sridharCard = screen.getByRole('button', { name: /select sridhar pinnapureddy/i });
    await user.click(sridharCard);
    expect(screen.getAllByText('Sridhar Pinnapureddy').length).toBeGreaterThanOrEqual(1);
  });

  it('renders Reviews marquee section with verified client quotes and images from original site', () => {
    render(<App />);

    // Official trust badge from original site
    expect(screen.getByText(/97% Client Satisfaction · 1,313\+ Positive Reviews/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /trusted by enterprise leaders across continents/i })).toBeInTheDocument();

    // Key client reviewers from original website
    expect(screen.getAllByText(/Venkat \(Srini\) Srinivas/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Balasubramanian Lakshmanan/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Mr\. Mahesh Kolli/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Mohammad Fahadullah/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Mahima Jaiswal/i).length).toBeGreaterThanOrEqual(1);

    // Authentic quotes from original site
    expect(screen.getAllByText(/strategic partner in our digital transformation journey/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/not reactive.*preventive/i).length).toBeGreaterThanOrEqual(1);
  });

  it('renders authentic enterprise ecosystem & client logo marquee with good hierarchy', () => {
    render(<App />);

    // Hierarchy labels
    expect(screen.getAllByText(/Enterprise Platform Ecosystem/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/Strategic Client & Partner Network/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /trusted by global industry leaders & critical infrastructure/i })).toBeInTheDocument();

    // Authentic logos from original clyptus.com
    expect(screen.getAllByAltText(/Deloitte Global Advisory/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByAltText(/Oracle Cloud ERP/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByAltText(/NTT DATA Global Solutions/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByAltText(/Panasonic Industrial Systems/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByAltText(/CtrlS Hyperscale Datacenters/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByAltText(/LTIMindtree Cloud Services/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByAltText(/Saudia Cargo Aviation/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByAltText(/HCL Technologies/i).length).toBeGreaterThanOrEqual(1);

    // Trust badge pillars
    expect(screen.getByText(/Fortune 500 & Global Conglomerates/i)).toBeInTheDocument();
    expect(screen.getByText(/Zero Core Degradation Architecture/i)).toBeInTheDocument();
  });

});