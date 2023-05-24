import cstyles from '../../styles/esummit/cards.module.css'
import Link from 'next/link'
export default function Card({ description, heading, link }) {
  return (
    <div className={cstyles.card}>
      <div className={cstyles.face1}>
        <p className={cstyles.description}>{description}</p>
        <Link href={link} className={cstyles.read_more}>
          Read more-{'>'}
        </Link>
      </div>
      <div className={cstyles.face2}>
        <h2 className={cstyles.heading}>{heading}</h2>
      </div>
    </div>
  );
}
