function StoreCard({ storeName, storeDetail, websiteUrl, imgsrc }) {
  return (
    <article className="store-card">
      <img 
        src={imgsrc} 
        alt={`Cover image for ${storeName}`} 
        className="store-image" 
      />

    <h2 className="store-name">{storeName}</h2>
    <h3 className="store-detail">{storeDetail}</h3>
    <a 
        href={websiteUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="visit-button"
    >
        Website
    </a>

      
    </article>
  );
}

export default StoreCard