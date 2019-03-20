import React, {Component} from 'react';

class Bomb extends Component {
    state = {
        count: 0
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            let newCount = this.state.count + 1;
            this.setState({
                count: newCount
             });
        }, 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    renderDisplay() {
        if (this.state.count >= 8) {
            clearInterval(this.interval)
            return <p>BOOM!!!</p>
        } else if (this.state.count % 2 === 0) {
            return <p>tick</p>
        } else {
            return <p>tock</p>
        }
    }

    render() {
        return (
            <div className="Bomb">
                <p>{this.state.count}</p>
                {this.renderDisplay()}
            </div>
        )
    }
}


export default Bomb;
