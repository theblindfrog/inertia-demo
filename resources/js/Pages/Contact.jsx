
import React from "react";
import { useForm } from "@inertiajs/inertia-react";
import Layout from "./Layout";

const Contact = () => {
  const { data, setData, reset } = useForm({
    name: "",
    email: "",
    remember: true
  });

  return (
    <>
      <h1 className="text-xl font-bold mb-4">Contact Us</h1>

      <form
        method="post"
        className="space-y-4 max-w-lg"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Alex Smith"
              aria-invalid="true"
              aria-describedby="name-error"
              value={data.name}
              onChange={e => setData("name", e.target.value)}
              className={
                `form-control`
              }
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="asmith@example.net"
                aria-invalid="true"
                aria-describedby="email-error"
                value={data.email}
                onChange={e => setData("email", e.target.value)}
                className={
                  `form-control`
                }
              />
            </div>
          </div>
        </div>

        <div className="space-x-6 mt-2">
          <button type="submit" className="button">
            Contact Us
          </button>
          <button type="reset" className="text-gray-500" onClick={() => reset()}>
            Reset
          </button>
        </div>
      </form>
    </>
  );
}


Contact.layout = page => <Layout children={page} title="Contact Us" />;

export default Contact;