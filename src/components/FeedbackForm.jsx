import React from 'react'
import { useState } from 'react';
import "./Feedback.css";
const FeedbackForm = () => {
    const [formData,setFormData] = useState({name:"",email:"", rating:"5", comments:""})
    const [errors,setErrors] = useState({})
    const [feedbackList,setFeedbackList] = useState([])

    console.log(formData);
    console.log(errors);
    console.log(feedbackList);  
    console.log(feedbackList.length);    

    const handleChange = (e)=>{
        const {name,value} = e.target
        setFormData(prev => ({...prev,[name]:value}))
    }

    const formValidate = ()=>{
        // creating object variable which store error
        const newErrors = {}
        if(!formData.name) newErrors.name = "Name is required"
        if(!formData.email) newErrors.email = "Email is required"
        else if(!/\S+@\S+\.\S+/.test(formData.email)){
            newErrors.email = "Email format is invalid";
        }
        if (!formData.comments) newErrors.comments = "Comments are required";
        return newErrors
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const validationErrors = formValidate()
        if(Object.keys(validationErrors).length > 0){
            setErrors(validationErrors)
            return;
        }

        setFeedbackList(prev => [formData,...prev])
        setFormData({name:"",email:"", rating:"5", comments:""});
        setErrors({})
    }
  return (
    <div className="feedback-section">
      <h3>Customer Feedback</h3>
      <form onSubmit={handleSubmit} className="feedback-form">
        <label>
            Name:
            <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter your Name' />

            {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label>
            Email:
            <input 
            type="email"
            name="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your Email' />
            {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
            Rating:
            <select name="rating" value={formData.rating} onChange={handleChange}>
                <option value="5">5 - Excellent</option>
                <option value="4">4 - Good</option>
                <option value="3">3 - Average</option>
                <option value="2">2 - Poor</option>
                <option value="1">1 - Very Poor</option>
            </select>
        </label>

        <label>
            Comments:
            <textarea name="comments" value={formData.comments} onChange={handleChange} placeholder='"Write your feedback..."'/>
            {errors.comments && <span className="error">{errors.comments}</span>}
        </label>

        <div className="form-actions">
            <button type="submit">Submit</button>
            <button type="reset" onClick={()=>{
                setFormData({name:"",email:"", rating:"5", comments:""});
                setErrors({})
            }} >Reset</button>
        </div>
      </form>
      {feedbackList.length > 0 && (
        <div className="feedback-list">
            <h3>Submitted Feedback</h3>
            <ul>
                {feedbackList.map((feedback,idx)=>{
                    return(
                        <li key={idx}>
                            <strong>{feedback.name}</strong>
                            ({feedback.email}) - Rating: {feedback.rating}
                            <p>{feedback.comments}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
      )}
    </div>
  )
}

export default FeedbackForm
