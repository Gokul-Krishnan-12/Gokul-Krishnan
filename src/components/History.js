const History = () => {
  
  return (
    
    <div className='bg-black relative flex items-center justify-center rounded-t-3xl rounded-b-3xl'>
        <div className="relative flex flex-col  w-full h-full my-10">
        <div className="borderBottom" >
    <div          
      className="historyList"
    >
        <span className="timeline" >Now</span>
        <div className="designation" >
          <h3>Software Developer</h3>
          <span>White Rabbit Group</span>
        </div>
    </div>
    </div>
    <div className="borderBottom" >
    <div          
      className="historyList"
    >
        <span className="timeline" >2022</span>
        <div className="designation" >
          <h3>Junior Developer</h3>
          <span>White Rabbit Group</span>
        </div>
    </div>
    </div>
    <div className="borderBottom" >
    <div          
      className="historyList"
    >
        <span className="timeline" >2020</span>
        <div className="designation" >
          <h3>Intern</h3>
          <span>ReverTech</span>
        </div>
    </div>
    </div> 
        </div>
 </div>
  )
};

export default History;
