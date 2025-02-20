import './App.css';

import { useState } from 'react';

import Header from './components/Header';
import WritingArea from './components/WritingArea';
import Slider from './components/slider/Slider';

function App() {

  const [content, setContent] = useState('');
  return(
    <>  
    <Slider/>
    <Header setContent={setContent}/>
    <WritingArea content={content}/>
    </>
  )

}

export default App
