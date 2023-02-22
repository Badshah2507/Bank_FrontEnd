import React from "react";

export default function ListDocs(props) {

    return (

        <div className="col-md-9 ms-sm-auto col-lg-10 my-1 mx-auto">
            <div className="table-responsive">
                <table className="table table-striped table-md">
                    <thead>
                        <tr>
                            <th>Customer ID</th>
                            <th>Doctype</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log("Prop" + props.accesshists.length)}
                        {console.log("Prop" + props)}
                        {props.accesshists.length > 0 &&
                            props.accesshists.map((element, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{element.customer_id}</td>
                                        <td>{element.doc_type}</td>
                                        <td>{element.status}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}