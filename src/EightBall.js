import React, {useState} from 'react';

function pickRandom(arr) {
  let randomIdx = Math.floor(Math.random() * arr.length);
  let randomVal = arr[randomIdx];
  return randomVal;
}


function EightBall(props) {

  let colors = {
    'green': 0,
    'goldenrod': 0,
    'red': 0
  }

  const defaultEightBall = { msg: "Think of a Question", color: "black" };
  const [eightBall, setEightball] = useState(defaultEightBall);
  const [colorCount, setcolorCount] = useState(colors);

  let style = {
    color: 'white',
    backgroundColor: eightBall.color,
    borderRadius: '100%',
    width: '200px',
    height: '200px',
    textAlign: 'center'
  }

  return (
    <div>
      <button style={style} onClick={() => {
        let random = pickRandom(props.eightBall);
        setEightball(random);
        colorCount[random.color]++;
        setcolorCount(colorCount)
        }}>{eightBall.msg}</button>
      <button onClick={() => setEightball(defaultEightBall)}>Reset</button>
      <ul>
        {
          Object.entries(colorCount).map(c =>
          <li>{c[0]}: {c[1]}</li>
        )}
      </ul>
    </div>
  )
}

EightBall.defaultProps = {
eightBall:
[
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
]
}

export default EightBall