import Container from '@mui/material/Container';
import ImageBox from "./ImageBox.jsx";
import Masonry from '@mui/lab/Masonry';
import { searchImage } from '../api/CallingApi.jsx';
import { useEffect, useState } from "react";
import SearchBox from './SearchBox.jsx'

export default function ImageContainer() {

  const randomSearchedItem = ["beutiful sky", "rain", "mountain", "cute girl", "wallpaper", "sunrise", "building", "masjid", "alone", "sad", "workout", "cat", "birds"].at(Math.random() * 12);

  const [value, setValue] = useState([]);

  const [input, setInput] = useState(randomSearchedItem);

  function getText(data) {
    setInput(data);
  }


  useEffect(() => {

    searchImage(input).then((res) => {

      setValue(res.results);

    });


  }, [input])

  return (
    <Container sx={{
      m: 0, p: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <SearchBox getText={getText} />
      <Masonry columns={{ xs: 2, sm: 4 }} sx={{
        mt: "15px",
        p: "5px",
      }} spacing={1}>
        {
          value.map((val, index) => {
            const sc = val.urls.thumb;
            return (
              <ImageBox src={sc} key={index} />
            )
          })
        }

      </Masonry>
    </Container>
  )
}

