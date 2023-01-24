import Image from 'next/image'
import style from '../../styles/AboutUs/aboutuscards.module.css'
import Anushka from '../../assets/images/Executives-2019/1.jpg'
import sonakshi from '../../assets/images/Executives-2019/2.jpg'
import nikhil from '../../assets/images/Executives-2019/nikhil.jpg'
import Noll from '../../assets/images/Executives-2020/noll.png'
import MadhuMita from '../../assets/images/Executives-2020/Madhu.jpeg'
import Dhyey from "../../assets/images/Executives-2020/Dhyey.jpeg"
// import Yashsav from '../../assets/images/Executives/Yashsav_Gupta.jpg'
// import Pratyush from '../../assets/images/Executives/Pratyush_Choudhary.png'
import Tushar from '../../assets/images/Executives-2020/TusharNew.jpeg'
// import Sneh from '../../assets/images/Executives/sneh.png'
import Sanchit from '../../assets/images/tech/sanchit.jpeg'
import Akshat from '../../assets/images/tech/AkshatK.jpg'
import Soni from '../../assets/images/Executives-2020/Soni2.jpeg'
import harshil from '../../assets/images/Executives-2020/zamn.jpeg'
import Paritosh from '../../assets/images/Executives-2020/Pari.jpeg'
import Raghuvir from '../../assets/images/tech/Raghuvir.jpg'
import Rushil from '../../assets/images/tech/Rushil.jpg'
import Ashwin from '../../assets/images/tech/ashwin-pic.jpeg'
import Sambhav from '../../assets/images/Executives-2019/Sambhav.jpeg'
import AkshatO from '../../assets/images/tech/AkshatO.jpg'
import Susho from '../../assets/images/Executives-2019/Susho.jpeg'

export default function Aboutus() {
  const list = [
    {
      id: 1,
      src: Tushar,
      name: 'Tushar Komali Reddy',
      classy: 'position',
      position: 'President',
      email: 'f20201381@hyderabad.bits-pilani.ac.in'
    },
    {
      id: 8,
      src: MadhuMita,
      name: 'Madhumita Phadke',
      classy: 'position',
      position: 'Vice-President',
      email: 'f20200441@hyderabad.bits-pilani.ac.in'
    },
    {
      id: 2,
      src: Dhyey,
      name: 'Dhyey Rajyaguru',
      classy: 'position',
      position: 'Chairman',
      email: 'f20202148@hyderabad.bits-pilani.ac.in'
    },
    {
      id: 4,
      src: Soni,
      name: 'Shreyans Soni',
      classy: 'position',
      position: 'Vice-Chairman',
      email: 'f20202155@hyderabad.bits-pilani.ac.in'
    },
    {
      id: 3,
      src: Noll,
      name: 'Ayush Varshney',
      classy: 'position',
      position: 'Treasurer',
      email: 'f20200000@hyderabad.bits-pilani.ac.in'
    },
    {
      id: 5,
      src: Paritosh,
      name: 'Paritosh Kadam',
      classy: 'position',
      position: 'Technical Head',
      email: 'f20202281@hyderabad.bits-pilani.ac.in'
    },
    {
      id: 6,
      src: harshil,
      name: 'Harshil Kankane',
      classy: 'position',
      position: 'Videography Head',
      email: 'f20191193@hyderabad.bits-pilani.ac.in'
    },
    {
      id: 7,
      src: Noll,
      name: 'Amaan Khan',
      classy: 'position',
      position: 'Design Head',
      email: 'f20202281@hyderabad.bits-pilani.ac.in'
    }
  ]

  const tech = [
    {
      id: 1,
      src: Sanchit,
      name: 'Sanchit Kalra',
      email: 'seccsyboi@gmail.com'
    },
    {
      id: 2,
      src: Akshat,
      name: 'Akshat Khaitan',
      email: 'seccsyboi@gmail.com'
    },
    {
      id: 3,
      src: Raghuvir,
      name: 'Raghuvir Singh',
      email: 'seccsyboi@gmail.com'
    },
    {
      id: 4,
      src: Rushil,
      name: 'Rushil Shrivastava',
      email: 'seccsyboi@gmail.com'
    },
    {
      id: 5,
      src: Ashwin,
      name: 'Ashwin Singh',
      email: 'seccsyboi@gmail.com'
    },
    {
      id: 5,
      src: AkshatO,
      name: 'Akshat Oke',
      email: 'seccsyboi@gmail.com'
    }
  ]
  return (
    <>
      <div className={style.Team}>
        <div className={style.whichTeam}>
          <div className={style.teamheader}>Executives</div>

          <div className={style.teamcards}>
            {list.map((data) => (
              <div className={style.card} key={data.id}>
                <Image src={data.src} height={290} width={290} />
                <div className={style.name}>{data.name}</div>
                <div className={style[`${data.classy}`]}>{data.position}</div>
                <a href={`mailto:${data.email}`} className={style.mail}>
                  {data.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*   <div className={style.Team}>
                <div className={style.whichTeam}>
                    <div className={style.teamheader}>Tech Team</div>
                    
                    <div className={style.teamcards}>
                        {tech.map((data) => (
                        <div className={style.cardTech} key={data.id}>
                            <Image src={data.src} height={290000} width={290000} />
                            <div className={style.nameTech}>{data.name}</div>
                            <div className={style.emailTech}>{data.email}</div>
                        </div>))}
                    </div>
                </div>
            </div>*/}
    </>
  )
}
