import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="foot1">
        <a href="">Home</a>|<a href="">Terms and Conditions</a> |
        <a href="">Privacy Policy</a>|<a href="">Collection Statments</a>|
        <a href="">Help</a>|<a href="">Manage Account</a>
      </div>
      <p>Copyright Ⓒ 2022 DEMO Streaming All Right Reserved</p>
      <div className="logos">

      <div className="social">
      <a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEUAAAD///9bW1urq6uAgIDV1dViYmLS0tL4+Pji4uLZ2dmjo6Po6OjExMTe3t7IyMi+vr6ZmZm2trYXFxe3t7fs7OwJCQkhISF2dnaPj4+lpaVeXl5ISEiUlJR4eHhoaGgyMjIuLi47OztCQkInJydTU1MxMTGfLaxiAAADgUlEQVR4nO3d21IiMRSFYZvG4SxnOYMyOu//iDMXWtpFI+x0Zq+V1PrvvLHyFdJg0kk/POBanVvr9mazOUyng4+2ZVluP3+YfrYDDjKs5/16Ouovi3sboAds6zTo3G9LTrjaPBpxSQnn7U4ILxnha2n92/xqix78PZXdYF9RlOjR367dxJeA8Bx0eUlIuG72Av5rhib83KCpj104ag7kFo4jAIsFWvFDkxhAZuEsCpBYuIkDLCZoyLX2kYC8wvAvookII3wQfjRCU+o7RwMWY7Slvhgf9dTCaJcZWmHEl5BT+BYRWHTQmroO2QuHuQsjflSQCqP+kRaPaE5NTWdm6IXzxlMz7MJTVCCjMO7bsOijPZdFmZ356gntuayXu3AV90JDKPwdF1j00KCLWpGFQzToomP2wliziLzCBnNQ3br4rjSlGdYfrM/oUVuyTub33tEjtrawAZdz9IDNGVecTujx2rPNsy3Rww3I9sWbd+3serZ7nzbo4QZkEyb4NjTO0uzRww2obxK+oIcbkE34hh5uQE8m4Qo93IBswvS+0VinafIXPqOHG5CEEvJnWx7NXtjNX4gebUgSSsifSZjiNI2EEiaQSci3sHRHElbiW8K+Iwkr8S1/fut116rNtNFi+F7/S76FW15sWyQNwl2MvIS4/YdewkP2wnb2Qtz6m5cQt/7mJcSt3XgJYUAvIfD/Kych8HudkxC4dc1JCLzhxkkIPIDHSQi8pchJeMxe2Mpe+JK9ELjA6CTEAZ2EyMUpHyFyutFHiNzn7CNEnmziI0Se9OUjRJ586SPEzbR5CZF3uvsIkXe6+wiRm9pchF3kne4uwiXyzj4XIXQF1UUIPTLCRQg9js5FCD3q2kUI3bznIlwnL+x26huPx6NJOThCt9T8Of2qa2e72wQpCM2030JCyiSUkD+TMMm7LyWUkD8JJeTPdOKAhJRJKCF/Elai3hV0LQkl5E/C9IWm08wkpExCCfmTsBLhwytuJ6GE/EkoIX+ms6AlpExCCfmTsBLhg/FuJ6GE/EmYvtD0FBYJKZNQQv4krMT44PSbSSghfxJKyJ+EEvJnEgJPtgxPwvSFpucBS0iZhBLyJ6GE/OUvHEkoIX0SSsifhJWgZ+qFlr9wIqGE9EkoIX8SSsjfQkIJ6ZNQQv4krDRBjzakmYQS0iehhPzlL8z/E/9YGvrfD477C47JUcbglne0AAAAAElFTkSuQmCC" alt="" /></a>
      <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJkmyJvd-sN3GsL23Cvfqjkq5P1fahY1bcewaPDmkvQ&s" alt="" /></a>
      <a href=""><img src="data:image/png;base64,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" alt="" /></a>
       
        </div>
       <div className="apps">
        <a href=""><img src="https://logos-download.com/wp-content/uploads/2016/06/Available_on_the_App_Store_logo.png" alt="" /></a>
        <a href=""><img src="https://www.freepnglogos.com/uploads/play-store-logo-png/google-play-store-logo-keyword-the-amazon-insider-podcast-6.png" alt="" /></a>
      <a href=""> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Get_it_from_Microsoft_Badge.svg/1200px-Get_it_from_Microsoft_Badge.svg.png" alt="" /></a>
       </div>
        
      </div>
    </div>
  );
};

export default Footer;
