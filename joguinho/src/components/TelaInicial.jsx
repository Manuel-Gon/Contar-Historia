import './TelaInicial.css'
import { useState } from 'react'

function TelaInicial() {

  const [count, setCount] = useState(0)
    const emojis = ['🐙','😺','🗺️','💅','😒','😍','❤️','➡️','🤷‍♀️','🤷‍♂️','😗','🤑','🤢','👽','👻'];
      const [emoji, setEmoji] = useState(emojis[0]);
      const [angle, setAngle] = useState(0);
    
      const gerarEmojiAleatorio = () => {
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        const randomAngle = Math.floor(Math.random() * 360);
        setEmoji(randomEmoji);
        setAngle(randomAngle);}

  return (
<>
<div className='Agora-vai-funcionar'>  


<div className='emoji'>
{emoji}


</div>
<button className='botao-legalzinho' onClick={gerarEmojiAleatorio}>Descubra!</button>


</div>
</>
  )
}

export default TelaInicial