import React, { Component } from 'react';
import {connect} from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import {personActions} from "../store/actions";

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddedPerson} />
                {this.props.persons && this.props.persons.length && this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onRemovedPerson(person.id)}/>
                ))}
                <h2>There are {this.props.counter} persons in total.</h2>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        // state.slice_name.initialState
        persons: state.person.persons,
        counter: state.person.counter,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedPerson: () => dispatch(personActions.addPerson()),
        onRemovedPerson: (id) => dispatch(personActions.removePerson(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
