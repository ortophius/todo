const React = require('react');
const {PropTypes} = require('prop-types');
const {Button} = require('../Button/Button');
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
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.startEdit = this.startEdit.bind(this);
    this.destroy = this.destroy.bind(this);
    this.state = {
      edit: true,
      dragged: false,
    };
    this.input = React.createRef();
    this.text = React.createRef();
    this.checkbox = React.createRef();
    this.wrap = React.createRef();
  }

  /**
   * Process drag phase of
   * drag&drop event
   */
  onDrag() {
    this.setState({dragged: true});
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
    const title = this.input.current ?
      this.input.current.value :
      this.text.current.innerHTML;
    const done = this.checkbox.current.checked;
    this.props.changeHandler(this.props.id, title, done);
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
          className={'row-input' + (done ? ' row-input-done' : '')}
          onChange={this.onChange}
          value={title}/>
      </form>;

    const normalForm =
      <div
        className={'row-text' + (done ? ' row-text-done' : '')}
        ref={this.text}
        onClick={this.startEdit}>
        {title}
      </div>;

    const checkbox =
      <input
        ref={this.checkbox}
        type="checkbox"
        className="row-box"
        onChange={this.onChange}
        checked={done} />;

    return (
      <div
        ref={this.wrap}
        className={
          'row-wrap '+
          (this.state.dragged ? 'row-wrap-dragged' : '')
        }>
        <Button
          icon="fas fa-grip-vertical"
          iconColor="gray"
          color="white"
          handler={this.onDrag} />
        {checkbox}
        {edit ? editForm : normalForm}
        <Button
          icon="far fa-trash-alt"
          color="white"
          iconColor="gray"
          handler={_.destroy} />
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


