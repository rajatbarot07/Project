import { useEffect, useState } from "react";
import './back.css'

const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <i class="fa-solid fa-arrow-up" style={{color: "#f50a0a",}}></i>
        </button>
      )}
      
    </>
  );
};

export default App;