import React, {Component} from 'react';
import DatePicker from 'react-date-picker';

class CurrDate extends Component {
    //More info here: https://www.npmjs.com/package/react-calendar
    //Examples here: https://github.com/wojtekmaj/react-calendar/wiki/Recipes
    state = {
        date: new Date(),
        }
        
        onChange = date => this.setState({ date })
        
        render() {
        return (
            <div>
            <DatePicker
                onChange={this.onChange}
                value={this.state.date}
            />
            </div>
        );
    }
}

export default CurrDate;