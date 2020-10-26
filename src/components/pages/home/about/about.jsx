import React from 'react';
import yearCalc from '../../../../utils/yearCalc';

import './about.sass';

function About(props) {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="about__title" data-title="About me">
                    About me
                </h2>

                <div className="about__content">
                    <p>
                        My name is <strong>Hatam!</strong> I have been working for more than
                        <strong> {yearCalc(2016)} years</strong> in <strong>front-end development </strong>
                        with commercial projects and more than <strong>{yearCalc(2014)} years</strong> in web development in general. During
                        all this time I managed to work in several web studios and freelance platforms, got a big experience in a team,
                        extensive experience in working with clients, introduce a project from the beginning to the end.
                    </p>
                    <p>
                        In 2019, I graduated from the university with a degree in marketing (I took extra courses in Internet marketing and
                        web design marketing). Now I go on studying for a master's degree in Human Resource management. My goal is to get a
                        certificate confirming my experience.
                    </p>
                    <p>
                        In June 2020, I completed a course on <strong>React Native</strong> and received a{' '}
                        <a
                            href="https://www.udemy.com/certificate/UC-b8b2368f-3d4b-4c7c-87da-bdda3f6d838b/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            certificate
                        </a>{' '}
                        <span role="img" aria-label="">
                            😎
                        </span>
                        . Currently I am practicing in developing mobile applications
                    </p>
                    <p>My technical English is good. I practice speaking, take courses. My language level is elementary.</p>
                    {/* <p>The last work place was web studio “Lained” in the position of “Head of Front-end development. "</p> */}
                    <h4>
                        <span role="img" aria-label="">
                            💪
                        </span>{' '}
                        My Skills:
                    </h4>
                    <ul>
                        <li>More than {yearCalc(2014)} years in the web development area. </li>
                        <li>Good technical English.</li>
                        <li>
                            Extensive experience in creating complex, functional, beautiful and animated UI/UX interfaces and responsive
                            sites.
                        </li>
                        <li>Creating responsive web applications.</li>
                        <li>
                            Development on React / React Native (Mobx, Redux, Hooks, Context, Formik, Transition Group, scrollmonitor). CSS,
                            SASS, inline styles.
                        </li>
                        <li>Material UI</li>
                        <li>Little experience Meteor.js + !React.js + storybook + MongoDB - a site for renting real estate in New York.</li>
                        <li>Good knowledge of TypeScript.</li>
                        <li>
                            Advanced level HTML (HTML5 API, good understanding of semantic tags) / CSS (flexbox, grid, advanced css
                            animations) / JS (JQ, ES6).
                        </li>
                        <li>
                            JS animation, good knowledge of GSAP 2-3.x (Timeline, ScrambleTextPlugin, ScrollToPlugin, SplitText).
                            MagicScroll with GSAP.
                        </li>
                        <li>Great experience in Photoshop/Figma/Adobe XD graphic editors. And also, Zeplin.</li>
                        <li>Experience in working with task managers: Trello ***, Jira *, Bitix24 *.</li>
                        <li>Extensive experience in operating the BEM system (naming and file structure).</li>
                        <li>Extensive experience in using HTML preprocessor (template engine) - PUG and CSS preprocessor - SASS.</li>
                        <li>
                            Compiling and packing standard websites using my Gulp Builder -{' '}
                            <a href="https://github.com/hattamsoyunov/start_dev" terget="_blank" rel="noopener noreferrer">
                                start_dev
                            </a>
                            .
                        </li>
                        <li>Good knowledge of vector graphics, SVG, SVG srites with "use", I work confidently in Adobe Illustrator.</li>
                    </ul>

                    <h4>
                        <span role="img" aria-label="">
                            😎
                        </span>{' '}
                        Why should you work with me? <br />{' '}
                        <span role="img" aria-label="">
                            🛡
                        </span>{' '}
                        I guarantee:
                    </h4>
                    <ul>
                        <li>Fast and professional work.</li>
                        <li>Timely implementation of tasks and projects.</li>
                        <li>Attention to details!</li>
                        <li>Wise perfectionism (I try to achieve the ideal only if it is a priority).</li>
                        <li>
                            Clean code with semantic classes and comments so in the future any other developer can easily understand my
                            code. It's hard for me to leave bad code or mess in the code without fixing it.
                        </li>
                        <li>My policy is “Quality always comes first.”</li>
                        <li>I am ambitious and enjoy new challenges :)</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;
