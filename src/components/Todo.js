import styled from "styled-components";
import { useEffect, useState } from 'react';
import deleteIcon from '../assets/delete.jpg'
import check from '../assets/check.png'
import notChecked from '../assets/nothing.png'

const SearchBar = styled.input`
  font-size: 2rem;
  width: 40%;
  height: 3vh;
  border-radius: 1rem;
  outline: none;
  margin: 1rem auto;
  display: block;
  padding: 1rem;
  font-family: Roboto;
  border: 1px solid black;
`



const Delete = styled.img`
    height: 30px;
    width: 30px;
    transition: 300ms transform linear;
    text-align: center;

  &:hover {
    cursor: pointer;
    transform: scale(1.8);
  }
`

const Container = styled.div`
  border-bottom: 1px solid black;
  margin: auto;
  width: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 1rem;
  padding: 0 1rem;

 
  .checked {
    text-decoration: line-through;
    ${console.log('hello')}

  }
  
`

const TodoItem = styled.div`
  font-size: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 2rem 0;
  cursor: pointer;
`


function Todo() {

  const getTodo = () =>{
    let list = JSON.parse(localStorage.getItem('todos')) || [];
    return list
  }

  const [ items, setItems ] = useState(getTodo())

  const checked = (e) => {
    e.target.classList.toggle('checked');
    console.log(document.querySelectorAll('.checked'))
}



  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(items))
  }, [items])





  let arr = [];
  let style = {backgroundColor: 'red'}

  return (
    <div className="Todo">
      <SearchBar 
      onKeyDown={(e) => {
        if(e.key == 'Enter' && e.target.value){
            setItems([...items, ...[e.target.value]]);
            e.target.value = null;
        }
      }}
      type='text' />
      <div>
        {items.map((item, index) => 
            <Container 
                onClick={checked}

                key={index}>

                <TodoItem>
            {index + 1} .{item}</TodoItem>
                <Delete 
                onClick={() => {
                    let list = JSON.parse(localStorage.getItem('todos'));
                    list.splice(index, 1);
                    setItems(list)
                }}
                src={deleteIcon} />
            </Container>
            
       )}
      </div>
    </div>
  );
}

export default Todo;


