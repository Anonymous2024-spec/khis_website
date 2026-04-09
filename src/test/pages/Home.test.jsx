import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Home from '../../pages/Home'

const renderHome = () => render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>
)

describe('Home page', () => {
  it('renders the institute name in hero', () => {
    renderHome()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    renderHome()
    const taglines = screen.getAllByText('Dedicated to Excellence')
    expect(taglines.length).toBeGreaterThan(0)
  })

  it('renders the Apply Now button', () => {
    renderHome()
    const applyButtons = screen.getAllByText('Apply Now')
    expect(applyButtons.length).toBeGreaterThan(0)
  })

  it('renders the View Courses button', () => {
    renderHome()
    expect(screen.getByText('View Courses')).toBeInTheDocument()
  })

  it('renders the admissions notice', () => {
    renderHome()
    expect(screen.getByText(/2026\/2027 Admissions Open/i)).toBeInTheDocument()
  })

  it('renders the stats banner', () => {
    renderHome()
    expect(screen.getByText('Programs Offered')).toBeInTheDocument()
    expect(screen.getByText('Students Trained')).toBeInTheDocument()
  })

  it('renders all 4 course cards', () => {
    renderHome()
    expect(screen.getByText('Diploma in Medical Laboratory Techniques')).toBeInTheDocument()
    expect(screen.getByText('Diploma in Pharmacy')).toBeInTheDocument()
    expect(screen.getByText('Certificate in Medical Laboratory Techniques')).toBeInTheDocument()
    expect(screen.getByText('Certificate in Pharmacy')).toBeInTheDocument()
  })

  it('renders the why choose us section', () => {
    renderHome()
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument()
  })

  it('renders the news section', () => {
    renderHome()
    expect(screen.getByText('News & Announcements')).toBeInTheDocument()
  })

  it('renders the CTA block', () => {
    renderHome()
    expect(screen.getByText('Ready to Start Your Journey?')).toBeInTheDocument()
  })
})