import React, { Component } from "react";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";
import TableComponent from "./components/TableComponent";

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
        nama: "Aji",
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
        <TableComponent users={this.state.users} />
      </div>
    );
  }
}
