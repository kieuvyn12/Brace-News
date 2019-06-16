import React from 'react'

class FilterForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>Filter Headlines by Keyword:</label>
          <input type="text" name="title" />
        </form>
      </div>
    )
  }
}

export default FilterForm
