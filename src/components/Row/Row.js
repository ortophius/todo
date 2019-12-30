const React = require('react');
const {PropTypes} = require('prop-types');
require('./Row.scss');
/**
 * Row component
 * @class Row
 */
export class Row extends React.Component {
  /**
   * @contructs Row
   * @param {*} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * @return {*}
   */
  render() {
    const {title, edit, done} = this.props;
    const editForm = (
      <p>{title}</p>,
      <input type="text" className="row-input" value={title} />
    );
    return (editForm);
  }
}

Row.propTypes = {
  title: PropTypes.string,
  edit: PropTypes.bool,
  done: PropTypes.bool,
  onChange: PropTypes.func,
};

Row.defaultProps = {
  title: '',
  edit: true,
  done: false,
};


