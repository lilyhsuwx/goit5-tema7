import { Component } from "react";

class PlayerList extends Component {

    render() {
        const {playerData, onModal, onDelete} = this.props

        return(
        <ul>
          {playerData.map((player) => {
            return (
              <li key={player.id}>
                <h2>{player.name}</h2>
                <p>{player.club}</p>
                <img
                  onClick={() => onModal(player.photo)}
                  src={player.photo}
                  alt={player.name}
                />
                <button
                  type="button"
                  onClick={() => onDelete(player.id)}
                >
                  DELETE
                </button>
              </li>
            );
          })}
        </ul> 
        )
    }
}

export default PlayerList