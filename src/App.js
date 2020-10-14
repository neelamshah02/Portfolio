import React from "react";
import "./App.css";
import styled from "styled-components";
import Card from "./Components/Card";
function App() {
  return (
    <div className="App">
      <MainSection>
        <PersonalInfo>
          <Card heading="ABOUT ME">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Card>
          <Card heading="CONTACT ME"></Card>
          <Card heading="AWARDS"></Card>
          <Card heading="Social MEDIA"></Card>
        </PersonalInfo>
        <Curriculate>
          <PersonalInfo>
          <Card heading="EXPERIENCE"></Card>
          <Card heading="EXPERTISE/SKILL"></Card>
          <Card heading="EDUCATION"></Card>
          <Card heading="HOBBIES & INTERESTS"></Card>
          </PersonalInfo>
        </Curriculate>
      </MainSection>
    </div>
  );
}

export default App;

const MainSection = styled.div`
  border-radius: 3px;
  display: grid;
  width: 80%;
  grid-template-columns: 30% 50%;
  grid-column-gap: 10px;
  margin: 0 auto;
`;

const PersonalInfo = styled.div`
  display: grid;
`;
const Curriculate = styled.div`
  display: grid;
`;
