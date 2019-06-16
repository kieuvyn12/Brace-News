import React from 'react'

import {Jumbotron, Container} from 'react-bootstrap'

class Article extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h3>{this.props.location.state.article.title}</h3>
          <br />
          <p>{this.props.location.state.article.description}</p>
        </Jumbotron>
        <Container>
          <div>
            <img
              src={this.props.location.state.article.urlToImage}
              alt="pic from news source"
            />
            <h5>Author: {this.props.location.state.article.author}</h5>
            <h6>
              Published at: {this.props.location.state.article.publishedAt}{' '}
              from: {this.props.location.state.article.source.name}
            </h6>
            <p>
              Preview of article:{this.props.location.state.article.content}
            </p>
            <a href={this.props.location.state.article.url}>
              click here to see from original source
            </a>
          </div>
        </Container>
      </div>
    )
  }
}

export default Article
