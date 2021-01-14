import React, { useState } from "react";
import {
  Input,
  Segment,
  Menu,
  Grid,
  Icon,
  Message,
  Container
} from "semantic-ui-react";

export default function MgTool() {
  const [suggestionVisible, setSuggestionVisible] = useState(false);
  function showSuggestions(e) {
    if (e.target.value.length === 0) {
      setSuggestionVisible(false);
      return;
    }
    setSuggestionVisible(true);
  }

  return (
    <div>
      <Segment raised textAlign="left" style={{ marginBottom: "0px" }}>
        <Segment.Inline id="navbar">
          <Grid>
            <Grid.Row>
              <Grid.Column width={13}>
                <Input
                  focus
                  fluid
                  placeholder="Search medicines..."
                  onChange={e => showSuggestions(e)}
                />
              </Grid.Column>
              <Grid.Column width={3}>
                <Icon name="cart plus" size="large" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment.Inline>
      </Segment>
      {suggestionVisible ? (
        <SuggestionBox setSuggestionVisible={setSuggestionVisible} />
      ) : (
        <DrugVariant />
      )}
      <div style={{ background: "red", height: "20px", zIndex: "2" }}>
        <p>Checkout</p>
      </div>
    </div>
  );
}

function SuggestionBox({ setSuggestionVisible }) {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <Segment.Group textAlign="left" style={{ marginTop: "0px" }}>
      <Segment style={{ padding: "0px" }}>
        <Menu secondary>
          <Menu.Item
            name="Recent"
            active={activeItem === "logout"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="CLEAR ALL"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
              style={{
                color: "red",
                fontFamily: "bold",
                fontSize: "0.75em",
                marginRight: "12px"
              }}
            />
          </Menu.Menu>
        </Menu>
      </Segment>
      <Segment
        vertical
        textAlign="left"
        style={{
          paddingLeft: "14px",
          paddingBottom: "8px",
          paddingTop: "8px"
        }}
      >
        <span>
          <b>Paracetamol</b>
        </span>
      </Segment>
      <Segment
        vertical
        textAlign="left"
        style={{
          paddingLeft: "14px",
          paddingBottom: "8px",
          paddingTop: "8px"
        }}
      >
        <span>
          <b>Dolo 650 Tablet</b>
        </span>
      </Segment>
      <Segment
        vertical
        textAlign="left"
        style={{
          paddingLeft: "14px",
          paddingBottom: "8px",
          paddingTop: "8px"
        }}
      >
        <span onClick={() => setSuggestionVisible(false)}>
          <b>PCM Tablets</b>
        </span>{" "}
      </Segment>
    </Segment.Group>
  );
}

function DrugVariant() {
  return (
    <Container fluid textAlign="left" style={{ margin: "4px" }}>
      <Message
        name="bullhorn"
        header=""
        content="In case on 47 tablets, add 4 strips. We would call to confirm"
      />
      <Segment raised textAlign="left">
        <b>Dolo 650 Tablet </b>
        <br />
        Each Strip Contains 10 tablets.
        <br />
        <Icon
          inverted
          color="green"
          name="plus"
          className="btn-custom-quantity"
        />
        <Icon
          inverted
          color="red"
          name="minus"
          className="btn-custom-quantity"
        />
      </Segment>

      <Segment raised textAlign="left">
        <b>Dolo 650 Tablet </b>
        <br />
        Each Strip Contains 10 tablets.
        <br />
        <Icon
          inverted
          color="green"
          name="plus"
          className="btn-custom-quantity"
        />
        <Icon
          inverted
          color="red"
          name="minus"
          className="btn-custom-quantity"
        />
      </Segment>

      <Segment raised textAlign="left">
        <b>Dolo 650 Tablet </b>
        <br />
        Each Strip Contains 10 tablets.
        <br />
        <Icon
          inverted
          color="green"
          name="plus"
          className="btn-custom-quantity"
        />
        <Icon
          inverted
          color="red"
          name="minus"
          className="btn-custom-quantity"
        />
      </Segment>

      <Segment raised textAlign="left">
        <b>Dolo 650 Tablet </b>
        <br />
        Each Strip Contains 10 tablets.
        <br />
        <Icon
          inverted
          color="green"
          name="plus"
          className="btn-custom-quantity"
        />
        <Icon
          inverted
          color="red"
          name="minus"
          className="btn-custom-quantity"
        />
      </Segment>

      <Segment raised textAlign="left">
        <b>Dolo 650 Tablet </b>
        <br />
        Each Strip Contains 10 tablets.
        <br />
        <Icon
          inverted
          color="green"
          name="plus"
          className="btn-custom-quantity"
        />
        <Icon
          inverted
          color="red"
          name="minus"
          className="btn-custom-quantity"
        />
      </Segment>

      <Segment raised textAlign="left">
        <b>Dolo 650 Tablet </b>
        <br />
        Each Strip Contains 10 tablets.
        <br />
        <Icon
          inverted
          color="green"
          name="plus"
          className="btn-custom-quantity"
        />
        <Icon
          inverted
          color="red"
          name="minus"
          className="btn-custom-quantity"
        />
      </Segment>

      <Segment raised textAlign="left">
        <b>Dolo 650 Tablet </b>
        <br />
        Each Strip Contains 10 tablets.
        <br />
        <Icon
          inverted
          color="green"
          name="plus"
          className="btn-custom-quantity"
        />
        <Icon
          inverted
          color="red"
          name="minus"
          className="btn-custom-quantity"
        />
      </Segment>

      <Segment raised textAlign="left">
        <b>Dolo 650 Tablet </b>
        <br />
        Each Strip Contains 10 tablets.
        <br />
        <Icon
          inverted
          color="green"
          name="plus"
          className="btn-custom-quantity"
        />
        <Icon
          inverted
          color="red"
          name="minus"
          className="btn-custom-quantity"
        />
      </Segment>
    </Container>
  );
}
