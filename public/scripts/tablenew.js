var Headers = [
  {key: 'name', label: 'Stud-name'},
  {key: 'age', label: 'Age'},
  {key: 'std', label: 'Standard'}
];
var Rows = [
  {name: 'Annie', age: 9, std: 4},
  {name: 'Princy', age: 12, std: 7},
  {name: 'Jerson', age: 12, std: 7}
];

var TableHeader = React.createClass({
  getHeadCells: function (Headers) {
    return Headers.map(function (header) {
      return (<HeadCells col={header.label}/>);
    });
  },
  render: function () {
    return (<thead><tr>{this.getHeadCells(this.props.header)}</tr></thead>)
  }
});

var HeadCells = React.createClass({
  render: function () {
    return (
      <th>{this.props.col}</th>
    );
  }
});

var RowCells = React.createClass({
  render: function () {
    return (
      <td>{this.props.data}</td>
    );
  }
});

var TableRows = React.createClass({
  getRowCells: function (Headers, Rows) {
    var data = Rows.map(function (row) {
      var cells = Headers.map(function (header) {
        return (<RowCells data={row[header.key]}/>)
      });
      return (<tr>{cells}</tr>);
    });
    return data;
  },
  render: function () {
    return <tbody>{(this.getRowCells(this.props.header, this.props.row))}</tbody>;
  }
});

var Table = React.createClass({
  render: function () {
    return (
      <table>
        <TableHeader header={this.props.header}/>
        <TableRows header={this.props.header} row={this.props.row}/>
      </table>
    );
  }
});

ReactDOM.render(
  <Table header={Headers} row={Rows}/>,
  document.getElementById('jas')
);


