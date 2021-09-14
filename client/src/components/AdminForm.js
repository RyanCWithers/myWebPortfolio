import React, {useReducer} from 'react';


function reducer(state, action) {
    return({
        ...state,
        [action.type]: action.payload
    });
};

const initialState = {
    contactInfo: {},
    workExp: [],
    education: [],
    aspirations: 'Hello world!',
    profSum: 'Young engineer',
    languages: []
};

const AdminForm = (props) =>{

    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e){
        const {name, value} = e.target;
        dispatch({
            type: name,
            payload: value
        });
    };

    const onSubmitHandler = (e) =>{
        e.preventDefault(); //need to update with onSubmitProp
    };

    return(
        <div>
            <form onSubmit = {onSubmitHandler}> 
                
            </form>
        </div>
    )
};

export default AdminForm;
