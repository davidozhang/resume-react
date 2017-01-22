const React = require('react');
const cssModules = require('react-css-modules');

const styles = require('./styles.scss');

const EducationBlock = (props) => {
    return (
       <div styleName='education-block'>
           <p styleName='uni' className='bold-text'>University of Waterloo</p>
           <p styleName='degree'>Bachelor of Software Engineering</p>
           <p styleName='term' className='med-text'>Sept. 2013 – present</p>
       </div>
    );
};

EducationBlock.displayName = 'EducationBlock';
EducationBlock.propTypes = {
};

module.exports = cssModules(EducationBlock, styles);