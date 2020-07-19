import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchQuotes } from '../redux/ActionCreators';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';


const mapDispatchToProps = {
    fetchQuotes: () => (fetchQuotes())
};

const mapStateToProps = state => {
    return {
        quotes: state.quotes
    };
};

class Main extends Component {
    componentDidMount() {
        this.props.fetchQuotes();
    }

    render() {
        const HomePage = () => {
            return (
                <Home 
                quote={this.props.quotes.quotes.filter(quote => quote)[0]}
                quotesLoading={this.props.quotes.isLoading}
                quotesErrMess={this.props.quotes.errMess}
                />
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));