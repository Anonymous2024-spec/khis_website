import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import Contact from '../../pages/Contact'

const renderContact = () => render(
  <BrowserRouter>
    <Contact />
  </BrowserRouter>
)

describe('Contact page', () => {
  it('renders the page heading', () => {
    renderContact()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('renders contact details', () => {
    renderContact()
    expect(screen.getByText('P.O Box 334, Kitgum, Uganda')).toBeInTheDocument()
    expect(screen.getByText('info@kihs.ac.ug')).toBeInTheDocument()
  })

  it('renders the enquiry form', () => {
    renderContact()
    expect(screen.getByText('Send Us a Message')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your full name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('you@example.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Write your message here...')).toBeInTheDocument()
  })

  it('shows validation errors when form is submitted empty', async () => {
    renderContact()
    const user = userEvent.setup()
    await user.click(screen.getByText('Send Message'))
    expect(screen.getByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Message is required')).toBeInTheDocument()
  })

  it('shows success screen after valid form submission', async () => {
    renderContact()
    const user = userEvent.setup()
    await user.type(screen.getByPlaceholderText('Your full name'), 'John Doe')
    await user.type(screen.getByPlaceholderText('you@example.com'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Write your message here...'), 'I need more information about courses')
    await user.click(screen.getByText('Send Message'))
    expect(screen.getByText('Message Sent!')).toBeInTheDocument()
  })

  it('can submit another message after success', async () => {
    renderContact()
    const user = userEvent.setup()
    await user.type(screen.getByPlaceholderText('Your full name'), 'John Doe')
    await user.type(screen.getByPlaceholderText('you@example.com'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Write your message here...'), 'Test message')
    await user.click(screen.getByText('Send Message'))
    await user.click(screen.getByText('Send Another Message'))
    expect(screen.getByText('Send Us a Message')).toBeInTheDocument()
  })
})