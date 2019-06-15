import React from 'react'
import {Link} from 'react-router-dom'

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
        <h1>breaking news articles:</h1>
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
                <h3 key={this.state.top5.indexOf(article)}>{article.title}</h3>
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
                <h3 key={this.state.top10.indexOf(article)}>{article.title}</h3>
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
                {' '}
                <h3 key={this.state.top15.indexOf(article)}>{article.title}</h3>
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
                <h3 key={this.state.top20.indexOf(article)}>{article.title}</h3>
              </Link>
            ))}
          </div>
        ) : (
          <br />
        )}

        {this.state.top20.length === 0 ? (
          <button onClick={this.onSubmit}>click to get 5 more!</button>
        ) : (
          <br />
        )}
      </div>
    )
  }
}

export default Results
