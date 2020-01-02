const React = require('react');
const {Panel} = require('../Panel/Panel');
const {Greeting} = require('../Greeting/Greeting');
const {Card} = require('../Card/Card');
const {Row} = require('../Row/Row');
const {Button} = require('../Button/Button');
require('./App.scss');

/**
 * root class of the React application.
 * @class App
 */
class App extends React.Component {
  /**
  * Contructor for App
  * @constructs App
  * @param {*} props
  */
  constructor(props) {
    super(props);
    this.state = {
      empty: true,
      rows: [],
      draggedRow: null,
    };

    this.addRow = this.addRow.bind(this);
    this.getRows = this.getRows.bind(this);
    this.removeRow = this.removeRow.bind(this);
    this.editRow = this.editRow.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
  }

  /**
   * Adds a row to list.
   * @param {string} title
   * @param {string} id
   */
  addRow(title, id) {
    this.setState((state) => {
      const [...rows] = state.rows;
      const title = (title === undefined) ? '' : title;
      const id = (id === undefined) ?
          `${rows.length}_${new Date().getTime()}` : id;
      const row = {
        id: id,
        title: title,
        done: false,
      };
      rows.push(row);

      return {
        rows,
      };
    });
  }

  /**
   * Remove row with specified `id`
   * @param {string} id
   */
  removeRow(id) {
    this.setState((state) => {
      const rows = id === true ? [] : state.rows.filter((row) => row.id != id);
      return {
        rows,
      };
    });
  }

  /**
   * Edit existing row
   * @param {string} id
   * @param {string} title
   * @param {boolean} done
   */
  editRow(id, title, done) {
    this.setState((state) => {
      const rows = state.rows.map((row) => {
        if (row.id == id) {
          row.title = title;
          row.done = done;
        }
        return row;
      });
      return {
        rows,
      };
    });
  }

  /**
   * Generate Rows from array
   * @return {Array}
   */
  getRows() {
    const rows = this.state.rows.map((row) =>
      <Row
        key={row.id}
        id={row.id}
        title={row.title}
        destroyHandler={this.removeRow}
        done={row.done}
        changeHandler={this.editRow}
        onDrag={this.onDrag}
        onDragEnd={this.onDragEnd}
        onDragOver={this.onDragOver}/>
    );
    return rows;
  }

  /**
   * Process `dragstart` event
   * @param {string} id
   */
  onDrag(id) {
    this.setState({draggedRow: id});
  }

  /**
   * Process `dragend` event
   */
  onDragEnd() {
    this.setState({draggedRow: null});
  }

  /**
   * Process `dragover` event
   * @param {string} id
   */
  onDragOver(id) {
    this.setState((state) => {
      if (id == state.draggedRow) return;
      let oldIndex;
      let newIndex;
      const [...rows] = state.rows;

      const draggedElement =
        rows.filter((row, index) => {
          if (row.id == this.state.draggedRow) {
            oldIndex = index;
            return row;
          };
          if (row.id == id) newIndex = index;
        })[0];

      console.log(oldIndex);
      return {rows};
    });
  }

  /**
   * @return {*}
   */
  render() {
    const removeAllRows = this.removeRow.bind(this, true);
    const length = this.state.rows.length;
    const list = (length == 0) ?
      <Greeting /> :
      <div className="app">
        <Panel onRemoveAll={removeAllRows} onShare={()=> true} />
        <Card>
          {this.getRows()}
        </Card>
      </div>;
    return (
      <div>
        {list}
        <Button className="app-add-button" handler={this.addRow} />
      </div>
    );
  }
}

exports.App = App;
