import "./App.css";
import { Component } from "react";
import footbol from "./footbol.json";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    players: footbol,
    isModal: null,
  };

  handelPlayerDelete = (id) => {
    this.setState((prev) => ({
      players: prev.players.filter((player) => player.id !== id),
    }));

    // this.setState((prev) => {
    //   return {
    //     players: prev.players.filter((player) => {
    //       return player.id !== id
    //     })
    //   }
    // })
  };

  handelOpenModal = (photo) => {
    this.setState({
      isModal: photo,
    });
  };

  handelCloseModal = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.setState({
        isModal: null,
      });
    }
  };

  render() {
    return (
      <>
        <ul>
          {this.state.players.map((player) => {
            return (
              <li key={player.id}>
                <h2>{player.name}</h2>
                <p>{player.club}</p>
                <img
                  onClick={() => this.handelOpenModal(player.photo)}
                  src={player.photo}
                  alt={player.name}
                />
                <button
                  type="button"
                  onClick={() => this.handelPlayerDelete(player.id)}
                >
                  DELETE
                </button>
              </li>
            );
          })}
        </ul>

        {this.state.isModal && (
          <Modal
            selectImg={this.state.isModal}
            closeModal={this.handelCloseModal}
          />
        )}
      </>
    );
  }
}

export default App;
