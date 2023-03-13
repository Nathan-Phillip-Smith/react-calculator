class Buttons extends React.Component {
    constructor(props) {
      super(props);
    }



    render() {
      return (
        <div className="buttons">
            <div className="upper-buttons">
                <div id="divide" className="button" onClick={this.props.handleClick}>/</div>
                <div id="multiply" className="button" onClick={this.props.handleClick}>x</div>
                <div id="subtract" className="button" onClick={this.props.handleClick}>-</div>
                <div id="add" className="button" onClick={this.props.handleClick}>+</div>
            </div>
            <div className="lower-buttons">
                <div className="lower-buttons-left">
                    <div id="seven" className="button" onClick={this.props.handleClick}>7</div>
                    <div id="eight" className="button" onClick={this.props.handleClick}>8</div>
                    <div id="nine" className="button" onClick={this.props.handleClick}>9</div>
                    <div id="four" className="button" onClick={this.props.handleClick}>4</div>
                    <div id="five" className="button" onClick={this.props.handleClick}>5</div>
                    <div id="six" className="button" onClick={this.props.handleClick}>6</div>
                    <div id="one" className="button" onClick={this.props.handleClick}>1</div>
                    <div id="two" className="button" onClick={this.props.handleClick}>2</div>
                    <div id="three" className="button" onClick={this.props.handleClick}>3</div>
                    <div id="zero" className="button" onClick={this.props.handleClick}>0</div>
                    <div id="decimal" className="button" onClick={this.props.handleClick}>.</div>
                    <div id="clear" className="button" onClick={this.props.handleClick}>c</div>
                </div>
                <div id="equals" className="equal-button" onClick={this.props.handleClick}>=</div>
            </div>
            
         
        </div>
      );
    }
  };
