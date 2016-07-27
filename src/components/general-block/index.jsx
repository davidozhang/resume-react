const React = require('react');
const cssModules = require('react-css-modules');

const styles = require('./styles.scss');

const GeneralBlock = (props) => {
    const { title, children } = props;
    return (
        <div styleName='general-block'>
            <p styleName='title' className='bold-text'>{title}</p>
            {children}
        </div>
    );
};

GeneralBlock.displayName = 'GeneralBlock';
GeneralBlock.propTypes = {
    title: React.PropTypes.string.isRequired,
    children: React.PropTypes.arrayOf(React.PropTypes.node),
};

module.exports = cssModules(GeneralBlock, styles);