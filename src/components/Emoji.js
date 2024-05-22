import React,{useEffect, useState} from 'react'
import EmojiItem from './EmojiItem'
import Emojidata from '../Emojidata.json'

const App = () => {
  const [search,setSearch] = useState("");
  const [data,setData] = useState([]);

  useEffect(()=>{
    const newData = Emojidata.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()));
    setData(newData);
},[search])


  return (
    <div>
      <center>
        <h1> Emoji Search</h1>
        <input size="30" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </center>
        <div className='emojiitem'>
          {(!data.length > 0)?'NO Emoji Found':<EmojiItem data={data}/>}
        </div>
    </div>
  )
}

export default App

