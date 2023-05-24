
import styled from "styled-components";

const Contact = () => {

  const Wrapper = styled.section`
    padding: 6rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;
      margin-bottom: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>


      <div className="container">
        <div className="contact-form">  
          <form
            action="https://formspree.io/f/mnqygjvq"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>

      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.190893829149!2d80.1904989148727!3d26.44957498332927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c49f91c4b2101%3A0x800c5231fd7e86a8!2sPSIT%20Senior%20Boys%20Hostel!5e0!3m2!1sen!2sin!4v1680121230575!5m2!1sen!2sin" 
      width="100%" 
      height="450" 
      style={{border:0}}
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"></iframe>
    </Wrapper>
  );
};

export default Contact;
