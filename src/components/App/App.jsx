import Form from "components/Form/Form";
import Contacts from "components/Contacts/Contacts";
import Filter from "components/Filter/Filter";
import { MainContainer } from "styles/App.styled";
import { Title } from "../../styles/App.styled";

function App() {
  return (
    <MainContainer>
      <Title>Phonebook</Title>
      <Form />
      <Filter />
      <Contacts />
    </MainContainer>
  );
}

export default App;
