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
                  position='Software Engineering Intern'
                  company='Microsoft'
                  href='https://www.microsoft.com/en-us/about/default.aspx'
                  time='Fall 2017'
                  location='Redmond, WA'
                  icon='microsoft'
                  techList={[
                        'C#',
                        'MS Cosmos MapReduce',
                    ]}
                >
                    <li>
                        Built the prototype <Highlight>next word prediction</Highlight> for predicting the most probable subsequent words given previous inputs using the N-Gram model
                    </li>
                    <li>
                        Working on integrating the next word prediction into the main <Highlight>Bing</Highlight> search engine's autosuggestion pipeline
                    </li>
                    <li>
                        Working on improving the next word prediction using a <Highlight>Recurrent Neural Network</Highlight> by learning the syntactic and semantic features of natural language
                    </li>
                </ExperienceBlock>
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
                        Worked on and helped launch Vector - the <Highlight>media processing</Highlight> infrastructure for processing, managing, and serving digital media assets
                    </li>
                    <li>
                        Independently designed, built, and released VectorValidation - a distributed <Highlight>end-to-end validation</Highlight> and <Highlight>performance testing</Highlight> framework for media processing
                    </li>
                    <li>
                        VectorValidation generates traffic to the media infrastructure, monitors the pipeline, produces quality and latency metrics, and validates the processed data
                    </li>
                    <li>
                        VectorValidation is used by multiple media teams for performing experiments, collecting key metrics, and monitoring for failures
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
                        Integrated <Highlight>Tumblr</Highlight> with Yahoo! View to provide official and fan posts related to shows
                    </li>
                    <li>
                        Setup the entire backend integration testing infrastructure for Yahoo! View
                    </li>
                </ExperienceBlock>
            </GeneralBlock>
            <GeneralBlock title='Projects'>
                <ProjectsBlock
                  title='LUQL'
                  href='https://luql.io/'
                  time='January 2017 - Present'
                  techList={[
                        'Node.js',
                        'React-Native',
                        'MobX',
                        'Firebase',
                    ]}
                >
                    A platform to help locals create and guide tours for travellers, tourists, and adventurers
                </ProjectsBlock>
                <ProjectsBlock
                  title='MelonWatch'
                  href='https://github.com/zuqini/MelonWatch'
                  time='August 2017'
                  techList={[
                        'C++',
                        'OpenGL',
                        'OpenAL',
                    ]}
                >
                    An OpenGL FPS; built the entire game engine from scratch featuring dynamic shadow mapping, particle systems, and physics engine
                </ProjectsBlock>
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
                    A platform where users explore various hairstyles and review local hairstylists
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
                    A physics simulation sandbox for building star systems with dynamic lighting effects
                </ProjectsBlock>
            </GeneralBlock>
        </div>
    );
};

MainSection.displayName = 'MainSection';
MainSection.propTypes = {
};

module.exports = cssModules(MainSection, styles);