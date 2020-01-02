const React = require('react');
const {PropTypes} = require('prop-types');
require('./Icon.scss');

/**
 * @class Icon
 * @description Provides Icon screen for the app
 */
export class Icon extends React.Component {
  /**
   * Icon constructor
   * @constructs Icon
   * @param {React.Props} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * @return {*}
   */
  render() {
    const {name, color, size} = this.props;
    return (
      <i
        className={name+' icon icon-'+color+' icon-'+size}
        draggable={this.props.draggable}></i>
    );
  }
}

Icon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  draggable: PropTypes.bool,
};

Icon.defaultProps = {
  name: 'fas fa-plus',
  color: 'white',
  size: 'medium',
  draggable: false,
};
