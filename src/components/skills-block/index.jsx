const React = require('react');
const cssModules = require('react-css-modules');

const styles = require('./styles.scss');

const SkillsBlock = (props) => {
    const { title, children } = props;
    return (
        <div styleName='skills-block'>
            <p styleName='title' className='med-text'>{title}</p>
            <div styleName='content'>{children}</div>
        </div>
    );
};

SkillsBlock.displayName = 'SkillsBlock';
SkillsBlock.propTypes = {
    title: React.PropTypes.string,
    children: React.PropTypes.arrayOf(React.PropTypes.node),
};

module.exports = cssModules(SkillsBlock, styles);