import { StyledForm, StyledLabel, StyledInput, CheckboxInput, Info, CheckboxLabel, StyledButton, Header, Text, Text1 , Paragraph} from "./FormStyle.styled";
import { useState } from "react";

export default function(){
   

    return (
        <StyledForm onSubmit={(e) => e.preventDefault()}>
            <Header> Login </Header>
            <StyledLabel>Login ID</StyledLabel>
            <StyledInput type="text" placeholder="Enter Login ID" />
            <StyledLabel > Password </StyledLabel>
            <StyledInput type="password"placeholder="Enter Password" />
            <Info>  
            <div>
            <CheckboxLabel for="check1">  <CheckboxInput type="checkbox" name="check1"/> Remember me </CheckboxLabel>
            <CheckboxLabel for="check2">  <CheckboxInput type="checkbox" name="check2"/> Agree to <Text> Terms & Conditions</Text> </CheckboxLabel>
           </div>
             <Text1> Change password</Text1>
            </Info>
            <StyledButton type="submit">Login</StyledButton> 
            <Paragraph> Don't have an account? <a href=""> <Text> Register Here </Text></a> </Paragraph>
        </StyledForm>
    )
}