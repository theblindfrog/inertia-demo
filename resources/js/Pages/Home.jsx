import React from "react";
import Layout from "./Layout";
import { Head } from "@inertiajs/inertia-react";
import { format, parse } from "date-fns";

const Home = ({ time }) => {
    return (
        <>
            <Head title="Welcome" />
            <h1 className="text-xl font-bold mb-4">Welcome to Inertia</h1>
            {/* <p>Hello, it's {time}</p> */}
            <p>Hello, it's {format(parse(time, 'yyyy-MM-dd HH:mm:ss', new Date()), "h 'o''clock'")}</p>
        </>
    );
};

Home.layout = page => <Layout children={page} />;

export default Home;
