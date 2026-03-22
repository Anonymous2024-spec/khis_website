import { useEffect } from 'react'

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = `${title} | Kitgum Institute of Health Sciences`
  }, [title])
}