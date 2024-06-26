import { Link } from "react-router-dom";

export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
}) {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img
          alt=""
          className="h-52 w-52"
          src="https://png.pngtree.com/png-vector/20221231/ourmid/pngtree-seaweed-logo-template-vector-icon-drawn-design-ecology-vector-png-image_43645882.jpg"
        />
      </div>
      <h2 className=" text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600 mt-5">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-green-600 hover:text-green-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
