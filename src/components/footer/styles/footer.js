const Footer = ({childre, ...restProps}) => {
  return <Container {...restProps}>{children}</Container>
}

export default Footer;

Footer.Row = function FooterRow({childre, ...restProps}) {
  return <Row {...restProps}>{children}</Row>
}

Footer.Column = function FooterColumn({childre, ...restProps}) {
  return <Column {...restProps}>{children}</Column>
}

Footer.Link = function FooterLink({childre, ...restProps}) {
  return <Link {...restProps}>{children}</Link>
}