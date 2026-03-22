import { renderHook } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import usePageTitle from '../../hooks/usePageTitle'

describe('usePageTitle', () => {
  it('sets the document title correctly', () => {
    renderHook(() => usePageTitle('Home'))
    expect(document.title).toBe('Home | Kitgum Institute of Health Sciences')
  })

  it('updates the title when it changes', () => {
    const { rerender } = renderHook(({ title }) => usePageTitle(title), {
      initialProps: { title: 'Home' },
    })
    expect(document.title).toBe('Home | Kitgum Institute of Health Sciences')

    rerender({ title: 'About Us' })
    expect(document.title).toBe('About Us | Kitgum Institute of Health Sciences')
  })
})