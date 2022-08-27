import * as React from 'react';
import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { img_500, unavailable, unavailableLandscape } from "../../config/config";
import { Button } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Modal.css"
import Carousel from './Carousel/Carousel';

const style = {
  position: 'absolute',
  width: "90%",
  height: "85%",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: "#004f94",
  color:"white",
  borderRadius: "10px",
  border: '2px solid white',
  boxShadow: 24,
  padding:"20px"
};

export default function Modals({children, media_type, id}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content, setContent] = React.useState()
  const [video, setVideo] = React.useState()

  const fetchData = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    console.log(data)
    setContent(data)
  }

  const fetchVideo = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);

    // console.log(data)
    setVideo(data.results[0]?.key)
  }

  React.useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="media" onClick={handleOpen}>{children}</div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {content && (
              <div className="modal">
                <img src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  } alt={content.name || content.title}
                  className="poster_potrait"
                  />
                  <img
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={content.name || content.title}
                  className="poster_landscape"
                />
                <section className='about'>
                  <span className="about_title">
                  {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  {content.tagline && (
                    <span className="tagline">'{content.tagline}'</span>
                  )}
                  <span className="about_info">
                    {content.overview}
                  </span>

                  <article>
                    <Carousel media_type={media_type} id={id}/>
                  </article>

                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
                </section>
              </div>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
