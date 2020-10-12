import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class UserCardHeader extends React.Component  {
  render () {
    const user = this.props.user;

    return (
      <h3>
        <b>{user.name}</b> aka. <code>{user.username}</code>
      </h3>
    );
  }
}

class UserCardBody extends React.Component {
  render () {
    const company = this.props.company;

    return (
      <div>
        <u>Currently pursuing:</u> {company.catchPhrase} <br></br>
        <b>@{company.name}</b> - <em>{company.bs}</em>
      </div>
    );
  }
}

class UserCard extends React.Component  {
  render () {
    const user = this.props.user;
    const company = this.props.user.company;

    return (
      <div>
        <UserCardHeader user={user} />
        <UserCardBody company={company} />
      </div> 
     )
  }
}

class UserTable extends React.Component {
  
  renderCards () {
    return  this.props.users.map(function(user) {
      return (
        <tr key={"user-" + user.id}>
          <td>
            <UserCard user={user} />
          </td>
        </tr>
      )
    })
  }

  render () {
    return (
      <table>
        <thead>
          <th>
            Users
          </th>
        </thead>
        <tbody>
          {this.renderCards()}
        </tbody>
      </table>
    )
  }
}

const USERS = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
];


ReactDOM.render(
    <UserTable users={USERS}/>,
    document.getElementById('root')
  );