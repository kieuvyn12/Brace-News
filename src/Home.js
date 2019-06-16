import React from 'react'
import {Link} from 'react-router-dom'
import {Jumbotron, Button, Carousel, Container, Col} from 'react-bootstrap'

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
        <Container>
          <Col sm="11">
            <Carousel>
              <Carousel.Item className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1498644035638-2c3357894b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  alt="unsplash pic"
                />
                <Carousel.Caption className="carousel-text">
                  <h3>Why Brace News?</h3>
                  <p>
                    We are an excellent way to follow the latest in breaking
                    news.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1507581332893-aefc5acf08e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  alt="unsplash pic"
                />

                <Carousel.Caption className="carousel-text">
                  <h3>Where do we get our sources?</h3>
                  <p>
                    We aggreggate articles from over 30,000 news sources and
                    blogs.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1560177112-fbfd5fde9566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                  alt="unsplash pic"
                />

                <Carousel.Caption className="carousel-text">
                  <h3>Looking for something in particular?</h3>
                  <p>
                    Use our filter function to find exactly what you're searchin
                    for.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Container>
      </div>
    )
  }
}

export default Home
