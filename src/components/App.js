import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {


    render() {


        return (

            <div>
                Hello world
            </div>


        );
    }

}

const mapStateToProps = state => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App)