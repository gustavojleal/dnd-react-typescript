import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { StyledItem } from '../styles';
interface ItemProps {
  text: string
  index: number
}


const Item: React.FC<ItemProps> = ({ text, index }) => {
  return (
    <Draggable draggableId={text} index={index}>
      {provided => (
        <StyledItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {text}
        </StyledItem>
      )}
    </Draggable>
  )
}

export default Item