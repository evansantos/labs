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
