import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";
import SidebarButtons from "../components/shared/buttons/SidebarButtons";
import ReactMarkdown from "react-markdown";
import mediaContent from "../data/mediaContent.json";
import FsLightbox from "fslightbox-react"; // ✅ FsLightbox қостық
import "../pages/MethodologyPage.scss";

export default function MethodologyPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const initialTab = parseInt(searchParams.get("tab")) || 0;

  const [selected, setSelected] = useState(initialTab);
  const [markdown, setMarkdown] = useState("");

  // Музыка ойнату
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  // "Альбом" беті ашылғанда дыбыс әрдайым қосулы күйде
  useEffect(() => {
    if (selected === 3) {
      setIsMuted(false);
    }
  }, [selected]);

  // URL жаңарту
  useEffect(() => {
    navigate(`?tab=${selected}`, { replace: true });
  }, [selected, navigate]);

  // Markdown жүктеу
  useEffect(() => {
    if (selected < 3) {
      fetch(`/documents/document${selected + 1}.md`)
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    }
  }, [selected]);

  // FsLightbox үшін
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const openLightbox = (index) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index + 1,
    });
  };

  return (
    <>
      <Navbar />
      <div className="methodology-page">
        <SidebarButtons
          onSelect={setSelected}
          selected={selected}
          buttons={[
            "Құмды арт-терапия",
            "«Сиқырлы бояулармен» сурет салу",
            "Арт-терапия",
            "Альбом",
          ]}
          isMuted={isMuted}
          toggleMute={toggleMute}
        />

        <div className="methodology-container">
          {selected < 3 ? (
            <div className="text">
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
          ) : (
            <>
              {/* Музыка */}
              <audio
                ref={audioRef}
                src="/assets/icons/methodology/music.mp3"
                loop
                autoPlay
              />

              {/* Фото/Видео */}
              <div className="media">
                {mediaContent.media.map((item, idx) => (
                  <div
                    key={idx}
                    className={`media-item ${idx % 2 === 0 ? "left" : "right"}`}
                    onClick={() => openLightbox(idx)}
                    style={{ cursor: "zoom-in" }}
                  >
                    {item.type === "image" ? (
                      <img src={item.src} alt="Альбом" />
                    ) : (
                      <video src={item.src} controls />
                    )}
                  </div>
                ))}
              </div>

              {/* FsLightbox */}
              <FsLightbox
                toggler={lightboxController.toggler}
                sources={mediaContent.media.map((item) => item.src)}
                slide={lightboxController.slide}
                types={mediaContent.media.map((item) =>
                  item.type === "image" ? "image" : "video"
                )}
              />
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
