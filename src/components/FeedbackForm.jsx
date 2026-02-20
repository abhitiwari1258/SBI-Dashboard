import React from 'react'
import "./Feedback.css";
const FeedbackForm = () => {
  return (
    <div className="feedback-section">
      <h3>Customer Feedback</h3>
      <form action="">
        <label>
            Name:
            <input 
            type="text" 
            placeholder='Enter your Name' />
        </label>

        <label>
            Email:
            <input 
            type="email" 
            placeholder='Enter your Email' />
        </label>

        <label>
            Rating:
            <select name="rating">
                <option value="5">5 - Excellent</option>
                <option value="4">4 - Good</option>
                <option value="3">3 - Average</option>
                <option value="2">2 - Poor</option>
                <option value="1">1 - Very Poor</option>
            </select>
        </label>

        <label>
            Comments:
            <textarea name="comments" placeholder='"Write your feedback..."'>
            
            </textarea>
        </label>

        <div className="form-actions">
            <button type="submit">Submit</button>
            <button type="reset" >Reset</button>
        </div>
      </form>
    </div>
  )
}

export default FeedbackForm
