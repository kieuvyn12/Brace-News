import React from 'react'
import {Link} from 'react-router-dom'
import {Jumbotron, Button} from 'react-bootstrap'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      clicked: false
    }
    this.getArticles = this.getArticles.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    this.getArticles()
  }

  async getArticles() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
      process.env.REACT_APP_API_KEY
    }`
    let response = await fetch(url)
    let data = await response.json()
    this.setState({
      articles: data.articles
    })
  }

  onSubmit() {
    this.setState({
      clicked: true
    })
  }

  render() {
    return (
      <Jumbotron>
        <h1>Welcome to the Brace News app!</h1>
        <p>
          We aggregate live top and breaking headlines for the United States
          from multiple news sources.
        </p>
        <p>
          <Link
            to={{
              pathname: '/results',
              state: {
                articles: this.state.articles
              }
            }}
          >
            <Button variant="primary" onClick={this.onSubmit}>
              See news
            </Button>{' '}
          </Link>
        </p>
      </Jumbotron>
    )
  }
}

export default Home
