import React from 'react';

const Blog = () => {
    return (
        <div className='rounded-lg m-5 lg:m-15 bg-cyan-800 text-white p-10 lg:text-justify'>
            <div className='flex justify-center mb-10'>
                <h2 className='text-3xl lg:text-4xl text-amber-300 font-bold'>Simple Question Answer</h2>
            </div>

            <h4 className='text-2xl mb-5 text-amber-100 font-semibold'>Difference between SQL and NoSQL</h4>

            <p className='mb-5'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. <br />SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. </p>

            <h4 className='text-2xl mt-10 mb-5 text-amber-100 font-semibold'>What is JWT, and how does it work?</h4>
            <p className='mb-5'>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved. <br />

                The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

                JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.</p>

            <h4 className='text-2xl mt-10 mb-5 text-amber-100 font-semibold'>What is the difference between javascript and NodeJS?</h4>
            <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>

            <h4 className='text-2xl mt-10 mb-5 text-amber-100 font-semibold'>What is the difference between javascript and NodeJS?</h4>
            <p className='mb-5'>NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue . NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue. So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue. What happens next? The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself. If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.</p>
        </div>
    );
};

export default Blog;