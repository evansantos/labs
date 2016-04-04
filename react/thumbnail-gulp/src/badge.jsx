var Badge = React.createClass( {
  render: function () {
    this.props
    return <button className="btn btn-primary" type="button">
      {this.props.title} <span className="badge">{this.props.number}</span>
    </button>
  }
} ) ;
