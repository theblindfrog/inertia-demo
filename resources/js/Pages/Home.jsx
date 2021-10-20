import React from "react";
import Layout from "./Layout";
import { Head } from "@inertiajs/inertia-react";
import { format, parse } from "date-fns";

const Home = ({ time }) => {
    return (
        <>
            <Head title="Welcome" />
            <h1 className="text-xl font-bold mb-4">Welcome to Inertia</h1>
        </>
    );
};

Home.layout = page => <Layout children={page} />;

export default Home;
