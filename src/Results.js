import React from 'react'
import {Link} from 'react-router-dom'
import FilterForm from './FilterForm'

import {Jumbotron, Container, Col} from 'react-bootstrap'

class Results extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allArticles: this.props.location.state.articles,
      top5: this.props.location.state.articles.slice(0, 5),
      top10: [],
      top15: [],
      top20: []
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.filtered = this.filtered.bind(this)
  }

  filtered() {
    if (this.state.filtered) {
      this.setState({
        filtered: false
      })
    } else {
      this.setState({
        filtered: true
      })
    }
  }

  onSubmit() {
    if (this.state.top10.length === 0) {
      this.setState({
        top10: this.props.location.state.articles.slice(5, 10)
      })
    } else if (this.state.top15.length === 0) {
      this.setState({
        top15: this.props.location.state.articles.slice(10, 15)
      })
    } else if (this.state.top20.length === 0) {
      this.setState({
        top20: this.props.location.state.articles.slice(15, 20)
      })
    }
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Breaking News Headlines</h1>
          <br />
          <h5>Delivering you the latest top news headlines in the US:</h5>
        </Jumbotron>
        <Container>
          <FilterForm
            articles={this.state.allArticles}
            filtered={this.filtered}
          />
        </Container>
        <Container>
          {this.state.allArticles.length !== 0 ? (
            <div>
              {this.state.top5.map(article => (
                <Link
                  to={{
                    pathname: '/article',
                    state: {
                      article: article
                    }
                  }}
                >
                  <h3 key={this.state.allArticles.indexOf(article)}>
                    {article.title}
                  </h3>
                </Link>
              ))}
            </div>
          ) : (
            <br />
          )}

          {this.state.top5.length !== 0 ? (
            <div>
              {this.state.top10.map(article => (
                <Link
                  to={{
                    pathname: '/article',
                    state: {
                      article: article
                    }
                  }}
                >
                  <h3 key={this.state.allArticles.indexOf(article)}>
                    {article.title}
                  </h3>
                </Link>
              ))}
            </div>
          ) : (
            <br />
          )}

          {this.state.top10.length !== 0 ? (
            <div>
              {this.state.top15.map(article => (
                <Link
                  to={{
                    pathname: '/article',
                    state: {
                      article: article
                    }
                  }}
                >
                  <h3 key={this.state.allArticles.indexOf(article)}>
                    {article.title}
                  </h3>
                </Link>
              ))}
            </div>
          ) : (
            <br />
          )}

          {this.state.top15.length !== 0 ? (
            <div>
              {this.state.top20.map(article => (
                <Link
                  to={{
                    pathname: '/article',
                    state: {
                      article: article
                    }
                  }}
                >
                  <h3 key={this.state.allArticles.indexOf(article)}>
                    {article.title}
                  </h3>
                </Link>
              ))}
            </div>
          ) : (
            <br />
          )}

          {this.state.top20.length === 0 ? (
            <button onClick={this.onSubmit}>See 5 more articles!</button>
          ) : (
            <br />
          )}
        </Container>
      </div>
    )
  }
}

export default Results
