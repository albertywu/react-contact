import React, {Component} from 'react'

class SearchInput extends Component {

  render() {
    return(
      <input
        type="search"
        value={this.props.inputValue}
        onChange={
          // yes, jsx supports inline comments!

          /*
            even
            multiline
            comments!
          */
          (event) => this.props.onChange(event.target.value)
        }
        />
    )
  }

}

export default SearchInput
