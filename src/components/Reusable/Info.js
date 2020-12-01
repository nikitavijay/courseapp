import React from 'react';
import Heading  from "./Heading"
import { Link } from "gatsby"
const Info = ({heading}) => {
    return (
        <section className="bg-theme my-5 py-4 ">
        <div className="container">
          <Heading title={heading} />
          <div className="row">
            <div className="col-10 mx-auto text-center">
              <p className="lead text-white mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                excepturi aspernatur harum voluptatum. Nisi, veritatis nobis? Ea
                vel enim delectus cupiditate optio aspernatur nobis nostrum
                suscipit soluta tenetur asperiores placeat odio similique
                dolores quaerat est, a maxime libero quod error!
              </p>
              <Link to="/about">
                <button className="btn btn-warning btn-lg">{heading}</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Info;