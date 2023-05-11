import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';

function ImageBox({ src }) {
  return (

      <CardMedia
        component="img"
        image={src}
        alt="image"
	elevation={2}
        sx={{
          width: 155,
          
          objectFit: "cover",
	  ':hover':{
	    boxShadow:20,
	  },
	  borderRadius:"3px",
        }}
      />

  )
}

export default ImageBox;

