import React from "react";
import Button from "@material-ui/core/Button";

const BonusesSubForm = ({ styles, values, handleBlur, handleChange }) => {
  return (
    <div className={styles.smallField}>
      <Button
      variant="text"
      color="primary"
      className={styles.buttonAddOffer}
      >
        add bonus
      </Button>
    </div>
  )
}

export default BonusesSubForm;
