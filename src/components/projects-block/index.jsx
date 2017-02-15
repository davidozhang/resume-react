const React = require('react');
const cssModules = require('react-css-modules');

const styles = require('./styles.scss');

const ProjectsBlock = (props) => {
    const {title, href, time, techList, children } = props;
    return (
        <a href={href} styleName='projects-block'>
            <div styleName='header' className='clear-fix'>
                <p styleName='title' className='med-text'>{title}</p>
                <span styleName='separator'>|</span>
                <p styleName='tech' className='med-text'>{techList.join(', ')}</p>
                <p styleName='time' className='med-text'>{time}</p>
            </div>
            <div styleName='content'>
                {children}
            </div>
        </a>
    );
};

ProjectsBlock.displayName = 'ProjectsBlock';
ProjectsBlock.propTypes = {
    time: React.PropTypes.string.isRequired,
    href: React.PropTypes.string.isRequired,
    techList: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    children: React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
};

module.exports = cssModules(ProjectsBlock, styles);