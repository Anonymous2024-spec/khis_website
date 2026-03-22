import { Helmet } from 'react-helmet-async'

export default function PageTitle({ title }) {
  return (
    <Helmet>
      <title>{title} | Kitgum Institute of Health Sciences</title>
      <meta name="description" content="Kitgum Institute of Health Sciences — Dedicated to Excellence. Offering Diploma and Certificate programs in Medical Laboratory Technology and Pharmacy." />
    </Helmet>
  )
}