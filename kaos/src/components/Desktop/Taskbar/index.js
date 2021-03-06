import React from 'react';
import './TaskBar.css';
import Clock from '../../Clock';
import IconComponent from './Icon';

export default class TaskBar extends React.Component {
    render() {
        return (
            <div className='TaskBar'>
                <div className='IconList'>
                    <IconComponent setActive={this.props.setActive} name='About' open={this.props.toggleApplication}/>
                    <IconComponent setActive={this.props.setActive} name='Gif' open={this.props.toggleApplication}/>
                    <IconComponent setActive={this.props.setActive} name='Music' open={this.props.toggleApplication}/>
                    <IconComponent setActive={this.props.setActive} name='Theme' open={this.props.toggleApplication}/>
                    <IconComponent setActive={this.props.setActive} name='Task' open={this.props.toggleApplication}/>
                </div>
                <Clock />
            </div>
        );
    }
}
