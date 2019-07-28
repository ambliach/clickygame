import React, { Component } from 'react';
import Card from "./components/Card/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import './App.css';

class App extends React.Component {
  state = {
    message: "Click on an image to start",
    score: 0,
    cardsArray: cards,
    clickedArray: [],
    highScore: 0,
  }
  
  shuffle = () => this.state.cardsArray.sort(()=> Math.random() - 0.5);

  resetValues = () => {
    this.setState({
      score: 0,
      cardsArray: cards,
      clickedArray: [],
    });
  }

  handleClick = (cardId) => {
    console.log(cardId, "inside handleClick");

    if (!this.state.clickedArray.includes(cardId)) {
      this.setState({

        score: this.state.score + 1,
        cardsArray: this.shuffle(),
        clickedArray: [...this.state.clickedArray, cardId]
      }, () => {
        if (this.state.score === this.state.cardsArray.length){
          alert("you won");
          this.resetValues();
        } else {
          if (this.state.score > this.state.highScore) {
            this.setState({
              highScore: this.state.score,
            });
          }
        }
      })
    } else {
      alert("you lost");
      this.resetValues();
    }
  }

  render(){
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highScore}>Nick Cartoons Click Game!</Header>
        {this.state.cardsArray.map(card => (
          <Card 
          clickCount={this.handleClick}
          id={card.id}
          key={card.id}
          image={card.image}
          />
        ))}
      </Wrapper>
    )
  };
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

