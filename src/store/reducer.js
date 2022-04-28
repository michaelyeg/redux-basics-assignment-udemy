import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    persons: [],
    counter: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter+=action.amount;
        }
    }
});

export const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        addPerson(state) {
            const newPerson = {
                id: Math.random(),
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            }
            state.persons = state.persons.concat(newPerson);
            state.counter += 1;
        },
        removePerson(state, action) {
            state.persons = state.persons.filter(person => person.id !== action.payload);
            state.counter -= 1;
        },
    },
});
