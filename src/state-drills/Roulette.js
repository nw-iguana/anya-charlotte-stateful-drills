import React, {Component} from 'react';

class Roulette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }

    handleButtonClick = () => {
        this.setState({
            spinningTheChamber: true,
        })

        this.timeout = setTimeout(() => {
            this.setState({
                chamber: Math.ceil(Math.random() * 8),
                spinningTheChamber: false
            })
        }, 2000);
    }

    renderDisplay() {
        if (this.state.spinningTheChamber) {
            return <p>Spinning the chamber and pulling the trigger! ...</p>
        } else if (this.state.chamber === this.props.bulletInChamber) {
            return <p>BANG!!!</p>
        } else {
            return <p>You're safe!</p>
        }
    }

    render() {
        return (
            <div className="rouletteGame">
                {this.renderDisplay()}
                <button onClick={this.handleButtonClick}>Pull the trigger!</button>
            </div>
        )
    }
}

export default Roulette;