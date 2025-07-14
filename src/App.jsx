import { useState } from 'react';
import quotesData from './data/quotes.json';
import colors from './data/colors.json';
import { useEffect } from 'react';
import './App.css'

function App() {


  const [quote, setQuote] = useState(quotesData[0].quote);
  const [author, setAuthor] = useState(quotesData[0].author);
  const [color, setColor] = useState(colors[0]);

  useEffect(() => {
    document.body.style.backgroundColor = color;
    document.getElementById('quote-box').style.color = color;
    document.getElementById('new-quote').style.backgroundColor = color;
  }, [color]);

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    setQuote(quotesData[randomIndex].quote);
    setAuthor(quotesData[randomIndex].author);
    setColor(colors[randomColorIndex]);
  }

  return (
    <div id='quote-box'>

      <div className='quote-text'>
        <p id='text'>
          <span></span>{quote}
        </p>
      </div>

      <div className='quote-author'>
        <p className='quote-author' id='author'>
          - {author}
        </p>
      </div>


      <div className='buttons'>
        <div className='social-buttons'>
            <a
              id='tweet-quote'
              className='tweet-btn'
              target='_blank'
              rel='noopener noreferrer'
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`}>
              Twitter
            </a>

            <a
              id='tumblr-quote'
              className='tumblr-btn'
              target='_blank'
              rel='noopener noreferrer'
              href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,random-quote-machine&caption=${encodeURIComponent(author)}&content=${encodeURIComponent(quote)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}>
              Tumblr
            </a>
        </div>

        <button id='new-quote' className='quote-button' onClick={getRandomQuote}>
          New quote
        </button>
      </div>

       

    </div>
  )
}

export default App
