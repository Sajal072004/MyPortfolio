import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [

  {
    id: 1,
    title: "Finance Mate",
    img: "./FinanceMate.png",
    desc: "FinanceMate is a financial management tool that helps users track budgets, expenses, and overall financial health. Developed using the MERN stack, the platform offers an intuitive dashboard with interactive charts and tables. Users can manage budgets, categorize expenses, and view detailed spending reports. With secure authentication and a user-friendly interface, FinanceMate simplifies financial planning and promotes better money management.",
    link: "https://financemate.onrender.com",
  },

  {
    id: 2,
    title: "Tomato",
    img: "./Tomato.png",
    desc: "Tomato is a food delivery app that offers a wide range of food options for users to order from. Developed using the MERN stack, the platform features integrated payment options for a seamless checkout experience. Users can view their order history in the 'Orders' section, while admins have access to a comprehensive admin panel to manage and track all orders. With a user-friendly interface and secure payment integration, Tomato provides a convenient and efficient food ordering experience.",
    link: "https://food-delivery-frontend-no0l.onrender.com",
  },

  {
    id: 3,
    title: "Crypto-Tracker",
    img: "./crypto.png",
    desc: "I have developed a comprehensive website for tracking cryptocurrency trends. This platform provides detailed information on all bitcoins available in the market, featuring interactive graphs that display price movements, total trading volume, and market capitalization. Users can monitor market changes over various timeframes,enabling them to make informed investment decisions based on historical data and trends.",
    link: "https://cryptotracker-lovat.vercel.app/",
  },

  {
    id: 4,
    title: "Movie Stream Web",
    img: "./movieStream.png",
    desc: "Created a comprehensive movie streaming website featuring an extensive database of movies and TV shows, both recent and classic, complete with popularity rankings and ratings. The site also provides detailed information on actors and actresses, enhancing the user experience with rich content and seamless navigation.",
    link: "https://movieestream.netlify.app/",
  },

  {
    id: 5,
    title: "Eye-Spy",
    img: "./eyespy-project.png",
    desc: "Our project empowers the visually impaired by utilizing ML models to analyze real-time environmental data from a camera attached to their attire. Simultaneously, caregivers can remotely monitor the live feed on a website.",
    link: "https://sajal072004.github.io/eyesspy/",
  },

  {
    id: 6,
    title: "Weather App",
    img: "./weather.png",
    desc: "I have developed a fully responsive weather app that provides weather updates and a 5-day forecast. It also includes a feature that uses your current location, similar to Google Maps, to provide accurate weather information for your exact location.",
    link: "https://sajal072004.github.io/Weather-App/",
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-190, 190]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank"><button>See Demo</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;