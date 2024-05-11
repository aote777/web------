export default function Child({ onSend }) {
  return (
    <div>
      <button onClick={() => onSend('CCC')}>子</button>
    </div>
  )
}
