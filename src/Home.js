import React from 'react'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      articles: []
    }
    this.getArticles = this.getArticles.bind(this)
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

  render() {
    return (
      <div>
        {console.log(this.state)}
        <h1>Click below to get a list of the top 5 breaking news in the US!</h1>
      </div>
    )
  }
}

export default Home
