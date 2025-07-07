import image from "./download.jpeg"
function CreateSection() {
  return (
    <section id="create" style={{ padding: '60px', background: '#333', color: '#fff' }}>
         <div style={{backgroundColor:'blue', display:'block'}}>
      <h1>create</h1>
      <p>Have a great time with for passion Creation</p>
      </div>
      <button style={{ margin: '20px', padding: '8px 16px' }}>findout</button>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <div>
          <h3>create your passion</h3>
          <p>“Turn your ideas into reality and share them with the world.”</p>
          <p>“Express. Inspire. Create — it all starts here.”</p>
          <p> “Craft your story, design your space, and make your mark.”</p>
          <p> “Your creativity knows no limits. Make it shine.”</p>
        </div>
        <img src={image} alt="create" style={{ borderRadius: '50%', width: '200px', marginLeft: '20px' }} />
      </div>
    </section>
  );
}

export default CreateSection;
