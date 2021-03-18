import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  oneKeywordForFilter
} from '../actions/DataFetchingActions';
import {
  Row,
  Col,
  Button,
  Card,
  CardImg,
  CardBody,
  Alert,
  Container
} from 'reactstrap';

const styles = {
  cardTitle: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '20px'
  },
  cardBtn: {
    textAlign: 'center'
  },
  card: {
    marginBottom: '20px'
  }
};

const categoriesMenData = [
  {
    imgSrc: "/img3/A2-P12.jpg",
    cardTitle: 'Polos',
    linkCategory: 'Polos'
  },
  {
    imgSrc: "/img/A1-P4.jpg",
    cardTitle: 'Shirts',
    linkCategory: 'Shirts'
  },
  {
    imgSrc: "/img3/A2-P10.jpg",
    cardTitle: 'Pants',
    linkCategory: 'Pants'
  },
  {
    imgSrc: "/img3/A1-P1.jpg",
    cardTitle: 'Jackets',
    linkCategory: 'Jackets'
  }
];

const categoriesWomenData = [
  {
    imgSrc: "/img/anime-inspired-t-shirt-design-template-with-a-cute-maid-illustrations-2294n.png",
    cardTitle: 'Dresses',
    linkCategory: 'Dresses'
  },
  {
    imgSrc: "/img/t-shirt-design-maker-featuring-an-illustration-of-a-cultured-woman-2276c.png",
    cardTitle: 'Cardigans',
    linkCategory: 'Cardigans'
  },
  {
    imgSrc: "/img/space-themed-t-shirt-design-template-with-a-retro-style-2255.png",
    cardTitle: 'Tops',
    linkCategory: 'Tops'
  },
  {
    imgSrc: "/img/t-shirt-design-generator-featuring-an-aggressive-shark-and-a-sardonic-quote-2335i.png",
    cardTitle: 'Trench Coats',
    linkCategory: 'Trench Coats'
  }
];

const decorationData = gender => gender === 'women' ? categoriesWomenData : categoriesMenData;

const eachCategory = (gender, oneKeywordForFilter) => (
  decorationData(gender).map(x => (
    <Col md='4' style={styles.card} key={x.cardTitle}>
      <Card>
        <div style={styles.cardBtn} onClick={() => oneKeywordForFilter(x.cardTitle)}>
          <Link to={`/productslist/${gender}/`}>
            <CardImg src={x.imgSrc} alt="Card image cap" style={{ boxShadow: '0px 0px 7px 0px rgba(0,0,0,0.75)' }} />
            <div style={{ position: 'absolute', top: '40%', textAlign: 'center', width: '100%', color: 'white', fontSize: '200%' }}>
              <b> {x.cardTitle} </b>
            </div>
          </Link>
        </div>

      </Card>
    </Col>
  ))
);


const ItemsListGenderHomepage = props => {
  const { gender } = props.match.params
  const { oneKeywordForFilter } = props
  return (
    <Container style={{ paddingTop: '30px', paddingBottom: '50px' }}>
      <Col md="12">
        <h1 style={{ fontSize: '40px', textAlign: 'center', padding: '20px' }}>Lets Shop!</h1>
        <Row>
          {eachCategory(gender, oneKeywordForFilter)}
        </Row>
      </Col>
    </Container>

  )
};

const mapDispatchToProps = dispatch => ({ oneKeywordForFilter: x => dispatch(oneKeywordForFilter(x)) });
const mapStateToProps = state => ({ oneKeywordForFilter: state.oneKeywordForFilter });

export default connect(mapStateToProps, mapDispatchToProps)(ItemsListGenderHomepage);
