import React from "react";
class SearchBar extends React.Component {
  onFormSubmit = (event) => {
    event.preventDefault();
    //console.log(this.state);
    this.props.onSubmit(this.state);
  };
  state = { term: "" };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <input
              type="text"
              value={this.state.term}
              placeholder="Search Images"
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
