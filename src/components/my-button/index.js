import React from 'react';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const CustomButton = styled(Button)({
  background: '#90c52d',
  border: 0,
  borderRadius: 30,
  color: 'white',
  fontWeight: 'bold',
  padding: '15px 80px',
});

export const MyButton = ({ title }) => {

  return (

    <CustomButton type="submit">{title}</CustomButton>

  );

}