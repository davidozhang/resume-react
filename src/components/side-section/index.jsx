const React = require('react');
const cssModules = require('react-css-modules');

const styles = require('./styles.scss');

const EducationBlock = require('../education-block/index.jsx');
const GeneralBlock = require('../general-block/index.jsx');
const SkillsBlock = require('../skills-block/index.jsx');
const InterestsBlock = require('../interests-block/index.jsx');

const SideSection = (props) => {
    return (
        <div styleName='side-section'>
            <GeneralBlock title='Skills'>
                <SkillsBlock title='Languages'>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>C#</li>
                    <li>C / C++</li>
                    <li>Python</li>
                    <li>HTML / CSS</li>
                    <li>Bash</li>
                    <li>ARM Assembly</li>
                </SkillsBlock>
                <SkillsBlock title='Frameworks'>
                    <li>TensorFlow</li>
                    <li>React / React Native</li>
                    <li>Angular</li>
                    <li>Express</li>
                    <li>MobX</li>
                    <li>Less / Sass</li>
                    <li>OpenGL</li>
                    <li>Android SDK</li>
                    <li>Java Spring Framework</li>
                </SkillsBlock>
                <SkillsBlock title='Databases'>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                </SkillsBlock>
                <SkillsBlock title='Tools'>
                    <li>Spark</li>
                    <li>Hadoop MapReduce</li>
                    <li>Kafka</li>
                    <li>Node.js</li>
                    <li>Firebase</li>
                    <li>Git</li>
                    <li>Maven</li>
                    <li>Webpack</li>
                </SkillsBlock>
            </GeneralBlock>
            <GeneralBlock title='Education'>
                <EducationBlock />
            </GeneralBlock>
            <GeneralBlock title='Interests'>
                <InterestsBlock>
                    <li>Build apps</li>
                    <li>Make music</li>
                    <li>Catch pokémon</li>
                </InterestsBlock>
            </GeneralBlock>
        </div>
    );
};

SideSection.displayName = 'SideSection';
SideSection.propTypes = {
};

module.exports = cssModules(SideSection, styles);