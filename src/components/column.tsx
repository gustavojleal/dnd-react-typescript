import React from 'react'
import Item from './Item'
import { Droppable } from 'react-beautiful-dnd'

import { StyledColumn, StyledList } from '../styles';


interface ColumnProps {
  col: {
    id: string
    list: string[]
  }
}


const Column: React.FC<ColumnProps> = ({ col: { list, id } }) => {
  return (
    <Droppable droppableId={id}>
      {provided => (
        <StyledColumn>
          <h2>{id}</h2>
          <StyledList {...provided.droppableProps} ref={provided.innerRef}>
            {list.map((text, index) => (
              <Item key={text} text={text} index={index} />
            ))}
            {provided.placeholder}
          </StyledList>
        </StyledColumn>
      )}
    </Droppable>
  )
}

export default Column