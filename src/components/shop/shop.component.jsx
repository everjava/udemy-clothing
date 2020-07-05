import React, { Component } from "react";
import data from "./data.json";
import CollectionPreview from "../collection-preview/collection-preview.component";

export default class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: data
    };
  }

  render() {
    const collections = this.state.collections;
    return (
      <div className="shop-page">
        {collections.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
