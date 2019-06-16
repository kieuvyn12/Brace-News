import React from 'react'
import {ListGroup, Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class FilterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      allArticles: [],
      filtered: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.filter = this.filter.bind(this)
  }

  handleChange(changeEvent) {
    this.setState({
      title: changeEvent.target.value
    })
    this.filter(this.state.title)
  }

  handleSubmit(submitEvent) {
    submitEvent.preventDefault()
    this.props.filtered()
    this.filter(this.state.title)
    this.setState({
      title: ''
    })
  }

  filter(str) {
    let lowercasedStr = str.toLowerCase()

    let lowercasedArticles = this.props.articles.map(article =>
      article.title.toLowerCase()
    )

    let lowercasedFiltered = lowercasedArticles.filter(article =>
      article.includes(lowercasedStr)
    )

    let finalFiltered = this.props.articles.filter(article => {
      return lowercasedFiltered.includes(article.title.toLowerCase())
    })

    this.setState({
      allArticles: finalFiltered,
      filtered: true
    })
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formFilter">
            <Form.Label>Filter by Keyword:</Form.Label>
            <Form.Control
              type="text"
              placeholder="keyword here"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              For best results, enter one keyword at a time.
            </Form.Text>
          </Form.Group>
          <Button type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>

        {this.state.allArticles.length !== 0 && this.state.filtered ? (
          <ListGroup>
            {this.state.allArticles.map(article => (
              <Link
                to={{
                  pathname: '/article',
                  state: {
                    article: article
                  }
                }}
              >
                <ListGroup.Item>{article.title}</ListGroup.Item>
              </Link>
            ))}
          </ListGroup>
        ) : (
          <br />
        )}
      </div>
    )
  }
}

export default FilterForm
