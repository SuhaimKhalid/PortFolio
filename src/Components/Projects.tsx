import { Slide } from "react-awesome-reveal";
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
          <Slide>
            <div className="grid_container">
              <div className="line_grid">
                <div className="triangle"></div>
              </div>
              <div className="description_grid horiseon_grid_des">
                <h4>Event Paradise</h4>
                <p>
                  React/TypeScript/Node.js/Express/PostgreSQL/Stripe/Supabase
                </p>
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
                    A full-stack web application that enables users to create,
                    browse, and register for local events. The platform includes
                    secure JWT authentication, user and staff roles, and a
                    complete event-management workflow. Key features include
                    event creation and editing, attendee registration,
                    Stripe-powered payments for paid events, automated email
                    confirmations, and Google Calendar integration. The front
                    end is fully responsive with dynamic data fetching, while
                    the backend exposes a complete REST API built with Node.js,
                    Express, and PostgreSQL. Developed with a strong focus on
                    clean architecture, real-time updates, and reliable
                    end-to-end functionality.
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
                    A full-stack news platform inspired by Reddit that allows
                    users to browse, filter, and read articles across a range of
                    topics. The application features interactive tools such as
                    article voting, user commenting, topic-based filtering, and
                    seamless pagination for smooth navigation. The backend is
                    built with Node.js, Express, and PostgreSQL using RESTful
                    APIs, all developed through a strict test-driven approach
                    with Jest to ensure reliability and maintainability. The
                    frontend integrates these APIs via Axios and delivers a
                    fully responsive interface optimised for both mobile and
                    desktop. This project highlights strong full-stack
                    development skills, API design, database modelling, and an
                    emphasis on clean UI/UX and robust functionality.
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
                    A responsive e-commerce web application that enables users
                    to browse products, filter items by category, and manage
                    their cart with smooth, intuitive interactions. The frontend
                    consumes existing API endpoints and uses Axios for dynamic
                    data fetching and real-time updates across the UI. The app
                    includes user authentication features such as secure sign-up
                    and login, allowing personalised actions like adding items
                    to the cart and viewing selections across sessions. This
                    project demonstrates strong skills in building interactive
                    front-end experiences, integrating RESTful APIs, handling
                    user authentication, and creating a clean, mobile-friendly
                    shopping interface.
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
                    This project is an interactive Rock–Paper–Scissors game web
                    application that allows users to select the number of rounds
                    and play against a computer-generated opponent. The app
                    tracks scores in real time, updates the rounds played, and
                    provides immediate feedback on each game choice. It
                    demonstrates my ability to implement dynamic game logic,
                    manage state effectively, and create a responsive,
                    user-friendly interface. Through this project, I showcased
                    proficiency in JavaScript for handling interactivity and DOM
                    updates, HTML and CSS for structuring and styling the game
                    interface, and logical problem-solving skills to create a
                    smooth, engaging gameplay experience.
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
                    <img
                      src={quizGame}
                      alt="Quiz Game Website Image Thumbnail"
                    />
                  </a>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Quiz Game is an interactive web app that tests coding
                    knowledge through timed multiple-choice questions. Users
                    receive real-time feedback, time penalties for wrong
                    answers, and can save high scores. Built with JavaScript,
                    HTML, and CSS, this project highlights my skills in dynamic
                    UI, game logic, and responsive design, delivering an
                    engaging and educational experience.
                  </p>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </section>
    </>
  );
};
