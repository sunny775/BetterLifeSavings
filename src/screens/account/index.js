import React from "react";
import { Card, Row, Col, Button, Table, Image, Badge } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const formatDate = (iso) => {
  var options = { year: 'numeric', month: 'short', day: 'numeric' };
  const date = new Date(iso).toLocaleDateString('en-US', options);
  const time = new Date(iso).toLocaleTimeString('en-US');
  return {
    date,
    time
  }
}

const Acct = styled(Row)`
  background: #eee;
  margin-top: 100px;
  padding-top: 20px;
  padding-bottom: 50px;
`;

const ItemCard = styled(Card)`
  border: none;
  transition: all 0.3s ease-in;
  border-left: 2px solid orange;
  margin-top: 20px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
`;
const Profile = styled(ItemCard)`
  border-left: none;
`;
const Header = styled(ItemCard)`
  background: rgba(0, 0, 0, 0.2);
  border-left: none;
  position: relative;
`;
const Transactions = styled(ItemCard)`
  border-left: none;
`;

const Div = styled.div`
  margin: auto;
  width: 120px;
  height: 120px;
  border: 4px solid #e0e0e0;
  border-radius: 50%;
  position: relative;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WhenUser = styled.div`
  margin: auto;
  width: 120px;
  height: 120px;
  border: 4px solid #e0e0e0;
  border-radius: 50%;
  position: relative;
  background-image: url(${(props) => props.url});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Edit = styled.div`
  width: fit-content;
  margin: 20px auto;
`;

const Text = styled.div`
  opacity: 1;
  text-align: center;
  cursor: pointer;
  padding: 7px 0px;
  border-radius: 30px;
  &:hover {
    background: orange;
    color: white;
  }
  &:hover:nth-child(2) {
    background: none;
    color: black;
    cursor: context-menu;
  }
  &:hover:nth-child(3) {
    background: none;
    color: black;
    cursor: context-menu;
  }
  &:hover:nth-child(4) {
    background: none;
    color: black;
    cursor: context-menu;
  }
`;
const Span = styled.span`
  margin: 0 20px;
`;
const Balance = styled(Col)`
  color: white;
  letter-spacing: 3px;
  background: rgba(0, 0, 0, 0.4);
  padding: 3px 15px;
  border-radius: 15px;
  font-weight: bold;
`;

//{<Image src={Img} alt="profile picture" width={120} height={120} roundedCircle />}
const Account = () => {
  const {
    userDetails,
    signOut,
    openDeposit,
    openWithdrawal,
    userTransactions,
  } = React.useContext(AuthContext);
  const { displayName, state, url, email, phoneNumber } = userDetails;

  const getTransactions = () => {
    if (userTransactions.length) {
      userTransactions.sort(function(a, b){
        if(a.date < b.date) { return -1; }
        if(a.date > b.date) { return 1; }
        return 0;
    })
      return userTransactions.reverse().map((e, i) => {
       const {date, time} = formatDate(e.date)
        return (
          <tr key={e.id}>
            <td>{i + 1}</td>
            <td>{e.type}</td>
            <td>{`${date} / ${time}`}</td>
            <td>₦{e.amount}</td>
            <td>
              <Badge variant="secondary">Requested</Badge>
            </td>
          </tr>
        );
      });
    }
  };

  return (
    <Acct>
      <Col md={3}>
        <Profile>
          <Card.Body>
            {url ? (
              <WhenUser url={url}>
                <Link to={`/settings/${phoneNumber}/edit-profile`}>
                  <FontAwesomeIcon icon="pencil-alt" color="bue" />
                </Link>
              </WhenUser>
            ) : (
              <Div>
                <Link to={`/settings/${phoneNumber}/edit-profile`}>
                  <FontAwesomeIcon icon="pencil-alt" color="grey" />
                </Link>
              </Div>
            )}

            <Text className=" top mt-3">{displayName || ""}</Text>
            <Text className=" top">{email || ""}</Text>
            <Text className=" top">{state || ""}</Text>
            <Edit>
              <Button variant="default" size="sm">
                <Link to={`/settings/${phoneNumber}/edit-profile`}>
                  {" "}
                  <small>Edit Profile</small>
                </Link>
                <span className="ml-2">
                  <FontAwesomeIcon icon="edit" color="grey" />
                </span>
              </Button>
            </Edit>
            <br />
            <Text onClick={() => openDeposit()}>Deposit fund</Text>
            <Text onClick={() => openWithdrawal()}>Widthdraw fund</Text>
            <Text>Get support</Text>
            <Text onClick={() => signOut()}>Logout</Text>
          </Card.Body>
        </Profile>
      </Col>

      <Col md={9}>
        <Header>
          <Card.Body>
            <Card.Title className="text-center text-primary">
              <strong>DASHBOARD</strong>
            </Card.Title>
            <div className="text-left row m-2">
              <Col sm={6}>ACCOUNT NUMBER:</Col>
              <Balance sm={6}>{phoneNumber || ""}</Balance>
            </div>
            <div className="text-left row m-2">
              <Col sm={6}>BALANCE:</Col>
              <Balance sm={6}>₦175,500.00</Balance>
            </div>
          </Card.Body>
        </Header>
        <Transactions>
          <Card.Body>
            <Card.Title className="text-center text-primary">
              <strong>Transaction History</strong>
            </Card.Title>
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>{getTransactions()}</tbody>
            </Table>
          </Card.Body>
        </Transactions>
      </Col>
    </Acct>
  );
};
export default Account;
