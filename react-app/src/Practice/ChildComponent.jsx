import React ,{memo} from 'react'


const ChildComponent = ({counter2,IncrementCounter2}) => {
console.log("rendering child Component...")

  return (
    <div>
    <h1>Child Component -  Counter 2 - {counter2}</h1>

  <button onClick={IncrementCounter2}>
                Counter 2 +
            </button>

    </div>
  )
}

export default memo(ChildComponent);
