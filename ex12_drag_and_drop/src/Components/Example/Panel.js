import React from 'react';
import { useDrag, DragSource, DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import LineGraph from './LineGraph';

const style = {
  position: 'absolute',
  border: '1px solid gray',
  width: 700,
  height : 500,
  backgroundColor: 'white',
};

const handleStyle = {
    backgroundColor: 'green',
    width : '100%',
    height: '20px',
    cursor: 'move',
  };

  
export const Panel = ({ id, left, top, children }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { id, left, top, type: ItemTypes.BOX },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  if (isDragging) {
    return <div>
  </div>
  }
  return (
    <div ref={preview} style={{ ...style, left, top }}>
      {drag(<div style={{...handleStyle}} />)}
      <div >
      <LineGraph/>
      </div>
    </div>
    )
};

export const PanelHandle = DragSource(
    ItemTypes.BOX,
    {
      beginDrag: () => ({}),
    },
    (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging(),
    }),
  )(
    DropTarget(ItemTypes.BOX, {}, (connect, monitor) => ({
      connectDropTarget: connect.dropTarget(),
      isDraggingHover: monitor.isOver({ shallow: true }),
      isOver: monitor.isOver(),
    }))(Panel),
)


