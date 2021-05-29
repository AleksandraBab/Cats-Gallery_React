import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import Popup from './Popup'

function App() {
  const [selectedCard, setSelectedCard] = React.useState(null)

  const closePopup = () => {
    setSelectedCard(null)
  }

  const handleCardClick = (card) => {
    setSelectedCard(card)
  }

  return (
    <>
      <Header>
      </Header>

      <Content
        onCardClick={handleCardClick}
      >
      </Content>

      <Popup
        card={selectedCard}
        onClose={closePopup}
      >
      </Popup>

      <Footer>
      </Footer>
    </>
  );
}

export default App;
