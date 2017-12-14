import React from 'react';
import BigCalendar from 'react-big-calendar';
import events from '../events';

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

let Basic = React.createClass({
  render(){
    return (
      <BigCalendar
        {...this.props}
        events={events}
        views={allViews}
        step={60}
        defaulDate={new Date(2015, 3, 1)}
        timeIndicatorClass="prova"
      ><span>test</span></BigCalendar>
    )
  }
})

export default Basic;
