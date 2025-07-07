import image from "./s2.webp"
function ExploreSection() {
  return (
    <section id="explore" style={{ padding: '60px', background: '#333', color: '#fff', textAlign: 'center' }}>
         <div style={{backgroundColor:'blue', display:'block'}}>
      <h1>Explore & Connect</h1>
      
      <p>Discover exciting new profiles, trending topics, and communities that share your interests. Stay inspired and keep your network vibrant.</p></div>
      <button style={{ margin: '20px', padding: '8px 16px' }}>Find Out More</button>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <img src={image} alt="explore" style={{ borderRadius: '50%', width: '200px', marginRight: '20px' }} />
        <div>
          <h3>Explore & Connect</h3>
          <p>“Discover new stories, meet new faces, and stay inspired.”</p>
          <p>“The world is just a click away — go explore it.”</p>
          <p>“Uncover communities and ideas that spark your curiosity.”</p>
          <p> “Broaden your network and find what truly excites you.”</p>
        </div>
      </div>
    </section>
  );
}

export default ExploreSection;
