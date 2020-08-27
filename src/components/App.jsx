import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';

import Home from '../pages/Home';
import Delivery from '../pages/Delivery';
import Contacts from '../pages/Contacts';
import Job from '../pages/Job';
import Payment from '../pages/Payment';
import Production from '../pages/Production';
import Quality from '../pages/Quality';
import Catalog from '../pages/Catalog';
import Category from '../pages/Category';
import Product from '../pages/Product';

import NotFound from '../pages/NotFound';

import initialState from './initialState';
import {contacts} from './constants';

import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <div className="container">
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) => (
                            <Home {...props} contacts={contacts} />
                        )}
                    />
                    <Route exact path="/delivery" component={Delivery} />
                    <Route
                        exact
                        path="/contacts"
                        render={(props) => (
                            <Contacts {...props} contacts={contacts} />
                        )}
                    />
                    <Route exact path="/payment" component={Payment} />
                    <Route exact path="/production" component={Production} />
                    <Route exact path="/quality" component={Quality} />
                    <Route exact path="/job" component={Job} />
                    <Route
                        exact
                        path="/catalog"
                        render={(props) => (
                            <Catalog
                                {...props}
                                category={initialState.category}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/category/:category"
                        render={(props) => (
                            <Category
                                {...props}
                                categoryItems={initialState.categoryItems}
                                items={initialState.items}
                                category={props.match.params.category}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/product/:item"
                        render={(props) => (
                            <Product
                                {...props}
                                items={initialState.items}
                                item={props.match.params.item}
                            />
                        )}
                    />
                    <Route component={NotFound} />
                </Switch>
            </div>
            <Footer contacts={contacts} />
        </Router>
    );
}

export default App;
