import React from 'react'
import {Link} from 'react-router-dom'

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
      <div>
        <h1>Click below to get a list of the top 5 breaking news in the US!</h1>
        <Link
          to={{
            pathname: '/results',
            state: {
              articles: this.state.articles
            }
          }}
        >
          <button onClick={this.onSubmit}>Click here!</button>
        </Link>
      </div>
    )
  }
}

export default Home
