// 3rd parties
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { Container, LinkTo, Actual } from './styles';

const Breadcrumb = function BreadcrumbComponent({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
};
Breadcrumb.propTypes = {
  children: PropTypes.node.isRequired,
};

const Link = function LinkComponent({ children, href }) {
  return (
    <NextLink href={href}>
      <LinkTo href={href}>
        {children}
      </LinkTo>
    </NextLink>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

Breadcrumb.Link = Link;

const Item = function ItemComponent({ children }) {
  return (
    <Actual>
      {children}
    </Actual>
  );
};

Item.propTypes = {
  children: PropTypes.node.isRequired,
};

Breadcrumb.Item = Item;

export default Breadcrumb;
