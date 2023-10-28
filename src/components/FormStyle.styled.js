import styled from "styled-components";

export const Header = styled.header`
  padding-bottom: 3rem;
  font-weight: 800;
  font-size: 2rem;
  margin: 0  auto;
` 

export const StyledForm = styled.form`
  max-width: 100%;
  width: 750px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
  background-color: #fffff;
  padding: 5rem;
  border-radius: 5px;

  @media(max-width: 700px){
  margin: 0 auto;
  padding: 2rem;
    width: 350px; 
    max-width: 65%;
  }

  @media(max-width: 1350px){
  // margin: 0 auto;
    width: 450px; 
    padding: 1rem
   }
`

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`

export const CheckboxInput = styled.input`
  margin-bottom: 1rem;
  padding: 10px;
`

export const Info = styled.div`
display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
`

export const CheckboxLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #737b86;
`

export const StyledInput = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  padding: 10px;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 5px;
`

export const StyledButton = styled.button`
background: rgba(21, 117, 167, 1);
max-width: 100%;
width: 450px;
  color: white;
  padding: 15px;
  margin: 30px auto;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media(max-width: 700px){
    width: 250px; 
  }
`

export const Text = styled.span`
  text-decoration: underline #f78719;
  color: #f78719;
`
export const Text1 = styled.span`
  color: #f78719;
`
export const Paragraph = styled.p`
  margin: 0.5rem auto;
`
