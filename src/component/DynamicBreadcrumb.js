import { Breadcrumb } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function DynamicBreadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumb
      style={{
        color: "white",
      }}
    >
      <Breadcrumb.Item
        as={Link}
        className="text-light"
        to="/"
        style={{
          color: "white",
        }}
      >
        Home
      </Breadcrumb.Item>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return (
          <Breadcrumb.Item
            key={routeTo}
            linkAs={Link}
            linkProps={{ to: routeTo }}
            active={isLast}
            style={{
              color: "white",
            }}
          >
            {name}
          </Breadcrumb.Item>
        );
      })}
      {/* use CSS to change the separator */}
      <style>{`
      .breadcrumb-item + .breadcrumb-item::before {
        content: ">";
        color: #fff !important;
      }
      
    `}</style>
    </Breadcrumb>
  );
}

export default DynamicBreadcrumb;
