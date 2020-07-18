import React from "react";
import CollectionPage from "../../pages/collection/collection.component";
import CollectionsOverview from "../collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import WithSpinner from '../with-spinner/with-spinner.component'
import { createStructuredSelector } from "reselect";
import {selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors'
//lesson170
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPagewWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

 state = {
   loading : true
 }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionFetching,isCollectionsLoaded } = this.props;
    const {loading} = this.state;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} 
          render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionsLoaded} {...props} /> } />

        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionsPagewWithSpinner isLoading={! isCollectionsLoaded} {...props} /> } />
      </div>
    );
  }
}

const mapDipatchToProps = dispatch => ({
  //updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded :selectIsCollectionsLoaded
})

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(ShopPage);
