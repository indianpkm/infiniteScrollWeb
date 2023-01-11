import { styled } from '@mui/system'
import {React,CSSProperties} from 'react'
import { PacmanLoader } from 'react-spinners'

const Loader=styled(PacmanLoader)`

`


const Loading = () => {
  const override: CSSProperties = {
    display: "block",
    margin: "50px 500px 10px",
    borderColor: "red",
  };
  return (
    <PacmanLoader color={'#36D7B7'}
    cssOverride={override} size={100} /> 

  )
}

export default Loading