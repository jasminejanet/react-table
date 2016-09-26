var headers = ["Name","Quantity","Price"];
var rows = [["Jas","2","5000"],["Jus","4","10000"],["Geo","6","15000"],["Sug","8","20000"]];
var HeaderCell = React.createClass({
    render() {
        return (
        	<span className="header-cell">{this.props.data}</span>
        );
    }
});
var RowsCell= React.createClass({
    render(){
        return (
           <div className="rows-cell">{this.props.data}</div>
           );
    }   
});
   
var TableHeader = React.createClass({
    render() {
        return (
        	<span>
        		{this.props.headers.map(function(data, idx) {
        			return <HeaderCell data={data}/>;
        		})}
        	</span>
        );
    }
});

var TableRows = React.createClass({
    render()
     {
        return(
            <span>
            {
               this.props.rows.map(function(data, idx){
                return <RowsCell data={data}/>;
                })
            }
            </span>
        );
    }
});
var Table = React.createClass({
    render() {
        return (
        	<span>
        		<TableHeader headers={headers}/>
        		<span><TableRows rows={rows}/></span>
            </span>
        );
    }
});


ReactDOM.render(
  <Table/>,
  document.getElementById('content')
);