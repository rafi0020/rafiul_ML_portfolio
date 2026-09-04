import Icon from "../components/Icon";

export default function MediaGallery({ media }){
  if(!media || (!media.images?.length && !media.videos?.length)) {
    // Show placeholder when no media
    return (
      <div className="media-gallery">
        <div className="media-item media-empty">
          <Icon name="image" size={64} />
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
