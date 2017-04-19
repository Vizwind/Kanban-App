import AltContainer from 'alt-container';
import React from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Lanes from './Lanes.jsx';
import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';
import NoteStore from '../stores/NoteStore';
import connect from '../decorators/connect';
import log from '../decorators/log';

@connect(NoteStore)
@DragDropContext(HTML5Backend)
export default class App extends React.Component {

  render() {
    console.log('Notes: ', this.props.notes);
    return (
      <div>
        <button className="add-lane" onClick={this.addLane}>+</button>
        <AltContainer
          stores={[LaneStore]}
          inject={{
            lanes: () => LaneStore.getState().lanes || []
          }}>
          <Lanes />
        </AltContainer>
      </div>
    );
  }

  @log
  addLane() {
    LaneActions.create({name: 'New lane'});
  }

}

