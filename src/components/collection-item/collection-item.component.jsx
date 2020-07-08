import React from 'react'
import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';


const CollectionItem = ({ item, addItemX }) => {
  
  const {  name, price, imageUrl} = item
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />

      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>R${price}</span>
      </div>
      <CustomButton inverted onClick={()=> addItemX(item)} className="custom-button" >Add to cart</CustomButton>
    </div>
  )};

const mapDispatchToProps = dispatch => ({
  addItemX: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps) (CollectionItem)
