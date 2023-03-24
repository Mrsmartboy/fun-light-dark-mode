import {useState} from 'react'
import { Container,CardContainer,Header,Button } from "./styled"
const LightDarkMode=()=>{
    const [isDark,setIsDark]=useState(true)
 const onClickMode=()=>{
    setIsDark(prevState=>!prevState)
 }
    return(
        <Container>
            <CardContainer bgColor={isDark}>
                <Header colour={isDark}>Click to Change Mode</Header>
                <Button onClick={onClickMode}>{isDark?"Light Mode":"Dark Mode"}</Button>
            </CardContainer>
        </Container>
    )

}

export default LightDarkMode