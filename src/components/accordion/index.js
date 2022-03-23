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
