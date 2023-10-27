import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadcrumbProductDetail({name}) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>{name}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbProductDetail;