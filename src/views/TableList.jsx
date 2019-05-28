import React from "react";

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col
} from "reactstrap";
let data = require("../variables/mock.json");

class Tables extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h4">
                                        Total Patients: {data.length + " |\t"}{" "}
                                        Active Patients:{" "}
                                        {data.filter(p => p.active).length}
                                    </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Table className="tablesorter" responsive>
                                        <thead className="text-primary">
                                            <tr>
                                                <th className="text-center">
                                                    Name
                                                </th>
                                                <th className="text-center">
                                                    Gender
                                                </th>
                                                <th className="text-center">
                                                    Room No.
                                                </th>
                                                <th className="text-center">
                                                    Flow Rate (ml/hr)
                                                </th>
                                                <th className="text-center">
                                                    Device Active
                                                </th>
                                                <th className="text-center">
                                                    Last Used
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map(p => (
                                                <tr>
                                                    <td className="text-center">
                                                        {p.name}
                                                    </td>
                                                    <td className="text-center">
                                                        {p.gender}
                                                    </td>
                                                    <td className="text-center">
                                                        {p.room}
                                                    </td>
                                                    <td className="text-center">
                                                        {p.flow}
                                                    </td>
                                                    <td className="text-center">
                                                        {p.active.toString()}
                                                    </td>
                                                    <td className="text-center">
                                                        {p.last_active}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Tables;
