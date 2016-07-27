const React = require('react');
const cssModules = require('react-css-modules');

const styles = require('./styles.scss');

const Header = (props) => {
    const { term } = props;
    return (
        <div styleName='header' className='clear-fix'>
            <div styleName='main-desc'>
                <p styleName='name' className='med-text'>Zuqi Li</p>
                <p styleName='term'>{term} Software Engineering</p>
            </div>
            <div>
            </div>
        </div>
    );
};

Header.displayName = 'Header';
Header.propTypes = {
    term: React.PropTypes.string,
};

module.exports = cssModules(Header, styles);