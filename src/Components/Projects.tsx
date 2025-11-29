import eventParadise from "../../public/ProjectsImages/Event_Paradise.png";
import newsArticle from "../../public/ProjectsImages/New Article.png";
import marketPlace from "../../public/ProjectsImages/MarketPlace.png";
import rps from "../../public/ProjectsImages/RPS.png";
import quizGame from "../../public/ProjectsImages/quiz Game.png";
export const Projects = () => {
  return (
    <>
      <section className="work_section" id="work">
        <div className="container">
          <h3>Projects</h3>

          <div className="grid_container">
            <div className="line_grid">
              <div className="triangle"></div>
            </div>
            <div className="description_grid horiseon_grid_des">
              <h4>Event Paradise</h4>
              <p>React/TypeScript/Node.js/Express/PostgreSQL/Stripe/Supabase</p>
            </div>
            <div className="card horiseon_card">
              <div className="grid_card">
                <a href="https://eventparadise.netlify.app/" target="_blank">
                  <img
                    src={eventParadise}
                    alt="Event Paradise Website Image Thumbnail"
                  />
                </a>
              </div>
              <div className="card-body">
                <p className="card-text">
                  A full-stack events platform where users can create, browse,
                  and register for local events. It features secure JWT
                  authentication, role-based access, Stripe payments, automated
                  email confirmations, and Google Calendar integration. The
                  responsive frontend interacts with a REST API built using
                  Node.js, Express, and PostgreSQL, delivering a smooth
                  event-management experience from creation to registration.
                </p>
              </div>
            </div>

            <div className="description_grid ameren_grid_des">
              <h4>News Artilce</h4>
              <p>React/JavaScript/Node.js/Express/PostgreSQL/Axios/Jest</p>
            </div>
            <div className="card ameren_card">
              <div className="grid_card">
                <a href="https://news-artilce.netlify.app/" target="_blank">
                  <img
                    src={newsArticle}
                    alt="News Article Website Image Thumbnail"
                  />
                </a>
              </div>
              <div className="card-body">
                <p className="card-text">
                  A full-stack news platform inspired by Reddit, where users can
                  browse, filter, vote on, and comment on articles across
                  multiple topics. It includes seamless pagination, a fully
                  responsive interface, and a REST API built with Node.js,
                  Express, and PostgreSQL using strict TDD with Jest. The
                  frontend consumes these APIs via Axios, showcasing strong
                  full-stack development, API design, database modelling, and
                  clean UI/UX execution.
                </p>
              </div>
            </div>

            <div className="description_grid elab_grid_des">
              <h4>Market Place</h4>
              <p>React/JavaScript/Node.js/Express/Axios</p>
            </div>
            <div className="card elab_card">
              <div className="grid_card">
                <a href="https://sk-marketplace.netlify.app/" target="_blank">
                  <img
                    src={marketPlace}
                    alt="Market Place Website Image Thumbnail"
                  />
                </a>
              </div>
              <div className="card-body">
                <p className="card-text">
                  A responsive e-commerce web app where users can browse
                  products, filter by category, and manage their cart through
                  smooth, interactive UI features. The frontend integrates
                  existing REST APIs using Axios for dynamic data fetching and
                  real-time updates. It includes secure user authentication for
                  sign-up/login, enabling personalised cart actions across
                  sessions. This project highlights strong front-end
                  development, API integration, user authentication, and clean
                  mobile-friendly interface design.
                </p>
              </div>
            </div>

            <div className="description_grid dental_grid_des">
              <h4>Rock Paper Scissors</h4>
              <p>HTML/CSS/Bootstrap/JavaScript/J-Query</p>
            </div>
            <div className="card dental_card">
              <div className="grid_card">
                <a href="https://rps007.netlify.app/" target="_blank">
                  <img
                    src={rps}
                    alt="Rock Paper Scissors Website Image Thumbnail"
                  />
                </a>
              </div>
              <div className="card-body">
                <p className="card-text">
                  An interactive Rock–Paper–Scissors game where users choose the
                  number of rounds and play against a computer opponent with
                  real-time score tracking and instant feedback. The project
                  showcases dynamic game logic, effective state management, and
                  a responsive, user-friendly interface. Built with JavaScript
                  for interactivity and DOM updates, along with HTML and CSS for
                  layout and styling, it highlights strong problem-solving
                  skills and the ability to create smooth, engaging gameplay.
                </p>
              </div>
            </div>

            <div className="description_grid socreLoad_grid_des">
              <h4>Quiz Game</h4>
              <p>HTML/CSS/Bootstrap/JavaScript/J-Query</p>
            </div>
            <div className="card socreLoad_card ">
              <div className="grid_card">
                <a href="https://codequiz1.netlify.app/" target="_blank">
                  <img src={quizGame} alt="Quiz Game Website Image Thumbnail" />
                </a>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Quiz Game is an interactive web app that tests coding
                  knowledge through timed multiple-choice questions. Users
                  receive real-time feedback, time penalties for wrong answers,
                  and can save high scores. Built with JavaScript, HTML, and
                  CSS, this project highlights my skills in dynamic UI, game
                  logic, and responsive design, delivering an engaging and
                  educational experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
