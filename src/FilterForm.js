import React from 'react'

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
    let filtered = this.props.articles.filter(article => {
      return article.title.includes(str)
    })
    this.setState({
      allArticles: filtered,
      filtered: true
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Filter Headlines by Keyword:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>

        {this.state.allArticles.length !== 0 && this.state.filtered ? (
          <div>
            {this.state.allArticles.map(article => (
              <h5>{article.title}</h5>
            ))}
          </div>
        ) : (
          <br />
        )}
      </div>
    )
  }
}

export default FilterForm
