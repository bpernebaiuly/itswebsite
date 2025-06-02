export default function SidebarButtons({ onSelect, selected, buttons, isMuted, toggleMute }) {
  return (
    <div className="methodology-buttons">
      {buttons.map((label, idx) => (
        <div key={idx} style={{ display: "flex", alignItems: "center" }}>
          <button
            className={selected === idx ? "active" : ""}
            onClick={() => onSelect(idx)}
          >
            {label}
          </button>
          {/* ✅ Альбом батырмасы ашылғанда ғана mute батырмасын көрсетеміз */}
          {label === "Альбом" && selected === idx && (
            <button onClick={toggleMute} className="mute-button">
              {isMuted ? "🔇" : "🔊"}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
