import { useEffect, useRef, useState } from 'react'
import '../css/Budget.css'
const Budget = () => {
  const [remain,setRemain]=useState(0)
  const [spend,setSpend]=useState(0)
  const [userBudget,setUserBudget]=useState(0)
  const [display,setDisplay]=useState(true)
  const [budget, setBudget] = useState([])
  const name = useRef()
  const price = useRef()
  const date=new Date()
  const addExpense=()=>{
    if(userBudget>0){
      setDisplay(false)
      setRemain(userBudget)
      localStorage.setItem('total-budget',JSON.stringify(userBudget))
    }
  }
  const addBudget = () => {
    const itemName=name.current.value
    const itemPrice=price.current.value
    if(itemName!=='' && itemPrice!==''){
    setBudget([...budget,{
      name:itemName,
      price:itemPrice,
      id:date.getTime()
    }])
    setSpend((spend)=>spend+parseInt(itemPrice))
    setRemain((prev)=>prev-parseInt(itemPrice))
    name.current.value=''
    price.current.value=''
  }
  }
  useEffect(()=>{
    setTimeout(() => {
      localStorage.setItem('clg-budget',JSON.stringify(budget))
    }, 500);
  },[budget])
  useEffect(()=>{
    const budgetData=JSON.parse(localStorage.getItem("clg-budget"))
    if(budgetData){
    setBudget(budgetData)
    }
    const totalBudget=JSON.parse(localStorage.getItem('total-budget'))
    if(totalBudget){
      setDisplay(false)
      setUserBudget(totalBudget)
      setRemain(totalBudget)
    }
  },[])
  return (
    <>
      <div className="budget-page">
        {
          display &&
          <div className="budget-display">
            <input type="number" placeholder='Please Enter Your Monthly Expense' onChange={(e)=>setUserBudget(e.target.value)} />
            <button onClick={addExpense}>Submit</button>
          </div>
        }
        <div className="budget">
          <div className="budget-cell each">
            <h1>Budget</h1>
            <p>{userBudget}</p>
          </div>
          <div className="expense-cell each">
            <h1>Remaining</h1>
            <p>{remain}</p>
          </div>
          <div className="spend-cell each">
            <h1>Spend</h1>
            <p>{spend}</p>
          </div>
        </div>
        <div className="budget-items">
          {
            budget?.map((item,index)=>
            <div className="item" key={index}>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
            )
          }
        </div>
        <div className="budget-box">
          <input ref={name} type="text" placeholder='Enter the item' />
          <input ref={price} type="number" placeholder='Enter the price' />
          <button onClick={addBudget}>Done</button>
        </div>
      </div>
    </>
  )
}

export default Budget