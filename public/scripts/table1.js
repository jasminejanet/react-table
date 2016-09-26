var headers = ["Name", "Quantity", "Price"];


var HeaderCell = React.createClass({
    render() {
        return (
        	<span className="header-cell">{this.props.data}</span>
        );
    }
});

var TableHeader = React.createClass({
    render() {
        return (
        	<div>
        		{this.props.headers.map(function(data, idx) {
        			return <HeaderCell data={data}/>;
        		})}
        	</div>
        );
    }
});


var Table = React.createClass({
    render() {
        return (
        	<div>
        		<TableHeader headers={headers}/>
        		<TableRows/>
    		</div>
        );
    }
});


ReactDOM.render(
  <Table/>,
  document.getElementById('content')
);









var headers = ["Name", "Quantity", "Price"];

var rows = [["xxx",  "4", " 45678"] , ["yyy", " 5", " 658"]];



border: 1px solid black;
    padding: 5px;
    background-color:red; 
    

    border:1px solid black;
     padding: 5px; 
     background-color:pink; 

     var rows = [["Jas","2","5000"],["Jus","4","10000"],["Geo","6","15000"],["Sug","8","20000"]];



     