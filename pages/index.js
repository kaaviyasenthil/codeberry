import { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import Router from "next/router";

import { useClerk } from "@clerk/nextjs";
import { ArrowRight } from "react-feather";

import courseList from "./../data/course-list.json";
import Logo from "./../public/images/logo.png";
import { setFontAndSize } from "pdf-lib";

function Home() {
  const { user } = useClerk();

  // useEffect(() => {
  //   if (user) {
  //     Router.push("/courses");
  //   }
  // }, []);

  return (
    <>
      <header className="header">
        <div className="header__text-box">
          <div>
            <h1 className="heading-primary">
              <span className="heading-primary--main">
                <h1>{'{codeberry}'}</h1>
              </span>
              <span style={{ fontSize: '40px', color: '#cca3f5' }} className="tagline-subheading">
                A Beginner's Guide to Tech Interviews
              </span>
            </h1>
            <Link href="/courses">
              <a className="btn-main">
                <span style={{ marginRight: "10px" }}>Get started</span>
                <ArrowRight size={32} />
              </a>
            </Link>
          </div>
        </div>

        <div className="header__img-box">
          <Image
            src={Logo}
            placeholder="blur"
            alt="logo"
            width="240"
            height="280"
          />
        </div>
      </header>

      <section className="section-one">
        <h2 className="heading-secondary">
          Why <span style={{ color: "#cca3f5" }}>codeberry</span> ?
        </h2>
        <div className="section-grid one">
          <div className="card">
            <Image src="/images/youtube.png" alt="" width="100" height="100" />
            <p className="card__text">Approachable Tech Tutorials.</p>
          </div>

          <div className="card">
            <Image src="/images/calendar.png" alt="" width="100" height="100" />
            <p className="card__text">Our Top-Picked Resources.</p>
          </div>

          <div className="card">
            <Image src="/images/trophy.png" alt="" width="100" height="100" />
            <p className="card__text">Track Your Progress</p>
          </div>
          
          <div className="card">
            <Image src="/images/brain.png" alt="" width="100" height="100" />
            <p className="card__text">Take Quizzes As You Go</p>
          </div>
        </div>
      </section>

      <section className="section-two">
        <h2 className="heading-secondary">
          What You'll <span style={{ color: "#cca3f5" }}>Learn</span>
        </h2>
        <div className="section-grid two">
          {courseList.map((course) => {
            return (
              <div className="card" key={course.id}>
                <img
                  src={`/images/${course.image}`}
                  alt={course.image}
                  width="100"
                  height="100"
                />
                <p className="card__text">{course.name}</p>
              </div>
            );
          })}
        </div>
      </section>
     
      <footer className="footer">
        <p>
          Made with{" "}
          <span role="img" aria-label="love" style={{ color: "#ec3944" }}>
            ❤️️
          </span>{" "}
          For{" "}
          <a
            href="https://twitter.com/geekychakri"
            target="_blank"
            rel="noopener noreferrer"
            className="creator"
          >
            FemmeHacks 2024
          </a>
        </p>
      </footer>
    </>
  );
}

export default Home;
