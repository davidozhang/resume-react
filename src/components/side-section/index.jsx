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
                    <li>HTML / CSS</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>C / C++</li>
                    <li>Bash</li>
                    <li>Perl</li>
                </SkillsBlock>
                <SkillsBlock title='Frameworks'>
                    <li>Node.js</li>
                    <li>React / React Native</li>
                    <li>Angular</li>
                    <li>Express</li>
                    <li>Mocha</li>
                    <li>Fluxible</li>
                    <li>JQuery</li>
                    <li>Jade / Pug</li>
                    <li>Less / Sass</li>
                    <li>Android SDK</li>
                    <li>Java Spring Framework</li>
                </SkillsBlock>
                <SkillsBlock title='Databases'>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                </SkillsBlock>
                <SkillsBlock title='Tools'>
                    <li>Git</li>
                    <li>SVN</li>
                    <li>Kafka</li>
                    <li>Maven</li>
                    <li>Grunt</li>
                    <li>Webpack</li>
                    <li>Splunk</li>
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