import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import CourseCard from '../../components/CourseCard'

const mockDiplomaCourse = {
  id: 1,
  type: 'Diploma',
  title: 'Diploma in Medical Laboratory Technology',
  duration: '3 Years',
  fee: '2,800,000/=',
  requirements: ['O-Level with at least 5 passes', 'A-Level Biology or Chemistry'],
  description: 'Trains students in laboratory techniques and diagnostic procedures.',
}

const mockCertificateCourse = {
  id: 3,
  type: 'Certificate',
  title: 'Certificate in Medical Laboratory Technology',
  duration: '2 Years',
  fee: '2,800,000/=',
  requirements: ['O-Level with at least 5 passes'],
  description: 'Provides foundational skills in medical laboratory procedures.',
}

const renderCard = (course) => render(
  <BrowserRouter>
    <CourseCard course={course} />
  </BrowserRouter>
)

describe('CourseCard', () => {
  it('renders the course title', () => {
    renderCard(mockDiplomaCourse)
    expect(screen.getByText('Diploma in Medical Laboratory Technology')).toBeInTheDocument()
  })

  it('renders the course type badge', () => {
    renderCard(mockDiplomaCourse)
    expect(screen.getByText('Diploma')).toBeInTheDocument()
  })

  it('renders certificate type badge', () => {
    renderCard(mockCertificateCourse)
    expect(screen.getByText('Certificate')).toBeInTheDocument()
  })

  it('renders the course duration', () => {
    renderCard(mockDiplomaCourse)
    expect(screen.getByText('3 Years')).toBeInTheDocument()
  })

  it('renders the course fee', () => {
    renderCard(mockDiplomaCourse)
    expect(screen.getByText(/2,800,000/)).toBeInTheDocument()
  })

  it('renders all entry requirements', () => {
    renderCard(mockDiplomaCourse)
    expect(screen.getByText('O-Level with at least 5 passes')).toBeInTheDocument()
    expect(screen.getByText('A-Level Biology or Chemistry')).toBeInTheDocument()
  })

  it('renders the apply button', () => {
    renderCard(mockDiplomaCourse)
    expect(screen.getByText('Apply for this Course')).toBeInTheDocument()
  })

  it('apply button links to apply page', () => {
    renderCard(mockDiplomaCourse)
    const link = screen.getByRole('link', { name: /apply for this course/i })
    expect(link).toHaveAttribute('href', '/apply')
  })
})