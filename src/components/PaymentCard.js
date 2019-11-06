import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const PaymentCard = (props) => {
  return (
    <Card className="paymentCard">
       <CardContent>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography color="textSecondary">
        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
        </Typography>
       </CardContent>
    </Card>
  )
}

export default PaymentCard;
