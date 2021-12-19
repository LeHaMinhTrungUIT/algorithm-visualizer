import React from 'react';
import { useState, useEffect } from 'react';
import Node from './Node';
import ToolBar from './ToolBar';
import Model from '../models/methods';
import { AnimateSharedLayout } from 'framer-motion';
import '../styles/LinkedList.css';

const initialList = new Model();

export default function LinkedList () {
  // array of nodes
  const [list, setList] = useState([]);

  // selected drop down
  const [currentMethod, setCurrentMethod] = useState('unshift');

  // value of value input and index input
  const [value, setValue] = useState('');
  const [indexValue, setIndex] = useState('');

  // selected color
  const [currentColor, setCurrentColor] = useState(
    'linear-gradient(#f7a1df, #f7a1df)'
  );

  const [changeColor] = useState(
    'linear-gradient(90deg, #f7a1df, #f7a1df)'
  )

  // current length of list
  const [length, setLength] = useState(3);

  useEffect(() => {
    listToArray();
  }, []);

  const listToArray = () => {
    const array = [];
    let node = initialList.head;

    while (node) {
      array.push(node);
      node = node.next;
    }

    setList(array);
  };

  // update nodes after method is ran
  const updateNodes = (e) => {
    switch (currentMethod) {
      case 'push':
        initialList.push(value, currentColor);
        break;
      case 'pop':
        initialList.pop();
        break;
      case 'shift':
        initialList.shift();
        break;
      case 'unshift':
        initialList.unshift(value, currentColor);
        break;
      case 'set':
        initialList.set(value, currentColor, indexValue);
        break;
      case 'insert':
        initialList.insert(value, currentColor, indexValue);
        break;
      case 'remove':
        initialList.remove(indexValue);
        break;
      case 'reverse':
        initialList.reverse();
        break;
      case 'print':
        initialList.print();
      default:
        break;
    }
    setLength(initialList.length);
    listToArray();
  };


  return (
    <div className='linked-list' >
      <div className='wrapper'>
        
        <ToolBar
          setCurrentMethod={setCurrentMethod}
          currentMethod={currentMethod}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          setValue={setValue}
          setIndex={setIndex}
          updateNodes={updateNodes}
          value={value}
          indexValue={indexValue}
          length={length}
        />
        <AnimateSharedLayout>
          <section className='node-container'>
            {list.map((method, index) => {
              return (
                <Node
                  key={method.key}
                  value={method.value}
                  next={method.next ? index+1 : 'null'}
                  index={index}
                  color={method.color}
                />
              );
            })}
          </section>
        </AnimateSharedLayout>
      </div>
    </div>
  );
}
