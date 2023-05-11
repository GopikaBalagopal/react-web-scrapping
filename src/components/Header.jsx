import { AppBar, Button, TextField, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { getProducts } from "../utils/utils";

const Header = (props) => {
    const {debounceValidation, setProducts} = props;
    const [value, setValue] = useState('')

    const handleSubmit = async () => {
        getProducts(value).then(res => {
            console.log({res})
            setProducts(res.data.data);
        })
        .catch(e => {
            console.log(e)
        })
      };

    const handleChange = (e) => {
        setValue(e.target.value);
        debounceValidation(e.target.value)
    }
    return(
        <AppBar position="static">
        <Toolbar>
          <TextField
            variant="filled"
            label="Search"
            size="small"
            sx={{ marginLeft: 'auto' }}
            value={value}
            onChange={handleChange}
          />
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Submit
          </Button>
        </Toolbar>
      </AppBar>
    )
}

export default Header