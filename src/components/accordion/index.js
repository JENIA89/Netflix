import React, { useState, createContext, useContext } from 'react'
import { Container, Inner, Title, Frame, Item, Header, Body } from './styles/accordion'


const ToggleContext = createContext();

const Accordion = ({children, ...restProps}) => {
    return(
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

export default Accordion;

Accordion.Title = function AccordionTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Accordion.Frame = function AccordionFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}

Accordion.Item = function AccordionItem({children, ...restProps}) {
    const [toggleShow, setToggleShow] = useState(false)
    return  <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
                <Item {...restProps}>{children}</Item>
            </ToggleContext.Provider> 
}

Accordion.Header = function AccordionHeader({children, ...restProps}) {
    const {toggleShow, setToggleShow} = useContext(ToggleContext)
    return <Header onClick={()=> setToggleShow(toggleShow => !toggleShow)} {...restProps}>{children}</Header>
}

Accordion.Body = function AccordionBody({children, ...restProps}) {
    const { toggleShow } = useContext(ToggleContext)
    return toggleShow ? <Body  {...restProps}>{children}</Body> : null
}
