import React from 'react';
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'; 
class ShopPage extends React.Component {
    constructor() {
        super()
        this.state = {
            colleection: SHOP_DATA
        }
    }
    render() {
        const {colleection} = this.state
        return (
            <div className="shop-page">
                {
                    colleection.map(({id, ...otherCollectionProps})=>{
                        return <CollectionPreview key={id} {...otherCollectionProps} />
                    })
                }
            </div>
        )
    }
}
export default ShopPage;