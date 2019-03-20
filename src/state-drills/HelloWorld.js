import React from 'react';
// import App from './App';

class HelloWorld extends React.Component {
    // constructor(props){
        // super(props)
        state = {
            who: 'World'
        }
    // }
    
    helloWorld = () => {
        this.setState({
            who: 'World'
        });
    }

    helloFriend = () => {
        this.setState({
            who: 'Friend'
        });
    }
    
    helloReact = () => {
        this.setState({
            who: 'React'
        });
    }

    render() {
        return (
            <div className="helloWorld">
                <p>Hello, {this.state.who}!</p>
                <button onClick={this.helloWorld}>World</button>
                <button onClick={this.helloFriend}>Friend</button>
                <button onClick={this.helloReact}>React</button>
            </div>
        )
    }
}

export default HelloWorld;