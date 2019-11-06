import React from 'react'
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const TeamIcon = (props) => {
  return (
    <Card className={props.classNameParam}>
      <CardContent>
        <Typography variant="h5" component="h2">{props.title}</Typography>
        <Typography color="textSecondary">{props.content}</Typography>
      </CardContent>
    </Card>
  )
}

export default TeamIcon
