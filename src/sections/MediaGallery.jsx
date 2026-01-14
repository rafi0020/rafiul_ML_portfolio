
export default function MediaGallery({ media }){
  if(!media || (!media.images?.length && !media.videos?.length)) {
    // Show placeholder when no media
    return (
      <div className="media-gallery">
        <div className="media-item" style={{
          background: 'linear-gradient(135deg, var(--bg-subtle) 0%, var(--bg-muted) 100%)',
          padding: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '16px',
          color: 'var(--text-muted)'
        }}>
          <svg width="64" height="64" viewBox="0 0 16 16" fill="currentColor" opacity="0.5">
            <path d="M4.502 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
            <path d="M14.002 13a2 2 0 01-2 2h-10a2 2 0 01-2-2V5A2 2 0 012 3a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-1.998 2zM14 2H4a1 1 0 00-1 1h9.002a2 2 0 012 2v7A1 1 0 0015 11V3a1 1 0 00-1-1zM2.002 4a1 1 0 00-1 1v8l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71a.5.5 0 01.577-.094l1.777 1.947V5a1 1 0 00-1-1h-10z"/>
          </svg>
          <span>Project Demo Coming Soon</span>
        </div>
      </div>
    );
  }
  
  return (
    <div className="media-gallery">
      {media.images?.map((src, idx) => (
        <div key={src} className="media-item">
          <img src={src} alt={`Project screenshot ${idx + 1}`} loading="lazy"/>
        </div>
      ))}
      {media.videos?.map((src, idx) => (
        <div key={src} className="media-item">
          <video controls preload="metadata">
            <source src={src} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
}
