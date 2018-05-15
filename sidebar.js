import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {addDeck, showAddDeck, hideAddDeck} from '../actions';

const mapStateToProps = ({decks, addingDeck}) =>({
    decks, 
    addingDeck        
});

const mapDispatchToProps = dispatch =>({
    hideAddDeck: () => dispatch (hideAddDeck()),
    showAddDeck: () => dispatch (showAddDeck()),
    addDeck: (name) => dispatch(addDeck(name))
})

class Sidebar extends React.Component {
    constructor (props) {super(props)};
    createDeck = (event) => {
        if (event.which !== 13) return;
        var name = ReactDOM.findDOMNode(this.refs.add).value;        
        this.props.addDeck(name);
        this.props.hideAddDeck();
    }
    componentDidUpdate () {
        let el=ReactDOM.findDOMNode(this.refs.add)
        if (el) el.focus();
    }
    
    render() {
        const {decks, addingDeck, hideAddDeck, showAddDeck, addDeck} = this.props;
        return (
        <div style={{margin: '0 10px'}}>
            <h3>Все темы</h3>
            <button style={{margin: '2px'}} onClick={showAddDeck}>Новая тема</button>
            <button style={{margin: '2px'}} onClick={hideAddDeck}>Esc</button>
            <ul style={{'list-style-type': 'none', 'text-align':'left'}}>
                {decks.map((deck, i) => 
                <li  key={i}> {deck.name} </li>  
                )}
            </ul>
            {addingDeck && <input ref='add'  onKeyPress={this.createDeck}  />}
            
           
        </div>
        )
    }
}
 
  
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);