import React from "react";
import CollectionPage from "../../pages/collection/collection.component";
import CollectionsOverview from "../collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from '../with-spinner/with-spinner.component'

//lesson170
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPagewWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

 state = {
   loading : true
 }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionRef = firestore.collection("collections");
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading: false})
    });
  }

  render() {
    const { match } = this.props;
    const {loading} = this.state;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} 
          render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} /> } />

        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} /> } />
      </div>
    );
  }
}

const mapDipatchToProps = dispatch => ({
  updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
});

export default connect(
  null,
  mapDipatchToProps
)(ShopPage);
