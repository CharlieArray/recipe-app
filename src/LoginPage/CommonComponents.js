import styled from 'styled-components';


export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    margin-right: 10px;
`;

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-right: 10px;
`;

export const MutedLink = styled.a`
    font-size: 12px;
    margin: 8px;
    color: rgba(148,180,233,1); 
    font-weight: 300;
    text-decoration: none;
`;

export const BoldLink = styled.a`
    font-size: 12px;
    margin: 8px;
    color: rgba(238,134,202,1);
    font-weight: 500;
    text-decoration: none; 
`;

export const Input = styled.input`
    width: 100%;
    height: 42px;
    outline: none;
    border: 1px solid rgba(200,200,200,0.0.3);
    padding: 0px 10px;
    border-bottom: 1.6px solid transparent;
    transition: all 200ms ease-in-out;
    font-size: 13px;

    &::placeholder{
        color: rgba(40,40,40,1)
    }

    &:not(:last-of-type){
        border-bottom: 1.5px solid rgba(200,200,200,0.4)
    }

    &:focus{
        outline:none;
        border-bottom: 2px solid rgba(148,180,233,1); 
    }
`;
export const SubmitButton = styled.button`
    width: 90%;
    padding: 10px 30%;
    color: #fff;
    font-size: 15px;
    font-weight:600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: rgb(139,231,151);
    background: linear-gradient(45deg,
   rgba(199, 236, 238, 1) 44%, 
   rgba(199, 236, 220, 1) 73%); 

    &:hover{
       filter:brightness(1.03) 
    }
`;