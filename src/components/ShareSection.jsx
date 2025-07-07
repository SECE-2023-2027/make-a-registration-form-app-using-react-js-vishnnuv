import image from "./first.jpeg"
function ShareSection() {
  return (
    <section id="share" style={{ padding: '60px', background: 'black' }}>
    <div style={{backgroundColor:'blue', display:'block'}}>
      <h1>share</h1>
      <p > Share the Things What you Got</p>
      </div >
      <button style={{ margin: '20px', padding: '8px 16px' }}>findout</button>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <img src={image} alt="share" style={{ borderRadius: '50%', width: '200px', marginRight: '20px' }} />
        <div>
          <h3>Share What Inspires You</h3>
          <p>Tell your story to the world. Post your moments, your projects, and your passions — and inspire others to do the same.</p>
          <p>Connect, collaborate, and make your ideas come alive in a vibrant community.</p>
        </div>
      </div>
    </section>
  );
}

export default ShareSection;
