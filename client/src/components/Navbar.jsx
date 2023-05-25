
import './Navbar.css'


const Navbar = () => {
  return (
    <div className="Navbar">
      <div className='UpNavbar'>
        <div id='Logo'>Instagram</div>
      <input id="Search" placeholder='Search'/>
      <div id='Heart'>♡</div>
      </div>
      
      <div className='DownNavbar'>
      <div className='item'>♡</div>
      <div className='item'>♡</div>
      <div className='item'>♡</div>
      <div className='item'>♡</div>
      <div className='item'>♡</div>
      <div className='item'>+</div>
      </div>

    </div>

  );
};

export default Navbar;
