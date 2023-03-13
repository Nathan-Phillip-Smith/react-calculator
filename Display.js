class Display extends React.Component {
    constructor(props) {
        super(props);
      }
      render() {
        return (
          <div id="displays">
              <div className="top-display">{this.props.upperDisplayText}</div>
              <div id='display' className="bottom-display">{this.props.lowerDisplayText}</div>
          </div>
        );
      }
    };