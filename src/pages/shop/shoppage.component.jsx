import React, { Component } from 'react'
// import {connect} from 'react-redux'
// import {createStructuredSelector} from 'reselect'
import SHOP_DATA from '../../redux/shop/shop.data'
import shopReducer from '../../redux/shop/shop.data'
// import {selectCollections} from '../../redux/shop/shop.selectors'
// import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
import { Route } from 'react-router-dom';

const ShopPage = ({ match }) => {
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview} ></Route>
            <Route path={`${match.path}/:categoryId`} component={CollectionPage}></Route>
        </div>
    )
}


export default ShopPage;