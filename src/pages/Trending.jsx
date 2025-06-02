import { Navbar, Footer } from "../components/shared";
import "../pages/Trending.scss"; // SCSS файлды қосып жатырмыз

const Trending = () => {
  return (
    <>
      <Navbar />
      <div className="experts_advice_page">
        {/*<h1 className="experts_title">Мамандар кеңесі:</h1>*/}
        <div className="videos_grid">
        <div className="video_card">
  <iframe
    width="320"
    height="180"
    src="https://www.youtube.com/embed/5YxwHgr1zg4"
    title="Маман 1 кеңесі"
    allowFullScreen
    style={{ border: "none" }}
  ></iframe>
  <div className="video_caption">
    <strong>Талипова Зульфат Романкулқызы</strong>
    <p>Әлеуметтік салада 21 жыл еңбек өтілі бар педагог маман</p>
  </div>
</div>


<div className="video_card">
  <iframe
    width="320"
    height="180"
    src="https://www.youtube.com/embed/5gZAMSVCb5I"
    title="Маман 2 кеңесі"
    allowFullScreen
    style={{ border: "none" }}
  ></iframe>
  <div className="video_caption">
    <strong>Рахматуллина Ольга Викторовна</strong>
    <p>Еңбек терапиясының 10 жылдан астам өтілі бар нұсқаушысы</p>
  </div>
</div>


<div className="video_card">
  <iframe
    width="320"
    height="180"
    src="https://www.youtube.com/embed/fNEe38hJYxs"
    title="Маман 3 кеңесі"
    allowFullScreen
    style={{ border: "none" }}
  ></iframe>
  <div className="video_caption">
    <strong>Дуйсебекова Назымгуль Ергалиевна</strong>
    <p>Психолог</p>
  </div>
</div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Trending;
