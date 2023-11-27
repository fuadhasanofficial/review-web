import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="w-5/6 mx-auto border p-4">
        <h2 className="text-center text-xl text-orange-500">
          Difference between SQL and NoSQL
        </h2>
        <p className="border-b">
          Check Out What Are the Differences Between SQL and NOSQL
        </p>
        <p>
          There are differences between SQL and NoSQL in processing and storing
          data related to security, reliability, and consistency.
        </p>
        <p>
          Not many people know the exact terms and differences between SQL and
          NoSQL, although they often hear about them. Those who are familiar
          with programming languages are likely to be familiar with the
          differences between SQL and NoSQL. Unlike NoSQL, SQL is a more
          familiar term because it is widely used in various organizations and
          businesses.
        </p>
        <h2 className="text-xl text-orange-500">
          The Difference Between SQL and NoSQL, Understanding Them Better
        </h2>
        <p>
          SQL and NoSQL databases are the two most popular, powerful, and
          valuable types of databases, each with its own way of functioning. SQL
          databases are relational databases that use Structured Query Language
          (SQL) to store, retrieve, and manipulate data. On the other hand,
          NoSQL is a non-relational database that does not use a traditional
          table-based relational database structure. To have a deeper
          understanding of these two database terms, here are their
          explanations.
        </p>
        <h2 className="text-xl text-orange-500">SQL</h2>
        <p>
          It is a relational database where data is organized into tables, and
          each table has a specific structure. The tables are interconnected,
          making it very strong in storing data.
        </p>
        <h2 className="text-xl text-orange-500">NoSQL</h2>
        <p>
          It is a non-relational database where data is stored in a collection
          of documents, and there is no fixed structure. These documents are not
          interrelated, making it more suitable for data that doesn’t need to be
          accessed in a specific way.
        </p>
        <h2 className="text-xl text-orange-500">Their Differences</h2>
        <p>
          In terms of scalability, SQL databases use a vertical approach, while
          NoSQL uses a horizontal approach. Vertical scaling means adding more
          power to the server, while horizontal scaling means scaling by adding
          more servers. Another difference is that maintaining a SQL database is
          more expensive compared to NoSQL because it requires more
          administration. Additionally, SQL databases are generally more complex
          than NoSQL because they have to follow ACID rules. This actually makes
          them slower and more complicated compared to NoSQL databases. ACID in
          SQL stands for atomicity, consistency, isolation, and durability,
          which means data is stored securely, reliably, and consistently.
          NoSQL, which does not follow ACID rules, is more flexible in storing
          and processing data. However, it also means that data is not always
          stored securely, cannot be relied upon, and lacks consistency. By
          knowing all these aspects related to the differences between SQL and
          NoSQL, you can choose which one is better to use for storing data.
        </p>
      </div>

      <div className="w-5/6 mx-auto border p-4 mt-5">
        <h2 className="text-center text-xl text-orange-500">
          JSON Web Tokens Introduction
        </h2>
        <p>
          JSON Web Tokens (JWTs) are quite common in the OAuth and OpenID
          Connect world. We're so used to them that we often don't pay much
          attention to how they're actually used. The general opinion is that
          they're good for being used as ID tokens or access tokens and that
          they're secure — as the tokens are usually signed or even encrypted.
          You have to remember though, that JWT is not a protocol but merely a
          message format. The RFC just shows you how you can structure a given
          message and how you can add layers of security, that will protect the
          integrity and, optionally, the content of the message. JWTs are not
          secure just because they are JWTs, it's the way in which they’re used
          that determines whether they are secure or not.
        </p>
        <p>
          This article shows some best practices for using JWTs so that you can
          maintain a high level of security in your applications. These
          practices are what we recommend at Curity and are based on community
          standards written down in RFCs as well as our own experience from
          working with JWTs.
        </p>
        <h2 className="text-xl text-orange-500">What is a JWT Token?</h2>
        <p>
          A JSON Web Token (JWT, pronounced "jot") is a compact and URL-safe way
          of passing a JSON message between two parties. It's a standard,
          defined in RFC 7519. The token is a long string, divided into parts
          separated by dots. Each part is base64 URL-encoded. What parts the
          token has depends on the type of the JWT: whether it's a JWS (a signed
          token) or a JWE (an encrypted token). If the token is signed it will
          have three sections: the header, the payload, and the signature. If
          the token is encrypted it will consist of five parts: the header, the
          encrypted key, the initialization vector, the ciphertext (payload),
          and the authentication tag. Probably the most common use case for JWTs
          is to utilize them as access tokens and ID tokens in OAuth and OpenID
          Connect flows, but they can serve different purposes as well.
        </p>
        <h2>1. JWTs Used as Access Tokens</h2>
        <p>
          JWTs are by-value tokens. This means that they contain data. Even if
          you can't read that data with your own eyes, it's still there and is
          quite easily available. Whether it's a problem or not depends on the
          intended audience of the token. An ID token is intended for the
          client's developers. You expect it to be decoded and its data used by
          the client. An access token, on the other hand, is intended for API
          developers. The API should decode and validate the token. If you issue
          JWT access tokens to your clients you have to remember that client
          developers will be able to access the data inside that token. And
          believe us — if they can, they will. This should make you consider a
          few things:
        </p>
        <p>
          <ul>
            <li>
              Some developers can start using the data from the JWT in their
              applications. This isn't a problem in itself but can explode the
              minute you decide to introduce some changes to the structure of
              the data in your JWT. Suddenly many integrating apps can stop
              working as they won't be prepared for the new structure (e.g.,
              some fields missing, or a change to the max length of a field).
            </li>
            <li>
              As everyone can read what is inside the token, privacy should be
              taken into account. If you want to put sensitive data about a user
              in a token, or even Personally Identifiable Information (PII),
              remember that anyone can decode the token and access the data. If
              such information can't be removed from the token you should
              consider switching to the Phantom Token approach or the Split
              Token approach , where an opaque token is used outside your
              infrastructure, and JWTs are only available to your APIs, thanks
              to integration with an API gateway. Users’ private data is not the
              only information that can be leaked in a JWT. You should make sure
              that you don't put any valuable information about your API in the
              token. Anything that would help attackers to breach your API.
            </li>
          </ul>
        </p>
        <p>
          It's also good to keep in mind, that access tokens are most often used
          as bearer tokens. That means that you accept the token from whoever
          presented it to you — it's pretty much like paying with cash in a
          shop. If you find a $10 bill lying in the street, and pay with it for
          a coffee, it will be accepted, as long as it's a genuine banknote. The
          same applies to bearer access tokens. If that could pose problems to
          your application, you can change the bearer token into a Proof of
          Possession token (a PoP token) by adding a cnf claim — a confirmation
          claim. The claim contains information that allows the resource server
          to verify whether the holder is allowed to use the given token, e.g.,
          a fingerprint of the client’s certificate.
        </p>
        <h2 className="text-orange-500">
          2. Avoid JWTs With Sensitive Data on the Front Channel
        </h2>
        <p>
          When it comes to access tokens, they can easily be replaced by opaque
          tokens (as mentioned in the previous section), but the ID token is
          always a JWT. This means that you should put extra care into what is
          available in the JWT so that no sensitive data is unintentionally
          revealed. It will be much safer for your UI client to call the user
          info endpoint and get the user's data from there instead of keeping it
          directly in the ID token. Once tokens are cleared of sensitive data
          there will be no incentive for encrypting them. Even though encryption
          might sound like an excellent solution to keeping data private, the
          reality is that it is hard to configure and maintain secure encryption
          mechanisms. What is more, encryption requires much more computational
          resources to be used, something that might become a burden for
          high-traffic applications.
        </p>
        <h2 className="text-xl text-orange-600">3. What Algorithms to use</h2>
        <p>
          Regardless if the token is signed (a JWS) or encrypted (a JWE) it will
          contain an alg claim in the header. It indicates which algorithm has
          been used for signing or encryption. When verifying or decrypting the
          token you should always check the value of this claim with a whitelist
          of algorithms that your system accepts. This mitigates an attack
          vector where someone would tamper with the token and make you use a
          different, probably less secure algorithm to verify the signature or
          decrypt the token. Whitelisting algorithms is preferred over
          blacklisting, as it prevents any issues with case sensitivity. There
          were attacks on APIs that leveraged the fact that the algorithm noNe
          was interpreted as none (so no validation was performed) but was not
          discarded by the resource server (even though none was forbidden). The
          special case of the none value in the alg claim tells clients and
          resource servers that the JWS is actually not signed at all. This
          option is not recommended, and you should be absolutely sure what
          you're doing if you want to enable unsigned JWTs. This would usually
          mean that you have strong certainty of the identity of both the issuer
          of the token and the client that handles the token, and you're
          absolutely sure that no party could have tampered with the token in
          transit.
        </p>
        <p>
          The registry for JSON Web Signatures and Encryption Algorithms lists
          all available algorithms that can be used to sign or encrypt JWTs. It
          also tells you which algorithms are recommended to be implemented by
          clients and servers, given the current state of knowledge on
          cryptography security. If you want to ensure financial-grade security
          to your signature then have a look at the recommendations outlined in
          the Financial-grade API security profile.
        </p>
        <p>
          When signing is considered, elliptic curve-based algorithms are
          considered more secure. The option with the best security and
          performance is EdDSA , though ES256 (The Elliptic Curve Digital
          Signature Algorithm (ECDSA) using P-256 and SHA-256) is also a good
          choice. The most widely used option, supported by most technology
          stacks, is RS256 (RSASSA-PKCS1-v1_5 using SHA-256). The former ones
          are a lot faster than the latter, which is one of the main reasons for
          the stronger recommendation. The latter has been around much longer
          and offers better support in different languages and implementations.
          Still, if your setup enables this, and you're pretty sure that your
          clients will be able to use it, you should go for the EdDSA or ES256.
        </p>
        <p>
          If you really need to use symmetric keys, then HS256 (HMAC using
          SHA-256) should be your choice — though using symmetric keys is not
          recommended, take a look at When to Use Symmetric Signing to learn
          why.
        </p>
      </div>

      <div className="w-5/6 mx-auto mt-5 border p-4">
        <h2 className="text-xl text-green-600 text-center">
          Node.js vs JavaScript – Difference between Node and JavaScript
        </h2>
        <p>
          JavaScript is a programming language that is lightweight,
          object-oriented, and implements a standard called ECMAScript. It was
          developed in 1995. Node.js is a runtime environment for executing
          JavaScript code outside the browser. It was created in 2009. We will
          discuss all the differences between JavaScript and Node.js to resolve
          your dilemma but first, let’s review them both individually, NodeJS vs
          JavaScript.
        </p>
        <h2 className="text-xl text-orange-600">What is JavaScript?</h2>
        <p>
          JavaScript is a programming language used for building dynamic HTML
          pages. JavaScript runs on the browser that’s why it is called
          client-side scripting. But with the help of Node.js, we can also run
          it on the server. It was released in 1995, initially named LiveScript.
          Every browser has a JavaSript engine that converts JavaScript code
          into machine code that the computer can understand. It is a scripting
          language. Different browsers use different JavaScript engines: MS Edge
          uses Chakra, Chrome uses V8, Firefox uses SpiderMonkey and Safari uses
          JavaScriptCore. The V8 JavaScript engine built for Google Chrome is
          the fastest, just-in-time compiler with no interpreter.
        </p>
        <h2 className="text-xl text-orange-600">What is Node.js?</h2>
        <p>
          Node.js is a JavaScript runtime built on Chrome’s VS JavaScript
          engine. It is a JavaScript running on the server. JavaScript runtime
          environment is just the environment your applications are running on.
          In 2009, an idea came to the mind of Ryan Dahl(Google Engineer) that
          why not run JavaScript outside the browser, so he took VS engine and
          embedded it in a C++ program and called it Node.exe which later on
          became Node.js.
        </p>
      </div>

      <div className="w-5/6 mx-auto border p-5 mt-5">
        <h2 className="text-center text-green-600 text-xl">
          How does NodeJS handle multiple requests at the same time?
        </h2>
        <p>
          Node.js is designed to handle multiple requests simultaneously through
          its event-driven, non-blocking I/O model. Here's a brief overview of
          how Node.js achieves this:
        </p>
        <p className="font-bold"> Event-Driven Architecture:</p>
        <p>
          <ul>
            <li>
              Node.js operates on an event-driven architecture using the
              JavaScript event loop. The event loop is a single-threaded loop
              that continuously listens for events and executes the associated
              callbacks.
            </li>
            <li>
              When a request is received, Node.js doesn't wait for the I/O
              operation to complete before moving on to the next task. Instead,
              it registers a callback function and continues processing other
              events.
            </li>
          </ul>
        </p>
        <p className="font-bold">Non-Blocking I/O:</p>
        <p>
          <ul>
            <li>
              Node.js uses non-blocking I/O operations, which means that it
              doesn't block the execution of code while waiting for I/O
              operations (such as reading from a file or making a network
              request) to complete.
            </li>
            <li>
              When a non-blocking I/O operation is initiated, Node.js continues
              to process other events. When the I/O operation is finished, the
              associated callback is placed in the event queue for execution.
            </li>
          </ul>
        </p>
        <p className="font-bold">Event Loop:</p>
        <p>
          <ul>
            <li>
              The event loop is at the core of Node.js's concurrency model. It
              constantly checks the event queue for any pending events.
            </li>
            <li>
              When the event loop finds an event, it dequeues it and executes
              the associated callback. This allows Node.js to efficiently handle
              multiple requests in a single thread.
            </li>
          </ul>
        </p>
        <p className="font-bold">Asynchronous Programming:</p>
        <p>
          Node.js encourages asynchronous programming patterns using callbacks,
          Promises, or async/await. Asynchronous code allows multiple tasks to
          be handled concurrently without waiting for each one to complete
          before moving on to the next.
        </p>
      </div>
    </div>
  );
};

export default Blog;
