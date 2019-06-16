import React from 'react'

import {Jumbotron, Button, Card} from 'react-bootstrap'

class Article extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h3>{this.props.location.state.article.title}</h3>
        </Jumbotron>
        <Card className="text-center">
          <Card.Header>
            <img
              src={this.props.location.state.article.urlToImage}
              alt="pic from source"
            />
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>{this.props.location.state.article.description}</p>
              <footer className="blockquote-footer">
                {this.props.location.state.article.author} from{' '}
                <cite title="Source Title">
                  {this.props.location.state.article.source.name}
                </cite>
              </footer>
            </blockquote>
            <br />
            <Card.Text>{this.props.location.state.article.content}</Card.Text>
            <a href={this.props.location.state.article.url}>
              <Button variant="primary">Read more</Button>
            </a>
          </Card.Body>
          <Card.Footer className="text-muted">
            Published: {this.props.location.state.article.publishedAt}
          </Card.Footer>
        </Card>
      </div>
    )
  }
}

export default Article
