// TODO
var GroceryList = (props) => (
  <ul>
    <GroceryListItem item={props.items[0]}/>
    <GroceryListItem item={props.items[1]}/>
    <GroceryListItem item={props.items[2]}/>
    <GroceryListItem item={props.items[3]}/>
  </ul>
);

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);  

    this.state = {
      hover: false
    };
  }
  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }
  render() {
    
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  }
}


ReactDOM.render(<GroceryList items={['apple', 'pineApple', 'bananas','orange']}/>, document.getElementById('app')); 

