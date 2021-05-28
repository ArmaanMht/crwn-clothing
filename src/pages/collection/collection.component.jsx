import React from 'react'
import {connect } from 'react-redux'
import { defaultMemoize } from 'reselect'
import CollectionItem from '../../components/collection-item/collection-item.component'
import {selectCollection} from '../../redux/shop/shop.selectors'
import './collection.styles.scss'   
const CollectionPage = ({collection,match}) => {
    const {title,items}=collection;
    console.log(collection,match)
    return (
        <div className="collection-page">
            <h2 className='title'>{title}</h2>
            <div className="items">
            {
                items.map((item)=>(
                    <CollectionItem key={items.id} item={item}></CollectionItem>
                ))

            }</div>
        </div>
    )
}

const mapStateTProps=(state,ownProps)=>({
    collection:selectCollection(ownProps.match.params.categoryId)(state)
})
export default connect(mapStateTProps)(CollectionPage);