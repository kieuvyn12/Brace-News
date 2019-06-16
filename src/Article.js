import React from 'react'

class Article extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.location.state.article.title}</h2>
        <br />
        <p>{this.props.location.state.article.description}</p>
        <img
          src={this.props.location.state.article.urlToImage}
          alt="pic from news source"
        />
        <h5>Author: {this.props.location.state.article.author}</h5>
        <h6>
          Published at: {this.props.location.state.article.publishedAt} from:{' '}
          {this.props.location.state.article.source.name}
        </h6>
        <p>Preview of article:{this.props.location.state.article.content}</p>
        <a href={this.props.location.state.article.url}>
          click here to see from original source
        </a>
      </div>
    )
  }
}

export default Article
