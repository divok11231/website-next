import eventdata from "../components/eventsdata";
import styles from "../styles/GR/Gr.module.css";
import QA from "../components/gr/QA";
import Carousel from "../components/esummit/carousel";
import Link from "next/dist/client/link";
import Head from "next/head";

export const getStaticPaths = () => {
  const paths = eventdata.map((eventname) => {
    return {
      params: { events: eventname.event },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const eventname = context.params.events;
  var data = eventdata.filter(function (e) {
    return e.event == eventname;
  });
  return {
    props: { event: data },
  };
};

function Event({ event }) {
  const faq_list = [
    {
      id: 1,
      classy: "one",
      questionid: "qone",
      question: "What is Launchpad?",
      answer:
        "Launchpad is the Annual Entrepreneurship Summit organized by the Entrepreneurship Cell, BITS Pilani Hyderabad Campus. A grand confluence of keynote speakers, founders, entrepreneurship enthusiasts, investors, VCs, and influencers to expose multiple elements of the start-up ecosystem to the attendees will provide an excellent platform for learning and growing while networking with a stimulating start-up community.",
    },
    {
      id: 10,
      classy: "one",
      questionid: "qone",
      question:
        "What are the prizes for the winners of Ground Reality and Beyond Profits?",
      answer:
        "The winners get a chance to pitch their ideas to renowned venture capitalists and angel investors. With more than 400 teams and 20 mentors, Ground Reality offers prizes worth more than INR 2,50,000/-and Beyond Profits offers prize money of more than Rs. 1,50,000/- to participants for accelerating their ideas towards execution. The events also provide winners with legal services, mentorship vouchers, cloud space, acceleration program, and incubation space.",
    },

    {
      id: 3,
      classy: "one",
      questionid: "qone",
      question: "What is the difference b/w Ground reality and Beyond Profits?",
      answer:
        "Ground Reality is our Annual B-plan competition aimed at promoting innovative start-ups in every domain. Beyond Profits is our annual social B-plan competition aimed at promoting social entrepreneurship mainly. While Beyond Profits primarily focuses on startups for the non-profit generation agenda, Ground Round is for a general category.",
    },
    {
      id: 2,
      classy: "two",
      questionid: "qtwo",
      question: "What is a Bussiness Plan competition?",
      answer:
        "A business plan is a road map that provides directions so a business can plan its future and helps in avoiding hurdles on the road to success. Business plan competition is an opportunity for startups across the country to showcase their ideas to an esteemed panel of judges and investors.",
    },

    {
      id: 8,
      classy: "two",
      questionid: "qtwo",
      question: "What are the chances of us getting funded by investors?",
      answer:
        "E-Summit being the E-Cell’s flagship event is held annually to bring together the academic community, venture capitalists, new-age entrepreneurs, and all those passionate about entrepreneurship. Hence we have a plethora of opportunities to kick start your startup and all your dreams.",
    },

    {
      id: 9,
      classy: "two",
      questionid: "qtwo",
      question: "Are there any perks for the finalists",
      answer:
        "The finalists of both the competitions will get a chance to witness the talks by some of the greatest minds in the field of entrepreneurship and innovation..",
    },
    {
      id: 4,
      classy: "three",
      questionid: "qthree",
      question: "Can I participate in both competitions?",
      answer:
        "No, you cannot participate in both Ground Reality and Beyond Profits.",
    },
    {
      id: 5,
      classy: "three",
      questionid: "qthree",
      question: "How can I register for the competitions?",
      answer: "You can register free of cost on our website.",
    },
    {
      id: 6,
      classy: "three",
      questionid: "qthree",
      question: "When is the last date?",
      answer:
        "The last date for registration of both the competitions is 20th February 2021.",
    },
    {
      id: 7,
      classy: "four",
      questionid: "qfour",
      question: "Will we be provided mentors?",
      answer:
        "Teams who make it past the first round will be provided with mentor-cum-judges who will guide you in developing your startup.",
    },

    {
      id: 11,
      classy: "four",
      questionid: "qfour",
      question: "Where can I know more about the competitions?",
      answer:
        "You can get more information on all our events on the website. You can also follow our social media pages for regular updates.",
    },
  ];

  return (
    <>
      <Head>
        <title>{event[0].heading} | E-Cell BPHC</title>
      </Head>
      <div className={styles.outer}>
        <div className={styles.header}>
          <div className={styles.event}>
            <div className={styles.name}>{event[0].heading}</div>
            <div>
              <Link href="/events">
                <button type="button" className={styles.button}>Register</button>
              </Link>
            </div>
          </div>
          <div className={styles.carousel}>
            <Carousel slides={event[0].carouselImages} />
          </div>
        </div>
        <div className={styles.details}>{event[0].caption}</div>
        <div className={styles.container_fluid}>
          <div className={styles.faq}>
            {faq_list.map((data) => (
              <QA key={data.id} {...data} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;
