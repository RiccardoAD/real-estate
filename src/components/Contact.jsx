import React from 'react'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        alert("Form Submitted Successfully");
        event.target.reset();
      } else {
        
        console.log("Error", data);
        alert(data.message);
        setResult("");
      }
    };
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden ' id='Contact'>
       <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center
      '>Contact 
        <span className='underline underline-offset-4 pl-2 decoration-1 under font-light'>
         With us
         </span>
      </h1>
         
         <p className='text-gray-500 max-w-80 text-center
          mb-12 mx-auto'>Ready to move? </p>

     <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
        <div className='flex-wrap'>
            <div className='w-full md:w-1\2 text-left'>
                 Your Name 
                 <input className='w-full border border-gray-300 rounded
                  py-3 px-4 mt-2' type="text"  name='Name' placeholder='Your Name' required />
            </div>
            <div className='w-full md:w-1\2 text-left '>
                 Your Email
                 <input className='w-full border border-gray-300 rounded
                  py-3 px-4 mt-2' type="email"  name='Email' placeholder='Your email' required />
            </div>
           
        </div>
        <div >
            Message
            <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
             name="Message" placeholder='Your Message' required></textarea>    
             <button className='bg-blue-500 px-8 py-3 rounded mt-4'>
                 {result ? result : "Submit"}</button>
                 </div>
     </form>

    </div>
  )
}

export default Contact
