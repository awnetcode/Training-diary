import './App.css';

import { useState } from 'react';

import Header from './components/Header';
import WritingArea from './components/WritingArea';

function App() {

  const [content, setContent] = useState('');
  return(
    <>  
    <Header setContent={setContent}/>
    <WritingArea content={content}/>
    </>
  )

}

export default App
