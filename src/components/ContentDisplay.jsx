export default function ContentDisplay({ content }) {
  return (
    <div className="text"> {/* style/style-classes бірдей болу үшін */}
      <div className="media">
        {content.media.map((item, idx) => (
          <div
            key={idx}
            className={`media-item ${idx % 2 === 0 ? "left" : "right"}`}
          >
            {item.type === "image" ? (
              <img
                src={process.env.PUBLIC_URL + item.src}
                alt="Альбом"
              />
            ) : (
              <video
                src={process.env.PUBLIC_URL + item.src}
                controls
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
