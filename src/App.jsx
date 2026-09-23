import PlayerList from "./components/PlayerList";
import InputInfo from "./components/InputInfo";
import "./App.css";
import { Component } from "react";
import footbol from "./footbol.json";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    players: footbol,
    isModal: null,
    filter: "",
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

  handelChange = (text) => {
    this.setState({
      filter: text,
    });
  };

  render() {


    const { players, isModal, filter } = this.state;

    
    const filteredPleyers = players.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase().trim());
    });

    return (
      <>
        <InputInfo onFilter={this.handelChange} />

        <PlayerList
          playerData={filteredPleyers}
          onDelete={this.handelPlayerDelete}
          onModal={this.handelOpenModal}
        />

        {isModal && (
          <Modal selectImg={isModal} closeModal={this.handelCloseModal} />
        )}
      </>
    );
  }
}

export default App;
