import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import Courses from '../../pages/Courses'

const renderCourses = () => render(
  <BrowserRouter>
    <Courses />
  </BrowserRouter>
)

describe('Courses page', () => {
  it('renders the page heading', () => {
    renderCourses()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders all 3 filter tabs', () => {
    renderCourses()
    const buttons = screen.getAllByRole('button')
    const tabLabels = buttons.map(b => b.textContent)
    expect(tabLabels).toContain('All')
    expect(tabLabels).toContain('Diploma')
    expect(tabLabels).toContain('Certificate')
  })

  it('shows all 4 courses by default', () => {
    renderCourses()
    expect(screen.getByText('Diploma in Medical Laboratory Technology')).toBeInTheDocument()
    expect(screen.getByText('Diploma in Pharmacy')).toBeInTheDocument()
    expect(screen.getByText('Certificate in Medical Laboratory Technology')).toBeInTheDocument()
    expect(screen.getByText('Certificate in Pharmacy')).toBeInTheDocument()
  })

  it('filters to show only diploma courses when Diploma tab is clicked', async () => {
    renderCourses()
    const user = userEvent.setup()
    const diplomaButton = screen.getAllByRole('button').find(b => b.textContent === 'Diploma')
    await user.click(diplomaButton)
    expect(screen.getByText('Diploma in Medical Laboratory Technology')).toBeInTheDocument()
    expect(screen.getByText('Diploma in Pharmacy')).toBeInTheDocument()
    expect(screen.queryByText('Certificate in Pharmacy')).not.toBeInTheDocument()
  })

  it('filters to show only certificate courses when Certificate tab is clicked', async () => {
    renderCourses()
    const user = userEvent.setup()
    const certButton = screen.getAllByRole('button').find(b => b.textContent === 'Certificate')
    await user.click(certButton)
    expect(screen.getByText('Certificate in Medical Laboratory Technology')).toBeInTheDocument()
    expect(screen.getByText('Certificate in Pharmacy')).toBeInTheDocument()
    expect(screen.queryByText('Diploma in Pharmacy')).not.toBeInTheDocument()
  })

  it('shows all courses again when All tab is clicked', async () => {
    renderCourses()
    const user = userEvent.setup()
    const diplomaButton = screen.getAllByRole('button').find(b => b.textContent === 'Diploma')
    const allButton = screen.getAllByRole('button').find(b => b.textContent === 'All')
    await user.click(diplomaButton)
    await user.click(allButton)
    expect(screen.getByText('Certificate in Pharmacy')).toBeInTheDocument()
    expect(screen.getByText('Diploma in Pharmacy')).toBeInTheDocument()
  })

  it('renders the admission notice', () => {
    renderCourses()
    expect(screen.getByText('Important Admission Note')).toBeInTheDocument()
  })
})