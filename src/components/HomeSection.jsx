import SignupForm from './SignupForm';

function HomeSection() {
  return (
    <section id="home" style={{
      display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', padding: '60px',
      background: 'black', color: '#fff'
    }}>
      <div style={{ maxWidth: '600px' }}>
         <div style={{backgroundColor:'blue', display:'block'}}>
        <h1>Build <strong>social profiles</strong> and gain revenue profits</h1>
        </div>
        <p>Connect, share, and grow your network effortlessly</p>
        <p>Manage your profile, engage with followers, and turn your passion into profit</p>
        <p>Join thousands who trust us to amplify their social reach and build meaningful communities.....</p>
      </div>
      <SignupForm />
    </section>
  );
}

export default HomeSection;
