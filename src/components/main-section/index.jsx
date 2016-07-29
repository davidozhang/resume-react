const React = require('react');
const cssModules = require('react-css-modules');

const styles = require('./styles.scss');

const GeneralBlock = require('../general-block/index.jsx');
const ProjectsBlock = require('../projects-block/index.jsx');
const ExperienceBlock = require('../experience-block/index.jsx');
const BulletPoint = require('../bullet-point/index.jsx');

const MainSection = (props) => {
    return (
        <div styleName='main-section'>
            <GeneralBlock title='Experience'>
                <ExperienceBlock
                    position='Software Engineering Intern'
                    company='Yahoo!'
                    time='Present'
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
                    <BulletPoint>
                        Initiated and built the desktop experience of a new Yahoo product with a small engineering team; set to launch on August 8th
                    </BulletPoint>
                    <BulletPoint>
                        Implemented new API endpoints to integrate official and user Tumblr content into Yahoo
                    </BulletPoint>
                    <BulletPoint>
                        Optimized inefficient SQL queries and utilized CloudSearch for better performance;
                        Increased slow endpoints' speed by 10x and increased maximum QPS load by 30%
                    </BulletPoint>
                    <BulletPoint>
                        Migrated legacy Polyvore.com homepage to a Node React Environment
                    </BulletPoint>
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
                    <BulletPoint>
                        Developed and launched the Android client with a team of 5 engineers; client has over 100,000 downloads
                    </BulletPoint>
                    <BulletPoint>
                        Implemented automatic and manual video quality selection; greatly reduced
                        video load-time on poor networks
                    </BulletPoint>
                    <BulletPoint>
                        Implemented first-time user experience orientation carousel and pop-up hints
                    </BulletPoint>
                    <BulletPoint>
                        Improved the VoIP quality and optimized video-synchronization across devices
                    </BulletPoint>
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
                    <BulletPoint>
                        Implemented capability to collect and monitor VoIP traffic in real time
                    </BulletPoint>
                    <BulletPoint>
                        Developed basic analytic features - error reporting, data filtering, graphing options
                    </BulletPoint>
                    <BulletPoint>
                        Built a stateless account recovery system by using security hashes to store user information;
                        Allows users to reset passwords without temporary data stores
                    </BulletPoint>
                </ExperienceBlock>
            </GeneralBlock>
            <GeneralBlock title='Projects'>
                <ProjectsBlock
                    title='Angora'
                    time='January 2016'
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
                    time='February 2015'
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
                    time='November 2014'
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
                    time='August 2014'
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