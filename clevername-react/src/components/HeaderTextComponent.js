import React, {Component} from 'react';
import ReactTextTransition, {presets} from 'react-text-transition';

const texts = [" tidbits ", " reflections ", " breadcrumbs ", " daydreams ", " memories ", " timecapsules ", " stories ", " thoughts ", " histories "];

class HeaderText extends Component {
    state = {
        textIndex: 0
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                textIndex: this.state.textIndex + 1
        });
    }, 4000);
    }
    render() {
        return (
            <React.Fragment>
                <section className="inline">
                    <h3>Daily
            <ReactTextTransition
              text={texts[this.state.textIndex % texts.length]}
              spring={presets.gentle}
              style={{ margin: "0 4px" }}
              inline
              overflow
            />
            for future self.</h3>
                </section>
            </React.Fragment>
        )
    }
}

export default HeaderText;