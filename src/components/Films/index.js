import React from 'react'
import styled from 'styled-components'

const API_ENDPOINT = 'http://swapi.co/api'

/* eslint-disable prettier/prettier */
export const FancyItem = styled.li`
  background-color: pink;
`
/* eslint-enable prettier/prettier */

export default class Films extends React.Component {
  state = {
    films: [],
  }

  // Do not do this!
  componentDidMount() {
    return fetch(`${API_ENDPOINT}/films`)
      .then(response => response.json())
      .then(films =>
        this.setState({
          films: films.results.map(film => film.title),
        })
      )
      .catch(err => console.log(err))
  }

  render() {
    return (
      <ul>
        {this.state.films.map(film =>
          <FancyItem key={film}>
            {film}
          </FancyItem>
        )}
      </ul>
    )
  }
}
