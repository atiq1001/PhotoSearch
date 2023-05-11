import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState } from "react";


export default function SearchBox({ getText }) {

  const [text, setText] = useState("");


  return (
    <Grid container spacing={2} my={1}>

      <Grid item xs>

        <TextField
          label="Search"
          type="search"
          size="small"
          fullWidth={true}
          sx={{ mx: 2, }}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(ev) => {
            console.log(`Pressed keyCode ${ev.key}`);
            if (ev.key === 'Enter') {
              getText(text);
              ev.target.blur();
            }
          }} />

      </Grid>

      <Grid item>

        <Button
          variant="contained"
          sx={{ mx: 2 }}
          onClick={() => getText(text)}>
          Search
        </Button>


      </Grid>

    </Grid>

  )
}

