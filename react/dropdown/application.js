var options = {
  thumbnailData: [{
    title: 'Show Courses',
    number: 12,
    header: 'Learn React',
    description: 'React is fantastic new library to make front-end stuff!',
    imageUrl: 'http://formatjs.io/img/react.svg'
  },{
    title: 'Show Courses',
    number: 25,
    header: 'Learn Gulp',
    description: 'Gulp will speed up your development workflow.',
    imageUrl: 'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png'
  }]
};

var element = React.createElement( ThumbnailList, options ) ;

ReactDOM.render(element,document.querySelector('.container')) ;

var Badge = React.createClass( {displayName: "Badge",
  render: function () {
    this.props
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
      this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
    )
  }
} ) ;

var Thumbnail = require('thumbnail');

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function(){
    var list = this.props.thumbnailData.map(function (thumbnailProps){
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    });

    return React.createElement("div", null, 
      list
      )
  }
})

var Badge = require('badge');

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function() {
    return React.createElement("div", {className: "col-sm-4"}, 
      React.createElement("div", {className: "thumbnail"}, 
        React.createElement("img", {src: this.props.imageUrl, height: "120"}), 
        React.createElement("div", {className: "caption"}, 
          React.createElement("h3", null, this.props.header), 
          React.createElement("p", null, this.props.description), 
          React.createElement("p", null, 
            React.createElement(Badge, {title: this.props.title, number: this.props.number})
          )
        )
      )
    )
  }
} ) ;
