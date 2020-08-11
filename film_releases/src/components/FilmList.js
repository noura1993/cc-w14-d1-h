import React, { Component } from "react";
import Film from "./Film";


class FilmList extends Component {

    render() {
        const film = this.props.films.map(film => {
            return (
                <Film name={film.name} url={film.url} key={film.id}></Film>
            );
        });

        return (
            <ul className="films-list">
                {film}
            </ul>
        )
    }
}

export default FilmList;