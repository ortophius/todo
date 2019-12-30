const React = require('react');
const {PropTypes} = require('prop-types');
require('./Row.scss');
const {Icon} = require('../Icon/Icon');
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
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.startEdit = this.startEdit.bind(this);
    this.destroy = this.destroy.bind(this);
    this.state = {
      edit: true,
    };
    this.input = React.createRef();
    this.checkbox = React.createRef();
  }

  /**
   * Initiate edit action
   */
  startEdit() {
    this.setState((state) => {
      return {
        edit: true,
      };
    }, () => {
      this.input.current.focus();
    });
  }

  /**
   * Check whether it is new row
   */
  componentDidMount() {
    if (this.props.title == '') this.startEdit();
  }

  /**
   * Process the row changes
   * @param {Event} e
   */
  onSubmit(e) {
    e.preventDefault();
    if (this.input.current.value == '') {
      this.destroy();
    }
    this.setState((state) => {
      return {
        edit: false,
      };
    });
  }

  /**
   * Destroy row
   */
  destroy() {
    this.props.destroyHandler(this.props.id);
  }
  /**
   * Process input mutations
   * @param {Event} e
   */
  onChange(e) {
    const title = this.input.current.value;
    this.props.changeHandler(this.props.id, title, true);
  }

  /**
   * @return {*}
   */
  render() {
    const _ = this;
    const {title, done} = this.props;
    const edit = this.state.edit;
    const editForm =
      <form
        className='row-form'
        onSubmit={this.onSubmit}
        onBlur={this.onSubmit}>
        <input
          ref={this.input}
          rows="1"
          type="text"
          className="row-input"
          onChange={this.onChange}
          value={title}/>
      </form>;

    const normalForm =
      <div
        className='row-text'
        ref={this.input}
        onClick={this.startEdit}>
        {title}
      </div>;

    const checkbox =
      <input
        ref={this.checkbox}
        type="checkbox"
        className="row-box"/>;

    return (
      <div className="row-wrap">
        {checkbox}
        {edit ? editForm : normalForm}
        <button className="row-button" onClick={_.destroy}>
          <Icon name="far fa-trash-alt" color="gray" />
        </button>
      </div>
    );
  }
}

Row.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  edit: PropTypes.bool,
  done: PropTypes.bool,
  changeHandler: PropTypes.func,
  destroyHandler: PropTypes.func,
  doneHandler: PropTypes.func,
};

Row.defaultProps = {
  title: '',
  edit: true,
  done: false,
};


