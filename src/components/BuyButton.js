import React from 'react';
import PropTypes from 'prop-types';
import classes from '../styles/Features.module.css';

const BuyButton = props => {
  const showBuyConfirmation = props.data.buyButtonJustClicked;
  const colorOptionsArray = props.data.data.colorOptions;
  const selectedStrapObject = colorOptionsArray.find(element => element.id === props.data.currentlySelectedStrapId);
  const selectedStrapDescription = selectedStrapObject.styleName;
  const confirmationMessage = `CONFIRM: You have chosen the ${selectedStrapDescription.toLowerCase()}.`;

  return (
    <div>
      <button
      className={classes.BuyNow}
      onClick={() => props.data.onBuyButtonClick()}
    >
      Buy Now
    </button>
    { showBuyConfirmation ? <p>{confirmationMessage}</p> : null}
    </div>
  );
};

BuyButton.propTypes = {
  data: PropTypes.object,
};

export default BuyButton;
