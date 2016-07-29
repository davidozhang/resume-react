const React = require('react');
const cssModules = require('react-css-modules');

const styles = require('./styles.scss');

const GeneralBlock = require('../general-block/index.jsx');
const ProjectsBlock = require('../projects-block/index.jsx');
const ExperienceBlock = require('../experience-block/index.jsx');
const ExperienceBulletPoint = require('../experience-block/bullet-point.jsx');

const MainSection = (props) => {
    return (
        <div styleName='main-section'>
            <GeneralBlock title='Experience'>
                <ExperienceBlock
                    position='Software Engineering Intern'
                    company='Yahoo!'
                    time='Spring 2016'
                    location='Sunnyvale, CA'
                    icon='yahoo'
                    techList={[
                        'NodeJS',
                        'ReactJS',
                        'Fluxible',
                        'MySQL',
                        'AWS',
                        'ES6',
                        'Perl',
                    ]}
                >
                    <ExperienceBulletPoint>
                        Initiated and built the desktop experience of a new Yahoo product with a small engineering team; set to launch on August 8th
                    </ExperienceBulletPoint>
                    <ExperienceBulletPoint>
                        Implemented new API endpoints to integrate official and user Tumblr content into Yahoo
                    </ExperienceBulletPoint>
                    <ExperienceBulletPoint>
                        Optimized inefficient SQL queries and utilized CloudSearch for better performance;
                        Increased slow endpoints' speed by 10x and increased maximum QPS load by 30%
                    </ExperienceBulletPoint>
                    <ExperienceBulletPoint>
                        Migrated legacy Polyvore.com homepage to a Node React Environment
                    </ExperienceBulletPoint>
                </ExperienceBlock>

                <ExperienceBlock
                    position='Mobile Developer'
                    company='WeMesh'
                    time='Fall 2015'
                    location='Waterloo, ON'
                    icon='wemesh'
                    techList={[
                        'Native Android',
                        'Retrofit',
                        'ExoPlayer',
                    ]}
                >
                    <ExperienceBulletPoint>
                        Developed and launched the Android client with a team of 5 engineers; client has over 100,000 downloads
                    </ExperienceBulletPoint>
                    <ExperienceBulletPoint>
                        Implemented automatic and manual video quality selection; greatly reduced
                        video load-time on poor networks
                    </ExperienceBulletPoint>
                    <ExperienceBulletPoint>
                        Implemented first-time user experience orientation carousel and pop-up hints
                    </ExperienceBulletPoint>
                    <ExperienceBulletPoint>
                        Improved the VoIP quality and optimized video-synchronization across devices
                    </ExperienceBulletPoint>
                </ExperienceBlock>

                <ExperienceBlock
                    position='Java Intermediate Developer'
                    company='Martello Technologies'
                    time='Winter 2015'
                    location='Ottawa, ON'
                    icon='martello'
                    techList={[
                        'Java Spring Framework',
                        'Hibernate ORM',
                        'PostgreSQL',
                    ]}
                >
                    <ExperienceBulletPoint>
                        Implemented capability to collect and monitor VoIP traffic in real time
                    </ExperienceBulletPoint>
                    <ExperienceBulletPoint>
                        Developed basic analytic features - error reporting, data filtering, graphing options
                    </ExperienceBulletPoint>
                    <ExperienceBulletPoint>
                        Built a stateless account recovery system by using security hashes to store user information;
                        Allows users to reset passwords without temporary data stores
                    </ExperienceBulletPoint>
                </ExperienceBlock>
            </GeneralBlock>
            <GeneralBlock title='Projects'>
                <ProjectsBlock
                    title='Angora'
                    time='Jan. 2016'
                    techList={[
                        'Node.js',
                        'AngularJS',
                        'MongoDB',
                        'jade/pug',
                        'LESS',
                    ]}
                >
                    An online platform to help users explore/share hairstyles and locate/review
                    hairstylists in their area
                </ProjectsBlock>
                <ProjectsBlock
                    title='Terre'
                    time='Feb. 2015'
                    techList={[
                        'C++',
                        'Cocos2d-X',
                    ]}
                >
                    A cross-platform physics simulation of star systems with realistic gravitational pull
                    and dynamic lighting effects
                </ProjectsBlock>
                <ProjectsBlock
                    title='VReq'
                    time='Nov. 2014'
                    techList={[
                        'D3.js',
                        'JQuery',
                        'Waterloo Open Data API',
                    ]}
                >
                    A D3.js representation of all course pre-requisites at the University of Waterloo
                </ProjectsBlock>
                <ProjectsBlock
                    title='Simple.Click.Search'
                    time='Aug. 2014'
                    techList={[
                        'Chrome Platform API',
                    ]}
                >
                    A Chrome Extension that allows users to search with a simple click or highlight
                </ProjectsBlock>
            </GeneralBlock>
        </div>
    );
};

MainSection.displayName = 'MainSection';
MainSection.propTypes = {
};

module.exports = cssModules(MainSection, styles);