const React = require('react');
const cssModules = require('react-css-modules');

const styles = require('./styles.scss');

const ProjectsBlock = (props) => {
    const {title, time, techList, children } = props;
    return (
        <div styleName='projects-block'>
            <div styleName='header' className='clear-fix'>
                <p styleName='title' className='bold-text'>{title}</p>
                <p styleName='time' className='med-text'>{time}</p>
            </div>
            <p styleName='tech' className='med-text'>{techList.join(', ')}</p>
            <div styleName='content'>
                {children}
            </div>
        </div>
    );
};

ProjectsBlock.displayName = 'ProjectsBlock';
ProjectsBlock.propTypes = {
    time: React.PropTypes.string.isRequired,
    techList: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    children: React.PropTypes.arrayOf(React.PropTypes.node),
};

module.exports = cssModules(ProjectsBlock, styles);