import React from 'react';
import '../styles/Home.css';
import { useSelector, useDispatch } from 'react-redux';
import { decNumber, incNumber } from '../actions';

const Home = () => {

    const myState = useSelector((state) => state.changeNumber);
    const dispatch = useDispatch()
        return (
            <div>
                <h1 className='heading'>Redux Counter</h1>
                <div className='counter'>
                    <button onClick={() => dispatch(decNumber())}> - </button>
                    <input type="text" readOnly value={myState} name="count"></input>
                    <button onClick={() => dispatch(incNumber())}> + </button>
                </div>
            </div>
        ) 
}

export default Home