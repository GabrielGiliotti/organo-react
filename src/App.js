import { useState } from 'react';
import Banner from './components/Banner/index.jsx';
import Form from './components/Form/index.jsx';
import Team from './components/Team/index.jsx';
import Footer from './components/Footer/index.jsx';

function App() {

  const [user, setNewUser] = useState([]);

  const teamList = [
    {
      name: "Programação",
      primaryColor: "#57C278",
      secundaryColor: "#D9F7E9"
    },
    {
      name: "Front-end",
      primaryColor: "#82CFFA",
      secundaryColor: "#E8F8FF"
    },
    {
      name: "Data Science",
      primaryColor: "#A6D157",
      secundaryColor: "#F0F8E2"
    },
    {
      name: "DevOps",
      primaryColor: "#E06B69",
      secundaryColor: "#FDE7E8"
    },
    {
      name: "UX e Design",
      primaryColor: "#DB6EBF",
      secundaryColor: "#FAE9F5"
    },
    {
      name: "Mobile",
      primaryColor: "#FFBA05",
      secundaryColor: "#FFF5D9"
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secundaryColor: "#FFEEDF"
    },
  ];

  return (
    <div className="App">
      <Banner />
      <Form user={user} setNewUser={setNewUser} itemList={teamList.map(team => team.name)} />
      {teamList.map(team => <Team key={team.name} team={team} users={user.filter(user => user.time === team.name)} />)}
      <Footer />
    </div>
  );
}

export default App;
