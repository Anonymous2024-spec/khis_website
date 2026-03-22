import { describe, it, expect } from 'vitest'
import { courses } from '../data/courses'
import { news } from '../data/news'
import { partners } from '../data/partners'

describe('courses data', () => {
  it('has 4 courses', () => {
    expect(courses).toHaveLength(4)
  })

  it('each course has required fields', () => {
    courses.forEach(course => {
      expect(course).toHaveProperty('id')
      expect(course).toHaveProperty('title')
      expect(course).toHaveProperty('type')
      expect(course).toHaveProperty('duration')
      expect(course).toHaveProperty('fee')
      expect(course).toHaveProperty('requirements')
      expect(course).toHaveProperty('description')
    })
  })

  it('has 2 diploma courses', () => {
    const diplomas = courses.filter(c => c.type === 'Diploma')
    expect(diplomas).toHaveLength(2)
  })

  it('has 2 certificate courses', () => {
    const certificates = courses.filter(c => c.type === 'Certificate')
    expect(certificates).toHaveLength(2)
  })

  it('diploma courses have 3 year duration', () => {
    const diplomas = courses.filter(c => c.type === 'Diploma')
    diplomas.forEach(course => {
      expect(course.duration).toBe('3 Years')
    })
  })

  it('certificate courses have 2 year duration', () => {
    const certificates = courses.filter(c => c.type === 'Certificate')
    certificates.forEach(course => {
      expect(course.duration).toBe('2 Years')
    })
  })
})

describe('news data', () => {
  it('has at least one news item', () => {
    expect(news.length).toBeGreaterThan(0)
  })

  it('each news item has required fields', () => {
    news.forEach(item => {
      expect(item).toHaveProperty('id')
      expect(item).toHaveProperty('title')
      expect(item).toHaveProperty('date')
      expect(item).toHaveProperty('excerpt')
      expect(item).toHaveProperty('category')
    })
  })
})

describe('partners data', () => {
  it('has at least one partner', () => {
    expect(partners.length).toBeGreaterThan(0)
  })

  it('each partner has required fields', () => {
    partners.forEach(partner => {
      expect(partner).toHaveProperty('id')
      expect(partner).toHaveProperty('name')
      expect(partner).toHaveProperty('description')
    })
  })
})