const React = require('react');
const cssModules = require('react-css-modules');

const styles = require('./styles.scss');

const EducationBlock = (props) => {
    return (
       <div styleName='education-block'>
           <p styleName='uni' className='bold-text'>University of Waterloo</p>
           <p styleName='degree'>Bachelor of Software Engineering</p>
           <p styleName='term' className='med-text'>Expected April 2018</p>
           <p styleName='award' className='med-text'>- Dean's Honours List</p>
       </div>
    );
};

EducationBlock.displayName = 'EducationBlock';
EducationBlock.propTypes = {
};

module.exports = cssModules(EducationBlock, styles);