import PropTypes from "prop-types";
import React from "react";
import { isBrowser, isMobile } from "react-device-detect";
import ItemsListBanner from "./Items-list-banner";
import Breadcrumbs from "./Breadcrumbs";
import ItemsListSidebar from "./Items-list-sidebar";
import Paginator from "./Paginator";
import EachItemInList from "./Each-item-in-list";
import LoadingGif from "./Loading-gif";
import ButtonLinkGenderPage from "./Button-link-gender-page";
//import img1 from "../img/img1";
import { Container, Row, Col } from "reactstrap";

const propTypes = {
  listIsLoading: PropTypes.bool.isRequired,
  FilteredSortedList: PropTypes.array.isRequired,
  keywordsForFilter: PropTypes.array.isRequired,
  oneKeywordForFilter: PropTypes.func.isRequired,
  currentPageHandler: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  itemsMaxPage: PropTypes.number.isRequired,
  dispatchSize: PropTypes.func.isRequired,
  sortSizeForFilter: PropTypes.string.isRequired,
  sortArgsForFilter: PropTypes.string.isRequired,
  dispatchToSortList: PropTypes.func.isRequired,
  keywordsSelectAction: PropTypes.func.isRequired,
  categoriesProducts: PropTypes.object.isRequired,
  actionPriceRangeFilter: PropTypes.func.isRequired,
  reducerPriceRangeFilter: PropTypes.number.isRequired,
  actionFillFilters: PropTypes.func.isRequired,
};

const styles = {
  spaceColumn: {
    marginLeft: "25px",
    marginRight: "25px",
    marginBottom: "50px",
  },
  fontSize: {
    fontSize: "15px",
  },
  marginLeftBtn: {
    marginLeft: "30px",
  },
  containerPaddingTop: {
    paddingTop: "35px",
  },
};

const ItemsList = ({
  match,
  listIsLoading,
  FilteredSortedList,
  keywordsForFilter,
  oneKeywordForFilter,
  currentPageHandler,
  currentPage,
  itemsMaxPage,
  dispatchSize,
  sortSizeForFilter,
  sortArgsForFilter,
  dispatchToSortList,
  keywordsSelectAction,
  categoriesProducts,
  actionPriceRangeFilter,
  reducerPriceRangeFilter,
  actionFillFilters,
}) => {
  const { gender } = match.params;
  const listLength = FilteredSortedList.length;

  const loading_logic = listIsLoading && <LoadingGif />;

  const pagination =
    Math.ceil(listLength / itemsMaxPage) > 1 ? (
      <Paginator
        maxPages={Math.ceil(listLength / itemsMaxPage)}
        currentPage={currentPage}
        itemsMaxPage={itemsMaxPage}
        onPageChange={currentPageHandler}
      />
    ) : (
      currentPage > 1 && (() => currentPageHandler("empty"))()
    );

  const itemsListByGender_logic = (
    <Col md={{ size: 9, order: 1 }}>
      {listIsLoading === false && <i>Results: {listLength}</i>}
      {FilteredSortedList.length === 0 && listIsLoading === false && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>
            <i>Select a category: </i>{" "}
          </h2>
          <ButtonLinkGenderPage gender="merchandise" />
          <ButtonLinkGenderPage gender="artwork" />
        </div>
      )}

      <Row>
        {/* {loading_logic} if list is loading show loader */}
        <a href="https://imgur.com/IavHu1B">
          <img
            src="https://i.imgur.com/IavHu1Bb.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/2D1tkR1">
          <img
            src="https://i.imgur.com/2D1tkR1b.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/4qTHXcI">
          <img
            src="https://i.imgur.com/4qTHXcIb.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/pp6g9Yi">
          <img
            src="https://i.imgur.com/pp6g9Yib.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/NTgAsUa">
          <img
            src="https://i.imgur.com/NTgAsUab.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/SIB1mz4">
          <img
            src="https://i.imgur.com/SIB1mz4b.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/g5cWB2K">
          <img
            src="https://i.imgur.com/g5cWB2Kb.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/onQVHzo">
          <img
            src="https://i.imgur.com/onQVHzob.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/CbVWmvq">
          <img
            src="https://i.imgur.com/CbVWmvqb.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/tgtNESt">
          <img
            src="https://i.imgur.com/tgtNEStb.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/DtgXZbQ">
          <img
            src="https://i.imgur.com/DtgXZbQb.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/m7LPlf9">
          <img
            src="https://i.imgur.com/m7LPlf9b.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/ZMymS7R">
          <img
            src="https://i.imgur.com/ZMymS7Rb.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/lRETiND">
          <img
            src="https://i.imgur.com/lRETiNDb.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/Ie7kKrT">
          <img
            src="https://i.imgur.com/Ie7kKrTb.png"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/LUqSGt2">
          <img
            src="https://i.imgur.com/LUqSGt2b.png"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/X1yLRC3">
          <img
            src="https://i.imgur.com/X1yLRC3b.png"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/7qUCiIU">
          <img
            src="https://i.imgur.com/7qUCiIUb.png"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/gdbeou2">
          <img
            src="https://i.imgur.com/gdbeou2b.png"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/qsV93O5">
          <img
            src="https://i.imgur.com/qsV93O5b.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/HOl2cMn">
          <img
            src="https://i.imgur.com/HOl2cMnb.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/fKbJxik">
          <img
            src="https://i.imgur.com/fKbJxikb.png"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/dGgo73E">
          <img
            src="https://i.imgur.com/dGgo73Eb.png"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/Z5dFNEc">
          <img
            src="https://i.imgur.com/Z5dFNEcb.png"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/kSqvJHP">
          <img
            src="https://i.imgur.com/kSqvJHPb.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/Fri1wqS">
          <img
            src="https://i.imgur.com/Fri1wqSb.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/QvQMrUL">
          <img
            src="https://i.imgur.com/QvQMrULb.png"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/boK6ZFa">
          <img
            src="https://i.imgur.com/boK6ZFab.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/fzAoTNw">
          <img
            src="https://i.imgur.com/fzAoTNwb.png"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/uZ3Niq6">
          <img
            src="https://i.imgur.com/uZ3Niq6b.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/Sd4oRr8">
          <img
            src="https://i.imgur.com/Sd4oRr8b.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/fOTiVxp">
          <img
            src="https://i.imgur.com/fOTiVxpb.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/XkKvz8j">
          <img
            src="https://i.imgur.com/XkKvz8jb.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/QLDQrP9">
          <img
            src="https://i.imgur.com/QLDQrP9b.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/CdsevyT">
          <img
            src="https://i.imgur.com/CdsevyTb.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/EbUGUr7">
          <img
            src="https://i.imgur.com/EbUGUr7b.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/fSb4y3z">
          <img
            src="https://i.imgur.com/fSb4y3zb.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/rM3Yloc">
          <img
            src="https://i.imgur.com/rM3Ylocb.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/NiQpMfP">
          <img
            src="https://i.imgur.com/NiQpMfPb.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/XZKqEf2">
          <img
            src="https://i.imgur.com/XZKqEf2b.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/Oid0E3K">
          <img
            src="https://i.imgur.com/Oid0E3Kb.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/9DAcKbu">
          <img
            src="https://i.imgur.com/9DAcKbub.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/Dzmk66c">
          <img
            src="https://i.imgur.com/Dzmk66cb.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/WuMxn4x">
          <img
            src="https://i.imgur.com/WuMxn4xb.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/Ew1GrlF">
          <img
            src="https://i.imgur.com/Ew1GrlFb.jpg"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/abTvnCe">
          <img
            src="https://i.imgur.com/abTvnCeb.png"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/0Jgxhac">
          <img
            src="https://i.imgur.com/0Jgxhacb.png"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/ToQh2n8">
          <img
            src="https://i.imgur.com/ToQh2n8b.png"
            title="source: imgur.com"
          />
        </a>
        <a href="https://imgur.com/FQ1bnE2">
          <img
            src="https://i.imgur.com/FQ1bnE2b.png"
            title="source: imgur.com"
          />
        </a>
        <a href="https://www.paypal.com/paypalme/Gerweck">
          <img
            src="https://i.imgur.com/98jMCaJh.png"
            title="source: imgur.com"
          />
        </a>
        ,
        <EachItemInList
          FilteredSortedList={FilteredSortedList}
          currentPage={currentPage}
          itemsMaxPage={itemsMaxPage}
          currentPageHandler={currentPageHandler}
          listIsLoading={listIsLoading}
        />
      </Row>
      {pagination}
    </Col>
  );

  const sideBar = isBrowser && (
    <Col md="3" xs="12">
      <Row>
        <ItemsListSidebar
          keywordsForFilter={keywordsForFilter}
          dispatchSize={dispatchSize}
          sortSizeForFilter={sortSizeForFilter}
          keywordsSelectAction={keywordsSelectAction}
          categoriesProducts={categoriesProducts}
          actionPriceRangeFilter={actionPriceRangeFilter}
          reducerPriceRangeFilter={reducerPriceRangeFilter}
          oneKeywordForFilter={oneKeywordForFilter}
          gender={gender}
          actionFillFilters={actionFillFilters}
        />
      </Row>
    </Col>
  );

  return (
    <div>
      <ItemsListBanner
        gender={gender}
        reducerPriceRangeFilter={reducerPriceRangeFilter}
        sortSizeForFilter={sortSizeForFilter}
        keywordsForFilter={keywordsForFilter}
        sortArgsForFilter={sortArgsForFilter}
      />
      <Breadcrumbs
        selectedCategory={keywordsForFilter}
        keywordsForFilter={keywordsForFilter}
        sortArgsForFilter={sortArgsForFilter}
        dispatchToSortList={dispatchToSortList}
        gender={gender}
        backgroundColor={"#072a48"}
        textColor={"white"}
        marginTop={-34}
        showSortBtn={keywordsForFilter.length > 0}
        showFilterBtn={isMobile}
        dispatchSize={dispatchSize}
        sortSizeForFilter={sortSizeForFilter}
        keywordsSelectAction={keywordsSelectAction}
        categoriesProducts={categoriesProducts}
        actionPriceRangeFilter={actionPriceRangeFilter}
        reducerPriceRangeFilter={reducerPriceRangeFilter}
        listLength={listLength}
      />
      <Container style={styles.containerPaddingTop}>
        <Row>
          {itemsListByGender_logic} {/* show list depending on gender  */}
          {sideBar}
        </Row>
      </Container>
    </div>
  );
};

ItemsList.propTypes = propTypes;

export default ItemsList;
