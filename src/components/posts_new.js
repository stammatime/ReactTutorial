import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

class PostsNew extends Component {

    renderField(field){
        const { meta: {touched,error}} = field;
        const className  = `form-group ${touched && error ? 'has-danger' : ''}`;
        return(
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                     //pass eventhandlers to input props
                    {...field.input}
                />
                <div className="text-help">{field.meta.touched? field.meta.error: ""}</div>
            </div>
        );
    }

    onSubmit(values){
        console.log(values);

    }
    render(){
        const { handleSubmit} = this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    name="title"
                    component={this.renderField}
                    label="Title"
                />
                <Field 
                    name="categories"
                    component={this.renderField}
                    label="Categories"
                />
                <Field 
                    name="content"
                    component={this.renderField}
                    label="Post Content"
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values){
    //console.log(values) -> {title:"aoeu",categories:"aoeu",content:"aoeu"}
    const errors = {};

    //Validate the inputs from 'values'
    if(!values.title){
        errors.title = "Enter a title";
    }
    if(!values.categories){
        errors.categories = "Enter a category!";
    }
    if(!values.content){
        errors.content = "Enter a content!";
    }

    //if errors is empty, then form is fine to submit
    //if errors has any properties, redux form assumes form is invalid
    return errors;

}

export default reduxForm({
    //same as validate:validate
    validate,
    form: 'PostsNewForm'
})(PostsNew);