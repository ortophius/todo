const React = require('react');
const {PropTypes} = require('prop-types');
const {Button} = require('../Button/Button');
require('./Panel.scss');
/**
 * Panel component
 * @class Panel
 */
export class Panel extends React.Component {
  /**
   * @contructs Panel
   * @param {*} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * @return {*}
   */
  render() {
    return (
      <div className="panel">
        <Button
          icon="fas fa-plus icon-rotated-45"
          handler={this.props.onRemoveAll} />
      </div>
    );
  }
}

Panel.propTypes = {
  onRemoveAll: PropTypes.func,
};
