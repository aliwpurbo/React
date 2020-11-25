import React, { Component } from "react";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";

import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import EditContainer from "./containers/EditContainer";
import DetailContainer from "./containers/DetailContainer";
import CreateContainer from "./containers/CreateContainer";

export default class App extends Component {
  state = {
    title: "Data Siswa",
    users: [
      {
        id: 1,
        nama: "Ali",
        alamat: "Jl Leo Mamiri",
      },

      {
        id: 2,
        nama: "Adi",
        alamat: "Jl Leo Mamiri",
      },

      {
        id: 3,
        nama: "Ami",
        alamat: "Jl Leo Mamiri",
      },
      {
        id: 4,
        nama: "Ami",
        alamat: "Jl Leo Mamiri",
      },
      {
        id: 5,
        nama: "Ami",
        alamat: "Jl Leo Mamiri",
      },
      {
        id: 6,
        nama: "Ami",
        alamat: "Jl Leo Mamiri",
      },
      {
        id: 7,
        nama: "Madun",
        alamat: "Jl Leo Mamiri",
      },
      {
        id: 8,
        nama: "Sri",
        alamat: "Jl Leo Mamiri",
      },
      {
        id: 9,
        nama: "Ajis",
        alamat: "Jl Leo Mamiri",
      },
      {
        id: 10,
        nama: "Amsi",
        alamat: "Jl Leo Mamiri",
      },
      {
        id: 11,
        nama: "Amis",
        alamat: "Jl Leo Mamiri",
      },
      {
        id: 12,
        nama: "Amid",
        alamat: "Jl Leo Mamiri",
      },
    ],
  };
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent title={this.state.title} />
        
        <BrowserRouter>
          <Route path="/" exact>
            <HomeContainer users={this.state.users} />
          </Route>
          <Route path="/create" exact>
            <CreateContainer />
          </Route>
          <Route path="/detail/:id" exact>
            <DetailContainer />
          </Route>
          <Route path="/edit/:id" exact>
            <EditContainer />
          </Route>
          
        </BrowserRouter>
      </div>
    );
  }
}
