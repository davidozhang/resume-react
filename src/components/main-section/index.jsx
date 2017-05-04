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
                        'MySQL',
                        'Ambry',
                    ]}
                >
                    <li>
                        Worked on and helped launch Vector - the <Highlight>media processing</Highlight> infrastructure for uploading, processing, managing, and serving images and videos
                    </li>
                    <li>
                        Independently designed, built, and released Vector-Validation - a distributed <Highlight>E2E validation</Highlight> and <Highlight>performance testing</Highlight> framework for the media infrastructure
                    </li>
                    <li>
                        Vector-Validation generates traffic to the media infrastructure, monitors the pipeline, produces quality and latency metrics, and validates the processed media files
                    </li>
                    <li>
                        Vector-Validation is currently in use by multiple media teams for performing experiments, collecting key metrics, and monitoring for failures
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
                    <li>
                        Setup the entire backend integration testing infrastructure for Yahoo! View
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
                        Implemented the capability to fetch and create nearby local groups for watching synchronized videos; implemented automatic and manual video quality selection
                    </li>
                    <li>
                        Worked closely with the designer to build an <Highlight>interactive</Highlight> orientation carousel for improving the user onboarding experience
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