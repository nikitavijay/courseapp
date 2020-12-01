import React from 'react';
import Heading from './Heading'
import Link from 'gatsby'
const DualInfoblock = (props) => {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title ={props.heading}/>
                <div className="row">
                    <div className="col-8 mx-auto">
<p className="lead mx-5">
    Lorem ipsum dolor sit amet consectetur, adipi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, veritatis vitae? Cupiditate assumenda ab facere nesciunt repellendus error odio mollitia.sicing elit. Ullam nostrum odit voluptatum consequatur necessitatibus unde officia rerum. Voluptate commodi harum nihil eaque. Similique asperiores nihil molestias minima molestiae vero quo iusto sunt alias ut iure consequuntur esse minus laborum, rem doloribus consequatur accusantium illum omnis natus accusamus ipsam magnam? Dolor?
    
</p>
                    </div>
                    <div className="col-4 mx-auto">

                    <div class="card" style={{width: "18rem"}}>
  <img src="https://images.pexels.com/photos/1739849/pexels-photo-1739849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default DualInfoblock;