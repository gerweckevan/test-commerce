import PropTypes from "prop-types";
import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const propTypes = {
  sendOneKeyword: PropTypes.func.isRequired,
  gender: PropTypes.string.isRequired,
  itemsListByGender: PropTypes.array.isRequired,

  handleSubMenuExit: PropTypes.func.isRequired,
};

const styles = {
  subMenu: {
    width: "100%",
    height: "250px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "2",
  },
  subMenuImage: {
    width: "100%",
    maxHeight: "300px",
    padding: "70px",
  },
  subMenuCategories: {
    paddingTop: "70px",

  },
  subMenuCategoriesUl: {
    listStyleType: "none",
    fontSize: "15px",
  },
  subMenuCategory: {
    color: "#343a40",
  },
};

const Submenu = ({
  sendOneKeyword,
  gender,
  itemsListByGender,

  handleSubMenuExit,

}) => (
  <div style={styles.subMenu} onMouseLeave={handleSubMenuExit}>
    <Row>
      <Col md="3">

        <img
          alt={gender}
          style={styles.subMenuImage}
          src={
            gender === "woman"
              ? "https://i.imgur.com/TmWDhVYt.png?1"
              : "https://i.imgur.com/TmWDhVYt.png?1"
          }
        />
      </Col>
      <Col style={styles.subMenuCategories}>
        <p>
          <strong>Categories</strong>
        </p>
        <div style={styles.subMenuCategoriesUl}>
          {itemsListByGender.map((x) => (
            <div key={x} onClick={() => sendOneKeyword(x)}>
              <Link
                to={`/productslist/${gender}`}
                style={styles.subMenuCategory}
              >
                {" "}
                {x}
              </Link>
            </div>
          ))}

        </div>
      </Col>
    </Row>
  </div>
);

Submenu.propTypes = propTypes;

export default Submenu;
