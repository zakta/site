import { Container, Burguer } from "./styles";

export default function Hamburguer({open}){
    return(
        <Container >
           <Burguer open={open}/>
           <Burguer open={open}/>
           <Burguer open={open}/>
        </Container>
    )
}
