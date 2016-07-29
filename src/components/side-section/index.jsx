const React = require('react');
const cssModules = require('react-css-modules');

const styles = require('./styles.scss');

const EducationBlock = require('../education-block/index.jsx');
const GeneralBlock = require('../general-block/index.jsx');
const SkillsBlock = require('../skills-block/index.jsx');
const BulletPoint = require('../bullet-point/index.jsx');

const SideSection = (props) => {
    return (
        <div styleName='side-section'>
            <GeneralBlock title='Skills'>
                <SkillsBlock title='Languages'>
                    <BulletPoint>JavaScript</BulletPoint>
                    <BulletPoint>HTML/CSS</BulletPoint>
                    <BulletPoint>Java</BulletPoint>
                    <BulletPoint>Python</BulletPoint>
                    <BulletPoint>C/C++</BulletPoint>
                    <BulletPoint>BASH</BulletPoint>
                    <BulletPoint>Perl</BulletPoint>
                </SkillsBlock>
                <SkillsBlock title='Frameworks'>
                    <BulletPoint>Node.js</BulletPoint>
                    <BulletPoint>React</BulletPoint>
                    <BulletPoint>Angular</BulletPoint>
                    <BulletPoint>Express</BulletPoint>
                    <BulletPoint>Mocha</BulletPoint>
                    <BulletPoint>JQuery</BulletPoint>
                    <BulletPoint>Jade/Pug</BulletPoint>
                    <BulletPoint>Less/Sass</BulletPoint>
                    <BulletPoint>Java Spring</BulletPoint>
                    <BulletPoint>Native Android</BulletPoint>
                </SkillsBlock>
                <SkillsBlock title='Databases'>
                    <BulletPoint>MySQL</BulletPoint>
                    <BulletPoint>PostgreSQL</BulletPoint>
                    <BulletPoint>MongoDB</BulletPoint>
                </SkillsBlock>
                <SkillsBlock title='Tools'>
                    <BulletPoint>Git</BulletPoint>
                    <BulletPoint>SVN</BulletPoint>
                    <BulletPoint>Maven</BulletPoint>
                    <BulletPoint>Grunt</BulletPoint>
                    <BulletPoint>Webpack</BulletPoint>
                </SkillsBlock>
            </GeneralBlock>
            <GeneralBlock title='Education'>
                <EducationBlock />
            </GeneralBlock>
            <GeneralBlock title='Interests'>
                <BulletPoint>Build apps</BulletPoint>
                <BulletPoint>Make music</BulletPoint>
                <BulletPoint>Catch pokemon</BulletPoint>
                <BulletPoint>Travel the world</BulletPoint>
            </GeneralBlock>
        </div>
    );
};

SideSection.displayName = 'SideSection';
SideSection.propTypes = {
};

module.exports = cssModules(SideSection, styles);