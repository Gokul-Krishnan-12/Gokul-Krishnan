
const Opinion = ({ testimonial, author, position, company }) => {

  return (
    <div className='opinionSection min-h-70vh'>
      <div className="opinionText">
       <p className="testimonial">{testimonial}</p>
       <h4>{author}</h4>
       <p className="subContent">{position}</p>
       <p className="subContent">{company}</p>
       
       </div>
      
 </div>
  )
};

export default Opinion;
