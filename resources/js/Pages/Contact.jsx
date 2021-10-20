import React from "react";
import { useForm, usePage } from "@inertiajs/inertia-react";
import Layout from "./Layout";

const Contact = () => {
  const { data, setData, reset, post, processing, errors, clearErrors } = useForm({
    name: "",
    email: "",
    remember: true
  });

  const { flash } = usePage().props

  function handleSubmit(e) {
    e.preventDefault();
    clearErrors();

    post(route('contactus.store'), {
      onSuccess: () => {
        reset();
      }
    });
  }

  return (
    <>
      <h1 className="text-xl font-bold mb-4">Contact Us</h1>

      {flash.message && (
        <div className="rounded-md bg-green-50 border-green-100 border p-4 my-2" role="alert">
          <p className="text-sm font-medium text-green-800">
            {flash.message}
          </p>
        </div>
      )}


      <form
        onSubmit={handleSubmit}
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
                `form-control ${errors.name ? "error" : ""}`
              }
            />
          </div>
          {errors.name && (
            <p
              className="mt-2 text-sm text-red-600"
              id="name-error"
            >
              {errors.name}
            </p>
          )}
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
                  `form-control ${errors.email ? "error" : ""}`
                }
              />
            </div>
          </div>
          {errors.email && (
            <p
              className="mt-2 text-sm text-red-600"
              id="email-error"
            >
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-x-6 mt-2">
          <button type="submit" className="button" disabled={processing}>
            Contact Us
          </button>
          <button type="reset" className="text-gray-500" disabled={processing} onClick={() => reset()}>
            Reset
          </button>
        </div>
      </form>
    </>
  );
}


Contact.layout = page => <Layout children={page} title="Contact Us" />;

export default Contact;