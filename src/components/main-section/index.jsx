const React = require('react');
const cssModules = require('react-css-modules');

const styles = require('./styles.scss');

const GeneralBlock = require('../general-block/index.jsx');
const ProjectsBlock = require('../projects-block/index.jsx');
const ExperienceBlock = require('../experience-block/index.jsx');
const Highlight = require('../highlight/index.jsx');
const Italic = require('../italic/index.jsx');

const MainSection = (props) => {
    const vReqProj = (
        <ProjectsBlock
            title='VReq'
            time='November 2014'
            techList={[
                        'D3.js',
                        'JQuery',
                        'Waterloo Open Data API',
                    ]}
        >
            A <Highlight>D3.js</Highlight> representation of all course pre-requisites at the University of Waterloo
        </ProjectsBlock>
    );
    return (
        <div styleName='main-section'>
            <GeneralBlock title='Experience'>
                <ExperienceBlock
                    position='Data Infrastructure Intern'
                    company='LinkedIn'
                    href='https://press.linkedin.com/about-linkedin'
                    time='Winter 2017'
                    location='Sunnyvale, CA'
                    icon='linkedin-colored'
                    techList={[
                        'Java 8',
                        'Kafka',
                        'Espresso DB',
                        'Ambry Object Store',
                    ]}
                >
                    <li>
                        Worked on Vector - the <Highlight>distributed media processing</Highlight> infrastructure for uploading, processing, managing, and serving multimedia content
                    </li>
                    <li>
                        Designed, built, and internally released a distributed E2E <Highlight>pipeline validation</Highlight> and <Highlight>performance testing</Highlight> framework for media processing using Kafka and Ambry
                    </li>
                    <li>
                        Framework generates traffic, analyzes processed media data against the input media data, produces real-time metrics, and validates the pipeline
                    </li>
                </ExperienceBlock>
                <ExperienceBlock
                    position='Software Engineering Intern'
                    company='Yahoo!'
                    href='https://about.yahoo.com/'
                    time='Spring 2016'
                    location='Sunnyvale, CA'
                    icon='yahoo'
                    techList={[
                        'Node.js',
                        'React',
                        'Fluxible',
                        'MySQL',
                        'ES6',
                        'Perl',
                        'AWS',
                    ]}
                >
                    <li>
                        Created and launched <a href='https://view.yahoo.com'><Highlight>Yahoo! View</Highlight> <Italic>(view.yahoo.com)</Italic></a> within 7 weeks as part of the web team; implemented various core business logic and UI components
                    </li>
                    <li>
                        Optimized API endpoints and integrated AWS CloudSearch for improved performance;
                        reduced avg response time to under <Highlight>200ms</Highlight> and increased max QPS capacity by <Highlight>30x</Highlight>
                    </li>
                    <li>
                        Integrated <Highlight>Tumblr</Highlight> with Yahoo! View to provide official and fan content related to shows
                    </li>
                </ExperienceBlock>

                <ExperienceBlock
                    position='Mobile Developer'
                    company='Rave Media (WeMesh)'
                    href='http://rave.io/'
                    time='Fall 2015'
                    location='Waterloo, ON'
                    icon='rave'
                    techList={[
                        'Android SDK',
                        'Retrofit',
                        'ExoPlayer',
                    ]}
                >
                    <li>
                        Developed and launched the Android client with a team of 5 developers; over <Highlight>100,000</Highlight> installs on Google Play Store
                    </li>
                    <li>
                        Implemented automatic and manual video quality selection and improved user onboarding experience by implementing an interactive orientation carousel
                    </li>
                </ExperienceBlock>

                <ExperienceBlock
                    position='Web Developer'
                    company='Martello Technologies'
                    href='http://martellotech.com/'
                    time='Winter 2015'
                    location='Ottawa, ON'
                    icon='martello'
                    techList={[
                        'Java Spring Framework',
                        'Hibernate ORM',
                        'PostgreSQL',
                        'JSP',
                    ]}
                >
                    <li>
                        Implemented the capability to <Highlight>monitor</Highlight> and <Highlight>report</Highlight> SIP-based VoIP traffic; detects performance and availability issues in real time
                    </li>
                    <li>
                        Designed and built a <Highlight>stateless</Highlight> account recovery system using HMAC
                    </li>
                </ExperienceBlock>
                <ExperienceBlock
                    position='Design Engineer'
                    company='Nakina Systems'
                    href='https://nakinasystems.com/'
                    time='Spring 2014'
                    location='Ottawa, ON'
                    icon='nakina'
                    techList={[
                        'J2EE',
                        'Python',
                        'Hibernate ORM',
                        'Oracle DB',
                    ]}
                >
                    <li>
                        Delivered a SOAP-based web service for managing groups and users
                    </li>
                    <li>
                        Built a <Highlight>customizable</Highlight> password policy system for pseudo-random password generation and strength validation
                    </li>
                </ExperienceBlock>
            </GeneralBlock>
            <GeneralBlock title='Projects'>
                <ProjectsBlock
                    title='Angora'
                    href='https://github.com/jasonf7/Angora'
                    time='January 2016'
                    techList={[
                        'Node.js',
                        'Angular',
                        'MongoDB',
                        'Jade/Pug',
                        'Less',
                    ]}
                >
                    An online platform to help users explore hairstyles and review local hairstylists
                </ProjectsBlock>
                <ProjectsBlock
                    title='Terre'
                    href='https://github.com/zuqini/Terre'
                    time='February 2015'
                    techList={[
                        'C++',
                        'Cocos2d-X',
                    ]}
                >
                    A cross-platform physics simulation of star systems with dynamic lighting effects
                </ProjectsBlock>
                <ProjectsBlock
                    title='Simple.Click.Search.'
                    href='https://github.com/zuqini/Simple.Click.Search.'
                    time='August 2014'
                    techList={[
                        'Chrome Platform API',
                    ]}
                >
                    A Chrome extension that allows users to search plain text with a simple click or highlight
                </ProjectsBlock>
            </GeneralBlock>
        </div>
    );
};

MainSection.displayName = 'MainSection';
MainSection.propTypes = {
};

module.exports = cssModules(MainSection, styles);