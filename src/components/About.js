import React from 'react';
import madisonPic from '../img/madison1.jpg';
import TeamIcon from './TeamIcon';

const About = () => {
  return (
    <article className="page__inside">
      <section className="section__main">
        <img className="section__picture" src={madisonPic} alt="madison, wisconsin"/>
      </section>
      <section className="section__main">
      <TeamIcon classNameParam="about__card" title="About CoinFish" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      </section>
      <section className="section__main">
        <h2>Meet The Team</h2>
        <div className="team__container">
          <TeamIcon classNameParam="team__card" title="Anthony C." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"/>
          <TeamIcon classNameParam="team__card" title="Tenzin R." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"/>
          <TeamIcon classNameParam="team__card" title="Thomas K." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"/>
          <TeamIcon classNameParam="team__card" title="Jonathan K." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"/>
          <TeamIcon classNameParam="team__card" title="Hentai M." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"/>
        </div>
      </section>
    </article>
  )
}

export default About;
