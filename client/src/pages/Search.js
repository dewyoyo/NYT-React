import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import SearchForm from "../components/SearchForm";
import Jumbotron from "../components/Jumbotron";

import SaveBtn from "../components/SaveBtn";
import API from "../utils/API";


class Search extends Component {
  state = {
    result: [],
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {

  }

  searchMovies = searchtext => {
    const title = searchtext.replace(/\s/g, "+");

    API.search(title)
      .then(res => {
        this.setState({ result: res.data.items })
        console.log(res.data.items);
      })
      .catch(err => console.log(err));
  };



  saveBook = data => {
    console.log(data);
    if (data.title && data.author) {
      API.saveBook( data )
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    
  };


  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                React Google Book Search
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-4">

            <SearchForm
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />

          </Col>
          <Col size="md-8">
            <h1>Result</h1>






            <List>
              {this.state.result.map(book => (

                <ListItem key={book.id}>
                  <strong>
                    {book.volumeInfo.title} by {book.volumeInfo.authors}
                  </strong>

                  <SaveBtn onClick={() => this.saveBook({
                    bookid: book.id,
                    title: book.volumeInfo.title,
                    author: book.volumeInfo.authors,
                    imglink: book.volumeInfo.imageLinks.thumbnail,
                    link: book.volumeInfo.infoLink,
                    description: book.volumeInfo.description
                  })} />
                  {/* <SaveBtn onClick={() => this.testBook(this.state.result)} /> */}



                </ListItem>
              ))}

            </List>

          </Col>


        </Row>
      </Container>
    );
  }
}

export default Search;
