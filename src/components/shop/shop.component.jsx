import React from "react";
 import CollectionPage  from '../../pages/collection/collection.component'
import CollectionsOverview from "../collections-overview/collections-overview.component";
 import {Route} from 'react-router-dom'

const ShopPage = ({ match }) => {  
  console.log(match)
  return (
    <div className="shop-page">
     <Route exact path={`${match.path}`} component={CollectionsOverview}  />

     <Route path={`${match.path}/:collectionId`}  component={CollectionPage } />
    </div>
  );
};

 
export default  ShopPage ;
