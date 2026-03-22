import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import StatsBanner from '../../components/StatsBanner'

describe('StatsBanner', () => {
  it('renders all 4 stats', () => {
    render(<StatsBanner />)
    expect(screen.getByText('4')).toBeInTheDocument()
    expect(screen.getByText('2-3 Yrs')).toBeInTheDocument()
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('100%')).toBeInTheDocument()
  })

  it('renders all stat labels', () => {
    render(<StatsBanner />)
    expect(screen.getByText('Programs Offered')).toBeInTheDocument()
    expect(screen.getByText('Program Duration')).toBeInTheDocument()
    expect(screen.getByText('Students Trained')).toBeInTheDocument()
    expect(screen.getByText('Dedicated to Excellence')).toBeInTheDocument()
  })
})